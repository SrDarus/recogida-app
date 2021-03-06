/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { map, switchMap } from 'rxjs/operators';
import { applyRedirects as applyRedirectsFn } from '../apply_redirects';
/**
 * @param {?} moduleInjector
 * @param {?} configLoader
 * @param {?} urlSerializer
 * @param {?} config
 * @return {?}
 */
export function applyRedirects(moduleInjector, configLoader, urlSerializer, config) {
    return function (source) {
        return source.pipe(switchMap(t => applyRedirectsFn(moduleInjector, configLoader, urlSerializer, t.extractedUrl, config)
            .pipe(map(urlAfterRedirects => (Object.assign({}, t, { urlAfterRedirects }))))));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHlfcmVkaXJlY3RzLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvcm91dGVyL3NyYy9vcGVyYXRvcnMvYXBwbHlfcmVkaXJlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUMsY0FBYyxJQUFJLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7O0FBTXRFLE1BQU0sVUFBVSxjQUFjLENBQzFCLGNBQXdCLEVBQUUsWUFBZ0MsRUFBRSxhQUE0QixFQUN4RixNQUFjO0lBQ2hCLE9BQU8sVUFBUyxNQUF3QztRQUN0RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDO2FBQ2hGLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLG1CQUFLLENBQUMsSUFBRSxpQkFBaUIsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0UsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdG9yfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHthcHBseVJlZGlyZWN0cyBhcyBhcHBseVJlZGlyZWN0c0ZufSBmcm9tICcuLi9hcHBseV9yZWRpcmVjdHMnO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge05hdmlnYXRpb25UcmFuc2l0aW9ufSBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZXJDb25maWdMb2FkZXJ9IGZyb20gJy4uL3JvdXRlcl9jb25maWdfbG9hZGVyJztcbmltcG9ydCB7VXJsU2VyaWFsaXplcn0gZnJvbSAnLi4vdXJsX3RyZWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWRpcmVjdHMoXG4gICAgbW9kdWxlSW5qZWN0b3I6IEluamVjdG9yLCBjb25maWdMb2FkZXI6IFJvdXRlckNvbmZpZ0xvYWRlciwgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplcixcbiAgICBjb25maWc6IFJvdXRlcyk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxOYXZpZ2F0aW9uVHJhbnNpdGlvbj4ge1xuICByZXR1cm4gZnVuY3Rpb24oc291cmNlOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25UcmFuc2l0aW9uPikge1xuICAgIHJldHVybiBzb3VyY2UucGlwZShzd2l0Y2hNYXAoXG4gICAgICAgIHQgPT4gYXBwbHlSZWRpcmVjdHNGbihtb2R1bGVJbmplY3RvciwgY29uZmlnTG9hZGVyLCB1cmxTZXJpYWxpemVyLCB0LmV4dHJhY3RlZFVybCwgY29uZmlnKVxuICAgICAgICAgICAgICAgICAucGlwZShtYXAodXJsQWZ0ZXJSZWRpcmVjdHMgPT4gKHsuLi50LCB1cmxBZnRlclJlZGlyZWN0c30pKSkpKTtcbiAgfTtcbn1cbiJdfQ==