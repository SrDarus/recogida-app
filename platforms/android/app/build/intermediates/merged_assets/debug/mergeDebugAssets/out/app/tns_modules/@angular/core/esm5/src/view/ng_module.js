/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { getInjectableDef } from '../di/defs';
import { resolveForwardRef } from '../di/forward_ref';
import { INJECTOR, Injector } from '../di/injector';
import { setCurrentInjector } from '../di/injector_compatibility';
import { APP_ROOT } from '../di/scope';
import { NgModuleRef } from '../linker/ng_module_factory';
import { stringify } from '../util';
import { splitDepsDsl, tokenKey } from './util';
var UNDEFINED_VALUE = new Object();
var InjectorRefTokenKey = tokenKey(Injector);
var INJECTORRefTokenKey = tokenKey(INJECTOR);
var NgModuleRefTokenKey = tokenKey(NgModuleRef);
export function moduleProvideDef(flags, token, value, deps) {
    // Need to resolve forwardRefs as e.g. for `useValue` we
    // lowered the expression and then stopped evaluating it,
    // i.e. also didn't unwrap it.
    value = resolveForwardRef(value);
    var depDefs = splitDepsDsl(deps, stringify(token));
    return {
        // will bet set by the module definition
        index: -1,
        deps: depDefs, flags: flags, token: token, value: value
    };
}
export function moduleDef(providers) {
    var providersByKey = {};
    var modules = [];
    var isRoot = false;
    for (var i = 0; i < providers.length; i++) {
        var provider = providers[i];
        if (provider.token === APP_ROOT && provider.value === true) {
            isRoot = true;
        }
        if (provider.flags & 1073741824 /* TypeNgModule */) {
            modules.push(provider.token);
        }
        provider.index = i;
        providersByKey[tokenKey(provider.token)] = provider;
    }
    return {
        // Will be filled later...
        factory: null,
        providersByKey: providersByKey,
        providers: providers,
        modules: modules,
        isRoot: isRoot,
    };
}
export function initNgModule(data) {
    var def = data._def;
    var providers = data._providers = new Array(def.providers.length);
    for (var i = 0; i < def.providers.length; i++) {
        var provDef = def.providers[i];
        if (!(provDef.flags & 4096 /* LazyProvider */)) {
            // Make sure the provider has not been already initialized outside this loop.
            if (providers[i] === undefined) {
                providers[i] = _createProviderInstance(data, provDef);
            }
        }
    }
}
export function resolveNgModuleDep(data, depDef, notFoundValue) {
    if (notFoundValue === void 0) { notFoundValue = Injector.THROW_IF_NOT_FOUND; }
    var former = setCurrentInjector(data);
    try {
        if (depDef.flags & 8 /* Value */) {
            return depDef.token;
        }
        if (depDef.flags & 2 /* Optional */) {
            notFoundValue = null;
        }
        if (depDef.flags & 1 /* SkipSelf */) {
            return data._parent.get(depDef.token, notFoundValue);
        }
        var tokenKey_1 = depDef.tokenKey;
        switch (tokenKey_1) {
            case InjectorRefTokenKey:
            case INJECTORRefTokenKey:
            case NgModuleRefTokenKey:
                return data;
        }
        var providerDef = data._def.providersByKey[tokenKey_1];
        var injectableDef = void 0;
        if (providerDef) {
            var providerInstance = data._providers[providerDef.index];
            if (providerInstance === undefined) {
                providerInstance = data._providers[providerDef.index] =
                    _createProviderInstance(data, providerDef);
            }
            return providerInstance === UNDEFINED_VALUE ? undefined : providerInstance;
        }
        else if ((injectableDef = getInjectableDef(depDef.token)) && targetsModule(data, injectableDef)) {
            var index = data._providers.length;
            data._def.providersByKey[depDef.tokenKey] = {
                flags: 1024 /* TypeFactoryProvider */ | 4096 /* LazyProvider */,
                value: injectableDef.factory,
                deps: [], index: index,
                token: depDef.token,
            };
            data._providers[index] = UNDEFINED_VALUE;
            return (data._providers[index] =
                _createProviderInstance(data, data._def.providersByKey[depDef.tokenKey]));
        }
        else if (depDef.flags & 4 /* Self */) {
            return notFoundValue;
        }
        return data._parent.get(depDef.token, notFoundValue);
    }
    finally {
        setCurrentInjector(former);
    }
}
function moduleTransitivelyPresent(ngModule, scope) {
    return ngModule._def.modules.indexOf(scope) > -1;
}
function targetsModule(ngModule, def) {
    return def.providedIn != null && (moduleTransitivelyPresent(ngModule, def.providedIn) ||
        def.providedIn === 'root' && ngModule._def.isRoot);
}
function _createProviderInstance(ngModule, providerDef) {
    var injectable;
    switch (providerDef.flags & 201347067 /* Types */) {
        case 512 /* TypeClassProvider */:
            injectable = _createClass(ngModule, providerDef.value, providerDef.deps);
            break;
        case 1024 /* TypeFactoryProvider */:
            injectable = _callFactory(ngModule, providerDef.value, providerDef.deps);
            break;
        case 2048 /* TypeUseExistingProvider */:
            injectable = resolveNgModuleDep(ngModule, providerDef.deps[0]);
            break;
        case 256 /* TypeValueProvider */:
            injectable = providerDef.value;
            break;
    }
    // The read of `ngOnDestroy` here is slightly expensive as it's megamorphic, so it should be
    // avoided if possible. The sequence of checks here determines whether ngOnDestroy needs to be
    // checked. It might not if the `injectable` isn't an object or if NodeFlags.OnDestroy is already
    // set (ngOnDestroy was detected statically).
    if (injectable !== UNDEFINED_VALUE && injectable != null && typeof injectable === 'object' &&
        !(providerDef.flags & 131072 /* OnDestroy */) && typeof injectable.ngOnDestroy === 'function') {
        providerDef.flags |= 131072 /* OnDestroy */;
    }
    return injectable === undefined ? UNDEFINED_VALUE : injectable;
}
function _createClass(ngModule, ctor, deps) {
    var len = deps.length;
    switch (len) {
        case 0:
            return new ctor();
        case 1:
            return new ctor(resolveNgModuleDep(ngModule, deps[0]));
        case 2:
            return new ctor(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]));
        case 3:
            return new ctor(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]), resolveNgModuleDep(ngModule, deps[2]));
        default:
            var depValues = new Array(len);
            for (var i = 0; i < len; i++) {
                depValues[i] = resolveNgModuleDep(ngModule, deps[i]);
            }
            return new (ctor.bind.apply(ctor, tslib_1.__spread([void 0], depValues)))();
    }
}
function _callFactory(ngModule, factory, deps) {
    var len = deps.length;
    switch (len) {
        case 0:
            return factory();
        case 1:
            return factory(resolveNgModuleDep(ngModule, deps[0]));
        case 2:
            return factory(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]));
        case 3:
            return factory(resolveNgModuleDep(ngModule, deps[0]), resolveNgModuleDep(ngModule, deps[1]), resolveNgModuleDep(ngModule, deps[2]));
        default:
            var depValues = Array(len);
            for (var i = 0; i < len; i++) {
                depValues[i] = resolveNgModuleDep(ngModule, deps[i]);
            }
            return factory.apply(void 0, tslib_1.__spread(depValues));
    }
}
export function callNgModuleLifecycle(ngModule, lifecycles) {
    var def = ngModule._def;
    var destroyed = new Set();
    for (var i = 0; i < def.providers.length; i++) {
        var provDef = def.providers[i];
        if (provDef.flags & 131072 /* OnDestroy */) {
            var instance = ngModule._providers[i];
            if (instance && instance !== UNDEFINED_VALUE) {
                var onDestroy = instance.ngOnDestroy;
                if (typeof onDestroy === 'function' && !destroyed.has(instance)) {
                    onDestroy.apply(instance);
                    destroyed.add(instance);
                }
            }
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29yZS9zcmMvdmlldy9uZ19tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDM0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBR2xDLE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTlDLElBQU0sZUFBZSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFFckMsSUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0MsSUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0MsSUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFbEQsTUFBTSxVQUFVLGdCQUFnQixDQUM1QixLQUFnQixFQUFFLEtBQVUsRUFBRSxLQUFVLEVBQ3hDLElBQStCO0lBQ2pDLHdEQUF3RDtJQUN4RCx5REFBeUQ7SUFDekQsOEJBQThCO0lBQzlCLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENB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U0FBUyxHQUF1QixRQUFRLENBQUMsV0FBVyxDQUFDO2dCQUMzRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFVBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQy9ELFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzFCLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pCO2FBQ0Y7U0FDRjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlRGVmLCBnZXRJbmplY3RhYmxlRGVmfSBmcm9tICcuLi9kaS9kZWZzJztcbmltcG9ydCB7cmVzb2x2ZUZvcndhcmRSZWZ9IGZyb20gJy4uL2RpL2ZvcndhcmRfcmVmJztcbmltcG9ydCB7SU5KRUNUT1IsIEluamVjdG9yfSBmcm9tICcuLi9kaS9pbmplY3Rvcic7XG5pbXBvcnQge3NldEN1cnJlbnRJbmplY3Rvcn0gZnJvbSAnLi4vZGkvaW5qZWN0b3JfY29tcGF0aWJpbGl0eSc7XG5pbXBvcnQge0FQUF9ST09UfSBmcm9tICcuLi9kaS9zY29wZSc7XG5pbXBvcnQge05nTW9kdWxlUmVmfSBmcm9tICcuLi9saW5rZXIvbmdfbW9kdWxlX2ZhY3RvcnknO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQge0RlcERlZiwgRGVwRmxhZ3MsIE5nTW9kdWxlRGF0YSwgTmdNb2R1bGVEZWZpbml0aW9uLCBOZ01vZHVsZVByb3ZpZGVyRGVmLCBOb2RlRmxhZ3N9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtzcGxpdERlcHNEc2wsIHRva2VuS2V5fSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBVTkRFRklORURfVkFMVUUgPSBuZXcgT2JqZWN0KCk7XG5cbmNvbnN0IEluamVjdG9yUmVmVG9rZW5LZXkgPSB0b2tlbktleShJbmplY3Rvcik7XG5jb25zdCBJTkpFQ1RPUlJlZlRva2VuS2V5ID0gdG9rZW5LZXkoSU5KRUNUT1IpO1xuY29uc3QgTmdNb2R1bGVSZWZUb2tlbktleSA9IHRva2VuS2V5KE5nTW9kdWxlUmVmKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZHVsZVByb3ZpZGVEZWYoXG4gICAgZmxhZ3M6IE5vZGVGbGFncywgdG9rZW46IGFueSwgdmFsdWU6IGFueSxcbiAgICBkZXBzOiAoW0RlcEZsYWdzLCBhbnldIHwgYW55KVtdKTogTmdNb2R1bGVQcm92aWRlckRlZiB7XG4gIC8vIE5lZWQgdG8gcmVzb2x2ZSBmb3J3YXJkUmVmcyBhcyBlLmcuIGZvciBgdXNlVmFsdWVgIHdlXG4gIC8vIGxvd2VyZWQgdGhlIGV4cHJlc3Npb24gYW5kIHRoZW4gc3RvcHBlZCBldmFsdWF0aW5nIGl0LFxuICAvLyBpLmUuIGFsc28gZGlkbid0IHVud3JhcCBpdC5cbiAgdmFsdWUgPSByZXNvbHZlRm9yd2FyZFJlZih2YWx1ZSk7XG4gIGNvbnN0IGRlcERlZnMgPSBzcGxpdERlcHNEc2woZGVwcywgc3RyaW5naWZ5KHRva2VuKSk7XG4gIHJldHVybiB7XG4gICAgLy8gd2lsbCBiZXQgc2V0IGJ5IHRoZSBtb2R1bGUgZGVmaW5pdGlvblxuICAgIGluZGV4OiAtMSxcbiAgICBkZXBzOiBkZXBEZWZzLCBmbGFncywgdG9rZW4sIHZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2R1bGVEZWYocHJvdmlkZXJzOiBOZ01vZHVsZVByb3ZpZGVyRGVmW10pOiBOZ01vZHVsZURlZmluaXRpb24ge1xuICBjb25zdCBwcm92aWRlcnNCeUtleToge1trZXk6IHN0cmluZ106IE5nTW9kdWxlUHJvdmlkZXJEZWZ9ID0ge307XG4gIGNvbnN0IG1vZHVsZXMgPSBbXTtcbiAgbGV0IGlzUm9vdDogYm9vbGVhbiA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gcHJvdmlkZXJzW2ldO1xuICAgIGlmIChwcm92aWRlci50b2tlbiA9PT0gQVBQX1JPT1QgJiYgcHJvdmlkZXIudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGlzUm9vdCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChwcm92aWRlci5mbGFncyAmIE5vZGVGbGFncy5UeXBlTmdNb2R1bGUpIHtcbiAgICAgIG1vZHVsZXMucHVzaChwcm92aWRlci50b2tlbik7XG4gICAgfVxuICAgIHByb3ZpZGVyLmluZGV4ID0gaTtcbiAgICBwcm92aWRlcnNCeUtleVt0b2tlbktleShwcm92aWRlci50b2tlbildID0gcHJvdmlkZXI7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAvLyBXaWxsIGJlIGZpbGxlZCBsYXRlci4uLlxuICAgIGZhY3Rvcnk6IG51bGwsXG4gICAgcHJvdmlkZXJzQnlLZXksXG4gICAgcHJvdmlkZXJzLFxuICAgIG1vZHVsZXMsXG4gICAgaXNSb290LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE5nTW9kdWxlKGRhdGE6IE5nTW9kdWxlRGF0YSkge1xuICBjb25zdCBkZWYgPSBkYXRhLl9kZWY7XG4gIGNvbnN0IHByb3ZpZGVycyA9IGRhdGEuX3Byb3ZpZGVycyA9IG5ldyBBcnJheShkZWYucHJvdmlkZXJzLmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmLnByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb3ZEZWYgPSBkZWYucHJvdmlkZXJzW2ldO1xuICAgIGlmICghKHByb3ZEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuTGF6eVByb3ZpZGVyKSkge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBwcm92aWRlciBoYXMgbm90IGJlZW4gYWxyZWFkeSBpbml0aWFsaXplZCBvdXRzaWRlIHRoaXMgbG9vcC5cbiAgICAgIGlmIChwcm92aWRlcnNbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aWRlcnNbaV0gPSBfY3JlYXRlUHJvdmlkZXJJbnN0YW5jZShkYXRhLCBwcm92RGVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVOZ01vZHVsZURlcChcbiAgICBkYXRhOiBOZ01vZHVsZURhdGEsIGRlcERlZjogRGVwRGVmLCBub3RGb3VuZFZhbHVlOiBhbnkgPSBJbmplY3Rvci5USFJPV19JRl9OT1RfRk9VTkQpOiBhbnkge1xuICBjb25zdCBmb3JtZXIgPSBzZXRDdXJyZW50SW5qZWN0b3IoZGF0YSk7XG4gIHRyeSB7XG4gICAgaWYgKGRlcERlZi5mbGFncyAmIERlcEZsYWdzLlZhbHVlKSB7XG4gICAgICByZXR1cm4gZGVwRGVmLnRva2VuO1xuICAgIH1cbiAgICBpZiAoZGVwRGVmLmZsYWdzICYgRGVwRmxhZ3MuT3B0aW9uYWwpIHtcbiAgICAgIG5vdEZvdW5kVmFsdWUgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZGVwRGVmLmZsYWdzICYgRGVwRmxhZ3MuU2tpcFNlbGYpIHtcbiAgICAgIHJldHVybiBkYXRhLl9wYXJlbnQuZ2V0KGRlcERlZi50b2tlbiwgbm90Rm91bmRWYWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHRva2VuS2V5ID0gZGVwRGVmLnRva2VuS2V5O1xuICAgIHN3aXRjaCAodG9rZW5LZXkpIHtcbiAgICAgIGNhc2UgSW5qZWN0b3JSZWZUb2tlbktleTpcbiAgICAgIGNhc2UgSU5KRUNUT1JSZWZUb2tlbktleTpcbiAgICAgIGNhc2UgTmdNb2R1bGVSZWZUb2tlbktleTpcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNvbnN0IHByb3ZpZGVyRGVmID0gZGF0YS5fZGVmLnByb3ZpZGVyc0J5S2V5W3Rva2VuS2V5XTtcbiAgICBsZXQgaW5qZWN0YWJsZURlZjogSW5qZWN0YWJsZURlZjxhbnk+fG51bGw7XG4gICAgaWYgKHByb3ZpZGVyRGVmKSB7XG4gICAgICBsZXQgcHJvdmlkZXJJbnN0YW5jZSA9IGRhdGEuX3Byb3ZpZGVyc1twcm92aWRlckRlZi5pbmRleF07XG4gICAgICBpZiAocHJvdmlkZXJJbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3ZpZGVySW5zdGFuY2UgPSBkYXRhLl9wcm92aWRlcnNbcHJvdmlkZXJEZWYuaW5kZXhdID1cbiAgICAgICAgICAgIF9jcmVhdGVQcm92aWRlckluc3RhbmNlKGRhdGEsIHByb3ZpZGVyRGVmKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm92aWRlckluc3RhbmNlID09PSBVTkRFRklORURfVkFMVUUgPyB1bmRlZmluZWQgOiBwcm92aWRlckluc3RhbmNlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChpbmplY3RhYmxlRGVmID0gZ2V0SW5qZWN0YWJsZURlZihkZXBEZWYudG9rZW4pKSAmJiB0YXJnZXRzTW9kdWxlKGRhdGEsIGluamVjdGFibGVEZWYpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGRhdGEuX3Byb3ZpZGVycy5sZW5ndGg7XG4gICAgICBkYXRhLl9kZWYucHJvdmlkZXJzQnlLZXlbZGVwRGVmLnRva2VuS2V5XSA9IHtcbiAgICAgICAgZmxhZ3M6IE5vZGVGbGFncy5UeXBlRmFjdG9yeVByb3ZpZGVyIHwgTm9kZUZsYWdzLkxhenlQcm92aWRlcixcbiAgICAgICAgdmFsdWU6IGluamVjdGFibGVEZWYuZmFjdG9yeSxcbiAgICAgICAgZGVwczogW10sIGluZGV4LFxuICAgICAgICB0b2tlbjogZGVwRGVmLnRva2VuLFxuICAgICAgfTtcbiAgICAgIGRhdGEuX3Byb3ZpZGVyc1tpbmRleF0gPSBVTkRFRklORURfVkFMVUU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIGRhdGEuX3Byb3ZpZGVyc1tpbmRleF0gPVxuICAgICAgICAgICAgICBfY3JlYXRlUHJvdmlkZXJJbnN0YW5jZShkYXRhLCBkYXRhLl9kZWYucHJvdmlkZXJzQnlLZXlbZGVwRGVmLnRva2VuS2V5XSkpO1xuICAgIH0gZWxzZSBpZiAoZGVwRGVmLmZsYWdzICYgRGVwRmxhZ3MuU2VsZikge1xuICAgICAgcmV0dXJuIG5vdEZvdW5kVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLl9wYXJlbnQuZ2V0KGRlcERlZi50b2tlbiwgbm90Rm91bmRWYWx1ZSk7XG4gIH0gZmluYWxseSB7XG4gICAgc2V0Q3VycmVudEluamVjdG9yKGZvcm1lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW9kdWxlVHJhbnNpdGl2ZWx5UHJlc2VudChuZ01vZHVsZTogTmdNb2R1bGVEYXRhLCBzY29wZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBuZ01vZHVsZS5fZGVmLm1vZHVsZXMuaW5kZXhPZihzY29wZSkgPiAtMTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0c01vZHVsZShuZ01vZHVsZTogTmdNb2R1bGVEYXRhLCBkZWY6IEluamVjdGFibGVEZWY8YW55Pik6IGJvb2xlYW4ge1xuICByZXR1cm4gZGVmLnByb3ZpZGVkSW4gIT0gbnVsbCAmJiAobW9kdWxlVHJhbnNpdGl2ZWx5UHJlc2VudChuZ01vZHVsZSwgZGVmLnByb3ZpZGVkSW4pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWYucHJvdmlkZWRJbiA9PT0gJ3Jvb3QnICYmIG5nTW9kdWxlLl9kZWYuaXNSb290KTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVByb3ZpZGVySW5zdGFuY2UobmdNb2R1bGU6IE5nTW9kdWxlRGF0YSwgcHJvdmlkZXJEZWY6IE5nTW9kdWxlUHJvdmlkZXJEZWYpOiBhbnkge1xuICBsZXQgaW5qZWN0YWJsZTogYW55O1xuICBzd2l0Y2ggKHByb3ZpZGVyRGVmLmZsYWdzICYgTm9kZUZsYWdzLlR5cGVzKSB7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZUNsYXNzUHJvdmlkZXI6XG4gICAgICBpbmplY3RhYmxlID0gX2NyZWF0ZUNsYXNzKG5nTW9kdWxlLCBwcm92aWRlckRlZi52YWx1ZSwgcHJvdmlkZXJEZWYuZGVwcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIE5vZGVGbGFncy5UeXBlRmFjdG9yeVByb3ZpZGVyOlxuICAgICAgaW5qZWN0YWJsZSA9IF9jYWxsRmFjdG9yeShuZ01vZHVsZSwgcHJvdmlkZXJEZWYudmFsdWUsIHByb3ZpZGVyRGVmLmRlcHMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBOb2RlRmxhZ3MuVHlwZVVzZUV4aXN0aW5nUHJvdmlkZXI6XG4gICAgICBpbmplY3RhYmxlID0gcmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBwcm92aWRlckRlZi5kZXBzWzBdKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTm9kZUZsYWdzLlR5cGVWYWx1ZVByb3ZpZGVyOlxuICAgICAgaW5qZWN0YWJsZSA9IHByb3ZpZGVyRGVmLnZhbHVlO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICAvLyBUaGUgcmVhZCBvZiBgbmdPbkRlc3Ryb3lgIGhlcmUgaXMgc2xpZ2h0bHkgZXhwZW5zaXZlIGFzIGl0J3MgbWVnYW1vcnBoaWMsIHNvIGl0IHNob3VsZCBiZVxuICAvLyBhdm9pZGVkIGlmIHBvc3NpYmxlLiBUaGUgc2VxdWVuY2Ugb2YgY2hlY2tzIGhlcmUgZGV0ZXJtaW5lcyB3aGV0aGVyIG5nT25EZXN0cm95IG5lZWRzIHRvIGJlXG4gIC8vIGNoZWNrZWQuIEl0IG1pZ2h0IG5vdCBpZiB0aGUgYGluamVjdGFibGVgIGlzbid0IGFuIG9iamVjdCBvciBpZiBOb2RlRmxhZ3MuT25EZXN0cm95IGlzIGFscmVhZHlcbiAgLy8gc2V0IChuZ09uRGVzdHJveSB3YXMgZGV0ZWN0ZWQgc3RhdGljYWxseSkuXG4gIGlmIChpbmplY3RhYmxlICE9PSBVTkRFRklORURfVkFMVUUgJiYgaW5qZWN0YWJsZSAhPSBudWxsICYmIHR5cGVvZiBpbmplY3RhYmxlID09PSAnb2JqZWN0JyAmJlxuICAgICAgIShwcm92aWRlckRlZi5mbGFncyAmIE5vZGVGbGFncy5PbkRlc3Ryb3kpICYmIHR5cGVvZiBpbmplY3RhYmxlLm5nT25EZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdmlkZXJEZWYuZmxhZ3MgfD0gTm9kZUZsYWdzLk9uRGVzdHJveTtcbiAgfVxuICByZXR1cm4gaW5qZWN0YWJsZSA9PT0gdW5kZWZpbmVkID8gVU5ERUZJTkVEX1ZBTFVFIDogaW5qZWN0YWJsZTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKG5nTW9kdWxlOiBOZ01vZHVsZURhdGEsIGN0b3I6IGFueSwgZGVwczogRGVwRGVmW10pOiBhbnkge1xuICBjb25zdCBsZW4gPSBkZXBzLmxlbmd0aDtcbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gbmV3IGN0b3IoKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gbmV3IGN0b3IocmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBkZXBzWzBdKSk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIG5ldyBjdG9yKHJlc29sdmVOZ01vZHVsZURlcChuZ01vZHVsZSwgZGVwc1swXSksIHJlc29sdmVOZ01vZHVsZURlcChuZ01vZHVsZSwgZGVwc1sxXSkpO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBuZXcgY3RvcihcbiAgICAgICAgICByZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMF0pLCByZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMV0pLFxuICAgICAgICAgIHJlc29sdmVOZ01vZHVsZURlcChuZ01vZHVsZSwgZGVwc1syXSkpO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zdCBkZXBWYWx1ZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZGVwVmFsdWVzW2ldID0gcmVzb2x2ZU5nTW9kdWxlRGVwKG5nTW9kdWxlLCBkZXBzW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgY3RvciguLi5kZXBWYWx1ZXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jYWxsRmFjdG9yeShuZ01vZHVsZTogTmdNb2R1bGVEYXRhLCBmYWN0b3J5OiBhbnksIGRlcHM6IERlcERlZltdKTogYW55IHtcbiAgY29uc3QgbGVuID0gZGVwcy5sZW5ndGg7XG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZmFjdG9yeShyZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMF0pKTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gZmFjdG9yeShyZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMF0pLCByZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMV0pKTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gZmFjdG9yeShcbiAgICAgICAgICByZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMF0pLCByZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbMV0pLFxuICAgICAgICAgIHJlc29sdmVOZ01vZHVsZURlcChuZ01vZHVsZSwgZGVwc1syXSkpO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zdCBkZXBWYWx1ZXMgPSBBcnJheShsZW4pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBkZXBWYWx1ZXNbaV0gPSByZXNvbHZlTmdNb2R1bGVEZXAobmdNb2R1bGUsIGRlcHNbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhY3RvcnkoLi4uZGVwVmFsdWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbE5nTW9kdWxlTGlmZWN5Y2xlKG5nTW9kdWxlOiBOZ01vZHVsZURhdGEsIGxpZmVjeWNsZXM6IE5vZGVGbGFncykge1xuICBjb25zdCBkZWYgPSBuZ01vZHVsZS5fZGVmO1xuICBjb25zdCBkZXN0cm95ZWQgPSBuZXcgU2V0PGFueT4oKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWYucHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvdkRlZiA9IGRlZi5wcm92aWRlcnNbaV07XG4gICAgaWYgKHByb3ZEZWYuZmxhZ3MgJiBOb2RlRmxhZ3MuT25EZXN0cm95KSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5nTW9kdWxlLl9wcm92aWRlcnNbaV07XG4gICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UgIT09IFVOREVGSU5FRF9WQUxVRSkge1xuICAgICAgICBjb25zdCBvbkRlc3Ryb3k6IEZ1bmN0aW9ufHVuZGVmaW5lZCA9IGluc3RhbmNlLm5nT25EZXN0cm95O1xuICAgICAgICBpZiAodHlwZW9mIG9uRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJyAmJiAhZGVzdHJveWVkLmhhcyhpbnN0YW5jZSkpIHtcbiAgICAgICAgICBvbkRlc3Ryb3kuYXBwbHkoaW5zdGFuY2UpO1xuICAgICAgICAgIGRlc3Ryb3llZC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=