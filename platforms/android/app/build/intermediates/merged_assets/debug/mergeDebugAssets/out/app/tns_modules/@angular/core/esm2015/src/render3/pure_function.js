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
import { bindingUpdated, bindingUpdated2, bindingUpdated3, bindingUpdated4, getBinding, updateBinding } from './instructions';
import { getBindingRoot, getCreationMode } from './state';
/**
 * If the value hasn't been saved, calls the pure function to store and return the
 * value. If it has been saved, returns the saved value.
 *
 * @template T
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn Function that returns a value
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} value
 */
export function pureFunction0(slotOffset, pureFn, thisArg) {
    /** @type {?} */
    const bindingIndex = getBindingRoot() + slotOffset;
    return getCreationMode() ?
        updateBinding(bindingIndex, thisArg ? pureFn.call(thisArg) : pureFn()) :
        getBinding(bindingIndex);
}
/**
 * If the value of the provided exp has changed, calls the pure function to return
 * an updated value. Or if the value has not changed, returns cached value.
 *
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn Function that returns an updated value
 * @param {?} exp Updated expression value
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} Updated or cached value
 */
export function pureFunction1(slotOffset, pureFn, exp, thisArg) {
    /** @type {?} */
    const bindingIndex = getBindingRoot() + slotOffset;
    return bindingUpdated(bindingIndex, exp) ?
        updateBinding(bindingIndex + 1, thisArg ? pureFn.call(thisArg, exp) : pureFn(exp)) :
        getBinding(bindingIndex + 1);
}
/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn
 * @param {?} exp1
 * @param {?} exp2
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} Updated or cached value
 */
export function pureFunction2(slotOffset, pureFn, exp1, exp2, thisArg) {
    /** @type {?} */
    const bindingIndex = getBindingRoot() + slotOffset;
    return bindingUpdated2(bindingIndex, exp1, exp2) ?
        updateBinding(bindingIndex + 2, thisArg ? pureFn.call(thisArg, exp1, exp2) : pureFn(exp1, exp2)) :
        getBinding(bindingIndex + 2);
}
/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn
 * @param {?} exp1
 * @param {?} exp2
 * @param {?} exp3
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} Updated or cached value
 */
export function pureFunction3(slotOffset, pureFn, exp1, exp2, exp3, thisArg) {
    /** @type {?} */
    const bindingIndex = getBindingRoot() + slotOffset;
    return bindingUpdated3(bindingIndex, exp1, exp2, exp3) ?
        updateBinding(bindingIndex + 3, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3) : pureFn(exp1, exp2, exp3)) :
        getBinding(bindingIndex + 3);
}
/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn
 * @param {?} exp1
 * @param {?} exp2
 * @param {?} exp3
 * @param {?} exp4
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} Updated or cached value
 */
export function pureFunction4(slotOffset, pureFn, exp1, exp2, exp3, exp4, thisArg) {
    /** @type {?} */
    const bindingIndex = getBindingRoot() + slotOffset;
    return bindingUpdated4(bindingIndex, exp1, exp2, exp3, exp4) ?
        updateBinding(bindingIndex + 4, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3, exp4) : pureFn(exp1, exp2, exp3, exp4)) :
        getBinding(bindingIndex + 4);
}
/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn
 * @param {?} exp1
 * @param {?} exp2
 * @param {?} exp3
 * @param {?} exp4
 * @param {?} exp5
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} Updated or cached value
 */
export function pureFunction5(slotOffset, pureFn, exp1, exp2, exp3, exp4, exp5, thisArg) {
    /** @type {?} */
    const bindingIndex = getBindingRoot() + slotOffset;
    /** @type {?} */
    const different = bindingUpdated4(bindingIndex, exp1, exp2, exp3, exp4);
    return bindingUpdated(bindingIndex + 4, exp5) || different ?
        updateBinding(bindingIndex + 5, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3, exp4, exp5) :
            pureFn(exp1, exp2, exp3, exp4, exp5)) :
        getBinding(bindingIndex + 5);
}
/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn
 * @param {?} exp1
 * @param {?} exp2
 * @param {?} exp3
 * @param {?} exp4
 * @param {?} exp5
 * @param {?} exp6
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} Updated or cached value
 */
export function pureFunction6(slotOffset, pureFn, exp1, exp2, exp3, exp4, exp5, exp6, thisArg) {
    /** @type {?} */
    const bindingIndex = getBindingRoot() + slotOffset;
    /** @type {?} */
    const different = bindingUpdated4(bindingIndex, exp1, exp2, exp3, exp4);
    return bindingUpdated2(bindingIndex + 4, exp5, exp6) || different ?
        updateBinding(bindingIndex + 6, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3, exp4, exp5, exp6) :
            pureFn(exp1, exp2, exp3, exp4, exp5, exp6)) :
        getBinding(bindingIndex + 6);
}
/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn
 * @param {?} exp1
 * @param {?} exp2
 * @param {?} exp3
 * @param {?} exp4
 * @param {?} exp5
 * @param {?} exp6
 * @param {?} exp7
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} Updated or cached value
 */
export function pureFunction7(slotOffset, pureFn, exp1, exp2, exp3, exp4, exp5, exp6, exp7, thisArg) {
    /** @type {?} */
    const bindingIndex = getBindingRoot() + slotOffset;
    /** @type {?} */
    let different = bindingUpdated4(bindingIndex, exp1, exp2, exp3, exp4);
    return bindingUpdated3(bindingIndex + 4, exp5, exp6, exp7) || different ?
        updateBinding(bindingIndex + 7, thisArg ?
            pureFn.call(thisArg, exp1, exp2, exp3, exp4, exp5, exp6, exp7) :
            pureFn(exp1, exp2, exp3, exp4, exp5, exp6, exp7)) :
        getBinding(bindingIndex + 7);
}
/**
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn
 * @param {?} exp1
 * @param {?} exp2
 * @param {?} exp3
 * @param {?} exp4
 * @param {?} exp5
 * @param {?} exp6
 * @param {?} exp7
 * @param {?} exp8
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} Updated or cached value
 */
export function pureFunction8(slotOffset, pureFn, exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8, thisArg) {
    /** @type {?} */
    const bindingIndex = getBindingRoot() + slotOffset;
    /** @type {?} */
    const different = bindingUpdated4(bindingIndex, exp1, exp2, exp3, exp4);
    return bindingUpdated4(bindingIndex + 4, exp5, exp6, exp7, exp8) || different ?
        updateBinding(bindingIndex + 8, thisArg ?
            pureFn.call(thisArg, exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8) :
            pureFn(exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8)) :
        getBinding(bindingIndex + 8);
}
/**
 * pureFunction instruction that can support any number of bindings.
 *
 * If the value of any provided exp has changed, calls the pure function to return
 * an updated value. Or if no values have changed, returns cached value.
 *
 * @param {?} slotOffset the offset from binding root to the reserved slot
 * @param {?} pureFn A pure function that takes binding values and builds an object or array
 * containing those values.
 * @param {?} exps An array of binding values
 * @param {?=} thisArg Optional calling context of pureFn
 * @return {?} Updated or cached value
 */
export function pureFunctionV(slotOffset, pureFn, exps, thisArg) {
    /** @type {?} */
    let bindingIndex = getBindingRoot() + slotOffset;
    /** @type {?} */
    let different = false;
    for (let i = 0; i < exps.length; i++) {
        bindingUpdated(bindingIndex++, exps[i]) && (different = true);
    }
    return different ? updateBinding(bindingIndex, pureFn.apply(thisArg, exps)) :
        getBinding(bindingIndex);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZV9mdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvcHVyZV9mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVILE9BQU8sRUFBQyxjQUFjLEVBQUUsZUFBZSxFQUFDLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7OztBQThCeEQsTUFBTSxVQUFVLGFBQWEsQ0FBSSxVQUFrQixFQUFFLE1BQWUsRUFBRSxPQUFhOztJQUVqRixNQUFNLFlBQVksR0FBRyxjQUFjLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFDbkQsT0FBTyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLGFBQWEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEUsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQzlCOzs7Ozs7Ozs7OztBQVlELE1BQU0sVUFBVSxhQUFhLENBQ3pCLFVBQWtCLEVBQUUsTUFBdUIsRUFBRSxHQUFRLEVBQUUsT0FBYTs7SUFFdEUsTUFBTSxZQUFZLEdBQUcsY0FBYyxFQUFFLEdBQUcsVUFBVSxDQUFDO0lBQ25ELE9BQU8sY0FBYyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFD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Q0FBQztDQUM3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtiaW5kaW5nVXBkYXRlZCwgYmluZGluZ1VwZGF0ZWQyLCBiaW5kaW5nVXBkYXRlZDMsIGJpbmRpbmdVcGRhdGVkNCwgZ2V0QmluZGluZywgdXBkYXRlQmluZGluZ30gZnJvbSAnLi9pbnN0cnVjdGlvbnMnO1xuaW1wb3J0IHtnZXRCaW5kaW5nUm9vdCwgZ2V0Q3JlYXRpb25Nb2RlfSBmcm9tICcuL3N0YXRlJztcblxuXG4vKipcbiAqIEJpbmRpbmdzIGZvciBwdXJlIGZ1bmN0aW9ucyBhcmUgc3RvcmVkIGFmdGVyIHJlZ3VsYXIgYmluZGluZ3MuXG4gKlxuICogfC0tLS0tLWNvbnN0cy0tLS0tLXwtLS0tLS0tLS12YXJzLS0tLS0tLS0tfCAgICAgICAgICAgICAgICAgfC0tLS0tIGhvc3RWYXJzIChkaXIxKSAtLS0tLS18XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIHwgbm9kZXMvcmVmcy9waXBlcyB8IGJpbmRpbmdzIHwgZm4gc2xvdHMgIHwgaW5qZWN0b3IgfCBkaXIxIHwgaG9zdCBiaW5kaW5ncyB8IGhvc3Qgc2xvdHMgfFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgICAgICAgICAgICAgICAgICAgXiAgICAgICAgICAgICAgICAgICAgICBeXG4gKiAgICAgIFRWaWV3LmJpbmRpbmdTdGFydEluZGV4ICAgICAgVFZpZXcuZXhwYW5kb1N0YXJ0SW5kZXhcbiAqXG4gKiBQdXJlIGZ1bmN0aW9uIGluc3RydWN0aW9ucyBhcmUgZ2l2ZW4gYW4gb2Zmc2V0IGZyb20gdGhlIGJpbmRpbmcgcm9vdC4gQWRkaW5nIHRoZSBvZmZzZXQgdG8gdGhlXG4gKiBiaW5kaW5nIHJvb3QgZ2l2ZXMgdGhlIGZpcnN0IGluZGV4IHdoZXJlIHRoZSBiaW5kaW5ncyBhcmUgc3RvcmVkLiBJbiBjb21wb25lbnQgdmlld3MsIHRoZSBiaW5kaW5nXG4gKiByb290IGlzIHRoZSBiaW5kaW5nU3RhcnRJbmRleC4gSW4gaG9zdCBiaW5kaW5ncywgdGhlIGJpbmRpbmcgcm9vdCBpcyB0aGUgZXhwYW5kb1N0YXJ0SW5kZXggK1xuICogYW55IGRpcmVjdGl2ZSBpbnN0YW5jZXMgKyBhbnkgaG9zdFZhcnMgaW4gZGlyZWN0aXZlcyBldmFsdWF0ZWQgYmVmb3JlIGl0LlxuICpcbiAqIFNlZSBWSUVXX0RBVEEubWQgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG9zdCBiaW5kaW5nIHJlc29sdXRpb24uXG4gKi9cblxuLyoqXG4gKiBJZiB0aGUgdmFsdWUgaGFzbid0IGJlZW4gc2F2ZWQsIGNhbGxzIHRoZSBwdXJlIGZ1bmN0aW9uIHRvIHN0b3JlIGFuZCByZXR1cm4gdGhlXG4gKiB2YWx1ZS4gSWYgaXQgaGFzIGJlZW4gc2F2ZWQsIHJldHVybnMgdGhlIHNhdmVkIHZhbHVlLlxuICpcbiAqIEBwYXJhbSBzbG90T2Zmc2V0IHRoZSBvZmZzZXQgZnJvbSBiaW5kaW5nIHJvb3QgdG8gdGhlIHJlc2VydmVkIHNsb3RcbiAqIEBwYXJhbSBwdXJlRm4gRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdmFsdWVcbiAqIEBwYXJhbSB0aGlzQXJnIE9wdGlvbmFsIGNhbGxpbmcgY29udGV4dCBvZiBwdXJlRm5cbiAqIEByZXR1cm5zIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRnVuY3Rpb24wPFQ+KHNsb3RPZmZzZXQ6IG51bWJlciwgcHVyZUZuOiAoKSA9PiBULCB0aGlzQXJnPzogYW55KTogVCB7XG4gIC8vIFRPRE8oa2FyYSk6IHVzZSBiaW5kaW5nUm9vdCBpbnN0ZWFkIG9mIGJpbmRpbmdTdGFydEluZGV4IHdoZW4gaW1wbGVtZW50aW5nIGhvc3QgYmluZGluZ3NcbiAgY29uc3QgYmluZGluZ0luZGV4ID0gZ2V0QmluZGluZ1Jvb3QoKSArIHNsb3RPZmZzZXQ7XG4gIHJldHVybiBnZXRDcmVhdGlvbk1vZGUoKSA/XG4gICAgICB1cGRhdGVCaW5kaW5nKGJpbmRpbmdJbmRleCwgdGhpc0FyZyA/IHB1cmVGbi5jYWxsKHRoaXNBcmcpIDogcHVyZUZuKCkpIDpcbiAgICAgIGdldEJpbmRpbmcoYmluZGluZ0luZGV4KTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgdmFsdWUgb2YgdGhlIHByb3ZpZGVkIGV4cCBoYXMgY2hhbmdlZCwgY2FsbHMgdGhlIHB1cmUgZnVuY3Rpb24gdG8gcmV0dXJuXG4gKiBhbiB1cGRhdGVkIHZhbHVlLiBPciBpZiB0aGUgdmFsdWUgaGFzIG5vdCBjaGFuZ2VkLCByZXR1cm5zIGNhY2hlZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gc2xvdE9mZnNldCB0aGUgb2Zmc2V0IGZyb20gYmluZGluZyByb290IHRvIHRoZSByZXNlcnZlZCBzbG90XG4gKiBAcGFyYW0gcHVyZUZuIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiB1cGRhdGVkIHZhbHVlXG4gKiBAcGFyYW0gZXhwIFVwZGF0ZWQgZXhwcmVzc2lvbiB2YWx1ZVxuICogQHBhcmFtIHRoaXNBcmcgT3B0aW9uYWwgY2FsbGluZyBjb250ZXh0IG9mIHB1cmVGblxuICogQHJldHVybnMgVXBkYXRlZCBvciBjYWNoZWQgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1cmVGdW5jdGlvbjEoXG4gICAgc2xvdE9mZnNldDogbnVtYmVyLCBwdXJlRm46ICh2OiBhbnkpID0+IGFueSwgZXhwOiBhbnksIHRoaXNBcmc/OiBhbnkpOiBhbnkge1xuICAvLyBUT0RPKGthcmEpOiB1c2UgYmluZGluZ1Jvb3QgaW5zdGVhZCBvZiBiaW5kaW5nU3RhcnRJbmRleCB3aGVuIGltcGxlbWVudGluZyBob3N0IGJpbmRpbmdzXG4gIGNvbnN0IGJpbmRpbmdJbmRleCA9IGdldEJpbmRpbmdSb290KCkgKyBzbG90T2Zmc2V0O1xuICByZXR1cm4gYmluZGluZ1VwZGF0ZWQoYmluZGluZ0luZGV4LCBleHApID9cbiAgICAgIHVwZGF0ZUJpbmRpbmcoYmluZGluZ0luZGV4ICsgMSwgdGhpc0FyZyA/IHB1cmVGbi5jYWxsKHRoaXNBcmcsIGV4cCkgOiBwdXJlRm4oZXhwKSkgOlxuICAgICAgZ2V0QmluZGluZyhiaW5kaW5nSW5kZXggKyAxKTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgdmFsdWUgb2YgYW55IHByb3ZpZGVkIGV4cCBoYXMgY2hhbmdlZCwgY2FsbHMgdGhlIHB1cmUgZnVuY3Rpb24gdG8gcmV0dXJuXG4gKiBhbiB1cGRhdGVkIHZhbHVlLiBPciBpZiBubyB2YWx1ZXMgaGF2ZSBjaGFuZ2VkLCByZXR1cm5zIGNhY2hlZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gc2xvdE9mZnNldCB0aGUgb2Zmc2V0IGZyb20gYmluZGluZyByb290IHRvIHRoZSByZXNlcnZlZCBzbG90XG4gKiBAcGFyYW0gcHVyZUZuXG4gKiBAcGFyYW0gZXhwMVxuICogQHBhcmFtIGV4cDJcbiAqIEBwYXJhbSB0aGlzQXJnIE9wdGlvbmFsIGNhbGxpbmcgY29udGV4dCBvZiBwdXJlRm5cbiAqIEByZXR1cm5zIFVwZGF0ZWQgb3IgY2FjaGVkIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRnVuY3Rpb24yKFxuICAgIHNsb3RPZmZzZXQ6IG51bWJlciwgcHVyZUZuOiAodjE6IGFueSwgdjI6IGFueSkgPT4gYW55LCBleHAxOiBhbnksIGV4cDI6IGFueSxcbiAgICB0aGlzQXJnPzogYW55KTogYW55IHtcbiAgLy8gVE9ETyhrYXJhKTogdXNlIGJpbmRpbmdSb290IGluc3RlYWQgb2YgYmluZGluZ1N0YXJ0SW5kZXggd2hlbiBpbXBsZW1lbnRpbmcgaG9zdCBiaW5kaW5nc1xuICBjb25zdCBiaW5kaW5nSW5kZXggPSBnZXRCaW5kaW5nUm9vdCgpICsgc2xvdE9mZnNldDtcbiAgcmV0dXJuIGJpbmRpbmdVcGRhdGVkMihiaW5kaW5nSW5kZXgsIGV4cDEsIGV4cDIpID9cbiAgICAgIHVwZGF0ZUJpbmRpbmcoXG4gICAgICAgICAgYmluZGluZ0luZGV4ICsgMiwgdGhpc0FyZyA/IHB1cmVGbi5jYWxsKHRoaXNBcmcsIGV4cDEsIGV4cDIpIDogcHVyZUZuKGV4cDEsIGV4cDIpKSA6XG4gICAgICBnZXRCaW5kaW5nKGJpbmRpbmdJbmRleCArIDIpO1xufVxuXG4vKipcbiAqIElmIHRoZSB2YWx1ZSBvZiBhbnkgcHJvdmlkZWQgZXhwIGhhcyBjaGFuZ2VkLCBjYWxscyB0aGUgcHVyZSBmdW5jdGlvbiB0byByZXR1cm5cbiAqIGFuIHVwZGF0ZWQgdmFsdWUuIE9yIGlmIG5vIHZhbHVlcyBoYXZlIGNoYW5nZWQsIHJldHVybnMgY2FjaGVkIHZhbHVlLlxuICpcbiAqIEBwYXJhbSBzbG90T2Zmc2V0IHRoZSBvZmZzZXQgZnJvbSBiaW5kaW5nIHJvb3QgdG8gdGhlIHJlc2VydmVkIHNsb3RcbiAqIEBwYXJhbSBwdXJlRm5cbiAqIEBwYXJhbSBleHAxXG4gKiBAcGFyYW0gZXhwMlxuICogQHBhcmFtIGV4cDNcbiAqIEBwYXJhbSB0aGlzQXJnIE9wdGlvbmFsIGNhbGxpbmcgY29udGV4dCBvZiBwdXJlRm5cbiAqIEByZXR1cm5zIFVwZGF0ZWQgb3IgY2FjaGVkIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRnVuY3Rpb24zKFxuICAgIHNsb3RPZmZzZXQ6IG51bWJlciwgcHVyZUZuOiAodjE6IGFueSwgdjI6IGFueSwgdjM6IGFueSkgPT4gYW55LCBleHAxOiBhbnksIGV4cDI6IGFueSwgZXhwMzogYW55LFxuICAgIHRoaXNBcmc/OiBhbnkpOiBhbnkge1xuICAvLyBUT0RPKGthcmEpOiB1c2UgYmluZGluZ1Jvb3QgaW5zdGVhZCBvZiBiaW5kaW5nU3RhcnRJbmRleCB3aGVuIGltcGxlbWVudGluZyBob3N0IGJpbmRpbmdzXG4gIGNvbnN0IGJpbmRpbmdJbmRleCA9IGdldEJpbmRpbmdSb290KCkgKyBzbG90T2Zmc2V0O1xuICByZXR1cm4gYmluZGluZ1VwZGF0ZWQzKGJpbmRpbmdJbmRleCwgZXhwMSwgZXhwMiwgZXhwMykgP1xuICAgICAgdXBkYXRlQmluZGluZyhcbiAgICAgICAgICBiaW5kaW5nSW5kZXggKyAzLFxuICAgICAgICAgIHRoaXNBcmcgPyBwdXJlRm4uY2FsbCh0aGlzQXJnLCBleHAxLCBleHAyLCBleHAzKSA6IHB1cmVGbihleHAxLCBleHAyLCBleHAzKSkgOlxuICAgICAgZ2V0QmluZGluZyhiaW5kaW5nSW5kZXggKyAzKTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgdmFsdWUgb2YgYW55IHByb3ZpZGVkIGV4cCBoYXMgY2hhbmdlZCwgY2FsbHMgdGhlIHB1cmUgZnVuY3Rpb24gdG8gcmV0dXJuXG4gKiBhbiB1cGRhdGVkIHZhbHVlLiBPciBpZiBubyB2YWx1ZXMgaGF2ZSBjaGFuZ2VkLCByZXR1cm5zIGNhY2hlZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gc2xvdE9mZnNldCB0aGUgb2Zmc2V0IGZyb20gYmluZGluZyByb290IHRvIHRoZSByZXNlcnZlZCBzbG90XG4gKiBAcGFyYW0gcHVyZUZuXG4gKiBAcGFyYW0gZXhwMVxuICogQHBhcmFtIGV4cDJcbiAqIEBwYXJhbSBleHAzXG4gKiBAcGFyYW0gZXhwNFxuICogQHBhcmFtIHRoaXNBcmcgT3B0aW9uYWwgY2FsbGluZyBjb250ZXh0IG9mIHB1cmVGblxuICogQHJldHVybnMgVXBkYXRlZCBvciBjYWNoZWQgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1cmVGdW5jdGlvbjQoXG4gICAgc2xvdE9mZnNldDogbnVtYmVyLCBwdXJlRm46ICh2MTogYW55LCB2MjogYW55LCB2MzogYW55LCB2NDogYW55KSA9PiBhbnksIGV4cDE6IGFueSwgZXhwMjogYW55LFxuICAgIGV4cDM6IGFueSwgZXhwNDogYW55LCB0aGlzQXJnPzogYW55KTogYW55IHtcbiAgLy8gVE9ETyhrYXJhKTogdXNlIGJpbmRpbmdSb290IGluc3RlYWQgb2YgYmluZGluZ1N0YXJ0SW5kZXggd2hlbiBpbXBsZW1lbnRpbmcgaG9zdCBiaW5kaW5nc1xuICBjb25zdCBiaW5kaW5nSW5kZXggPSBnZXRCaW5kaW5nUm9vdCgpICsgc2xvdE9mZnNldDtcbiAgcmV0dXJuIGJpbmRpbmdVcGRhdGVkNChiaW5kaW5nSW5kZXgsIGV4cDEsIGV4cDIsIGV4cDMsIGV4cDQpID9cbiAgICAgIHVwZGF0ZUJpbmRpbmcoXG4gICAgICAgICAgYmluZGluZ0luZGV4ICsgNCxcbiAgICAgICAgICB0aGlzQXJnID8gcHVyZUZuLmNhbGwodGhpc0FyZywgZXhwMSwgZXhwMiwgZXhwMywgZXhwNCkgOiBwdXJlRm4oZXhwMSwgZXhwMiwgZXhwMywgZXhwNCkpIDpcbiAgICAgIGdldEJpbmRpbmcoYmluZGluZ0luZGV4ICsgNCk7XG59XG5cbi8qKlxuICogSWYgdGhlIHZhbHVlIG9mIGFueSBwcm92aWRlZCBleHAgaGFzIGNoYW5nZWQsIGNhbGxzIHRoZSBwdXJlIGZ1bmN0aW9uIHRvIHJldHVyblxuICogYW4gdXBkYXRlZCB2YWx1ZS4gT3IgaWYgbm8gdmFsdWVzIGhhdmUgY2hhbmdlZCwgcmV0dXJucyBjYWNoZWQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHNsb3RPZmZzZXQgdGhlIG9mZnNldCBmcm9tIGJpbmRpbmcgcm9vdCB0byB0aGUgcmVzZXJ2ZWQgc2xvdFxuICogQHBhcmFtIHB1cmVGblxuICogQHBhcmFtIGV4cDFcbiAqIEBwYXJhbSBleHAyXG4gKiBAcGFyYW0gZXhwM1xuICogQHBhcmFtIGV4cDRcbiAqIEBwYXJhbSBleHA1XG4gKiBAcGFyYW0gdGhpc0FyZyBPcHRpb25hbCBjYWxsaW5nIGNvbnRleHQgb2YgcHVyZUZuXG4gKiBAcmV0dXJucyBVcGRhdGVkIG9yIGNhY2hlZCB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVyZUZ1bmN0aW9uNShcbiAgICBzbG90T2Zmc2V0OiBudW1iZXIsIHB1cmVGbjogKHYxOiBhbnksIHYyOiBhbnksIHYzOiBhbnksIHY0OiBhbnksIHY1OiBhbnkpID0+IGFueSwgZXhwMTogYW55LFxuICAgIGV4cDI6IGFueSwgZXhwMzogYW55LCBleHA0OiBhbnksIGV4cDU6IGFueSwgdGhpc0FyZz86IGFueSk6IGFueSB7XG4gIC8vIFRPRE8oa2FyYSk6IHVzZSBiaW5kaW5nUm9vdCBpbnN0ZWFkIG9mIGJpbmRpbmdTdGFydEluZGV4IHdoZW4gaW1wbGVtZW50aW5nIGhvc3QgYmluZGluZ3NcbiAgY29uc3QgYmluZGluZ0luZGV4ID0gZ2V0QmluZGluZ1Jvb3QoKSArIHNsb3RPZmZzZXQ7XG4gIGNvbnN0IGRpZmZlcmVudCA9IGJpbmRpbmdVcGRhdGVkNChiaW5kaW5nSW5kZXgsIGV4cDEsIGV4cDIsIGV4cDMsIGV4cDQpO1xuICByZXR1cm4gYmluZGluZ1VwZGF0ZWQoYmluZGluZ0luZGV4ICsgNCwgZXhwNSkgfHwgZGlmZmVyZW50ID9cbiAgICAgIHVwZGF0ZUJpbmRpbmcoXG4gICAgICAgICAgYmluZGluZ0luZGV4ICsgNSwgdGhpc0FyZyA/IHB1cmVGbi5jYWxsKHRoaXNBcmcsIGV4cDEsIGV4cDIsIGV4cDMsIGV4cDQsIGV4cDUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyZUZuKGV4cDEsIGV4cDIsIGV4cDMsIGV4cDQsIGV4cDUpKSA6XG4gICAgICBnZXRCaW5kaW5nKGJpbmRpbmdJbmRleCArIDUpO1xufVxuXG4vKipcbiAqIElmIHRoZSB2YWx1ZSBvZiBhbnkgcHJvdmlkZWQgZXhwIGhhcyBjaGFuZ2VkLCBjYWxscyB0aGUgcHVyZSBmdW5jdGlvbiB0byByZXR1cm5cbiAqIGFuIHVwZGF0ZWQgdmFsdWUuIE9yIGlmIG5vIHZhbHVlcyBoYXZlIGNoYW5nZWQsIHJldHVybnMgY2FjaGVkIHZhbHVlLlxuICpcbiAqIEBwYXJhbSBzbG90T2Zmc2V0IHRoZSBvZmZzZXQgZnJvbSBiaW5kaW5nIHJvb3QgdG8gdGhlIHJlc2VydmVkIHNsb3RcbiAqIEBwYXJhbSBwdXJlRm5cbiAqIEBwYXJhbSBleHAxXG4gKiBAcGFyYW0gZXhwMlxuICogQHBhcmFtIGV4cDNcbiAqIEBwYXJhbSBleHA0XG4gKiBAcGFyYW0gZXhwNVxuICogQHBhcmFtIGV4cDZcbiAqIEBwYXJhbSB0aGlzQXJnIE9wdGlvbmFsIGNhbGxpbmcgY29udGV4dCBvZiBwdXJlRm5cbiAqIEByZXR1cm5zIFVwZGF0ZWQgb3IgY2FjaGVkIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRnVuY3Rpb242KFxuICAgIHNsb3RPZmZzZXQ6IG51bWJlciwgcHVyZUZuOiAodjE6IGFueSwgdjI6IGFueSwgdjM6IGFueSwgdjQ6IGFueSwgdjU6IGFueSwgdjY6IGFueSkgPT4gYW55LFxuICAgIGV4cDE6IGFueSwgZXhwMjogYW55LCBleHAzOiBhbnksIGV4cDQ6IGFueSwgZXhwNTogYW55LCBleHA2OiBhbnksIHRoaXNBcmc/OiBhbnkpOiBhbnkge1xuICAvLyBUT0RPKGthcmEpOiB1c2UgYmluZGluZ1Jvb3QgaW5zdGVhZCBvZiBiaW5kaW5nU3RhcnRJbmRleCB3aGVuIGltcGxlbWVudGluZyBob3N0IGJpbmRpbmdzXG4gIGNvbnN0IGJpbmRpbmdJbmRleCA9IGdldEJpbmRpbmdSb290KCkgKyBzbG90T2Zmc2V0O1xuICBjb25zdCBkaWZmZXJlbnQgPSBiaW5kaW5nVXBkYXRlZDQoYmluZGluZ0luZGV4LCBleHAxLCBleHAyLCBleHAzLCBleHA0KTtcbiAgcmV0dXJuIGJpbmRpbmdVcGRhdGVkMihiaW5kaW5nSW5kZXggKyA0LCBleHA1LCBleHA2KSB8fCBkaWZmZXJlbnQgP1xuICAgICAgdXBkYXRlQmluZGluZyhcbiAgICAgICAgICBiaW5kaW5nSW5kZXggKyA2LCB0aGlzQXJnID8gcHVyZUZuLmNhbGwodGhpc0FyZywgZXhwMSwgZXhwMiwgZXhwMywgZXhwNCwgZXhwNSwgZXhwNikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJlRm4oZXhwMSwgZXhwMiwgZXhwMywgZXhwNCwgZXhwNSwgZXhwNikpIDpcbiAgICAgIGdldEJpbmRpbmcoYmluZGluZ0luZGV4ICsgNik7XG59XG5cbi8qKlxuICogSWYgdGhlIHZhbHVlIG9mIGFueSBwcm92aWRlZCBleHAgaGFzIGNoYW5nZWQsIGNhbGxzIHRoZSBwdXJlIGZ1bmN0aW9uIHRvIHJldHVyblxuICogYW4gdXBkYXRlZCB2YWx1ZS4gT3IgaWYgbm8gdmFsdWVzIGhhdmUgY2hhbmdlZCwgcmV0dXJucyBjYWNoZWQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHNsb3RPZmZzZXQgdGhlIG9mZnNldCBmcm9tIGJpbmRpbmcgcm9vdCB0byB0aGUgcmVzZXJ2ZWQgc2xvdFxuICogQHBhcmFtIHB1cmVGblxuICogQHBhcmFtIGV4cDFcbiAqIEBwYXJhbSBleHAyXG4gKiBAcGFyYW0gZXhwM1xuICogQHBhcmFtIGV4cDRcbiAqIEBwYXJhbSBleHA1XG4gKiBAcGFyYW0gZXhwNlxuICogQHBhcmFtIGV4cDdcbiAqIEBwYXJhbSB0aGlzQXJnIE9wdGlvbmFsIGNhbGxpbmcgY29udGV4dCBvZiBwdXJlRm5cbiAqIEByZXR1cm5zIFVwZGF0ZWQgb3IgY2FjaGVkIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRnVuY3Rpb243KFxuICAgIHNsb3RPZmZzZXQ6IG51bWJlcixcbiAgICBwdXJlRm46ICh2MTogYW55LCB2MjogYW55LCB2MzogYW55LCB2NDogYW55LCB2NTogYW55LCB2NjogYW55LCB2NzogYW55KSA9PiBhbnksIGV4cDE6IGFueSxcbiAgICBleHAyOiBhbnksIGV4cDM6IGFueSwgZXhwNDogYW55LCBleHA1OiBhbnksIGV4cDY6IGFueSwgZXhwNzogYW55LCB0aGlzQXJnPzogYW55KTogYW55IHtcbiAgLy8gVE9ETyhrYXJhKTogdXNlIGJpbmRpbmdSb290IGluc3RlYWQgb2YgYmluZGluZ1N0YXJ0SW5kZXggd2hlbiBpbXBsZW1lbnRpbmcgaG9zdCBiaW5kaW5nc1xuICBjb25zdCBiaW5kaW5nSW5kZXggPSBnZXRCaW5kaW5nUm9vdCgpICsgc2xvdE9mZnNldDtcbiAgbGV0IGRpZmZlcmVudCA9IGJpbmRpbmdVcGRhdGVkNChiaW5kaW5nSW5kZXgsIGV4cDEsIGV4cDIsIGV4cDMsIGV4cDQpO1xuICByZXR1cm4gYmluZGluZ1VwZGF0ZWQzKGJpbmRpbmdJbmRleCArIDQsIGV4cDUsIGV4cDYsIGV4cDcpIHx8IGRpZmZlcmVudCA/XG4gICAgICB1cGRhdGVCaW5kaW5nKFxuICAgICAgICAgIGJpbmRpbmdJbmRleCArIDcsIHRoaXNBcmcgP1xuICAgICAgICAgICAgICBwdXJlRm4uY2FsbCh0aGlzQXJnLCBleHAxLCBleHAyLCBleHAzLCBleHA0LCBleHA1LCBleHA2LCBleHA3KSA6XG4gICAgICAgICAgICAgIHB1cmVGbihleHAxLCBleHAyLCBleHAzLCBleHA0LCBleHA1LCBleHA2LCBleHA3KSkgOlxuICAgICAgZ2V0QmluZGluZyhiaW5kaW5nSW5kZXggKyA3KTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgdmFsdWUgb2YgYW55IHByb3ZpZGVkIGV4cCBoYXMgY2hhbmdlZCwgY2FsbHMgdGhlIHB1cmUgZnVuY3Rpb24gdG8gcmV0dXJuXG4gKiBhbiB1cGRhdGVkIHZhbHVlLiBPciBpZiBubyB2YWx1ZXMgaGF2ZSBjaGFuZ2VkLCByZXR1cm5zIGNhY2hlZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gc2xvdE9mZnNldCB0aGUgb2Zmc2V0IGZyb20gYmluZGluZyByb290IHRvIHRoZSByZXNlcnZlZCBzbG90XG4gKiBAcGFyYW0gcHVyZUZuXG4gKiBAcGFyYW0gZXhwMVxuICogQHBhcmFtIGV4cDJcbiAqIEBwYXJhbSBleHAzXG4gKiBAcGFyYW0gZXhwNFxuICogQHBhcmFtIGV4cDVcbiAqIEBwYXJhbSBleHA2XG4gKiBAcGFyYW0gZXhwN1xuICogQHBhcmFtIGV4cDhcbiAqIEBwYXJhbSB0aGlzQXJnIE9wdGlvbmFsIGNhbGxpbmcgY29udGV4dCBvZiBwdXJlRm5cbiAqIEByZXR1cm5zIFVwZGF0ZWQgb3IgY2FjaGVkIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRnVuY3Rpb244KFxuICAgIHNsb3RPZmZzZXQ6IG51bWJlcixcbiAgICBwdXJlRm46ICh2MTogYW55LCB2MjogYW55LCB2MzogYW55LCB2NDogYW55LCB2NTogYW55LCB2NjogYW55LCB2NzogYW55LCB2ODogYW55KSA9PiBhbnksXG4gICAgZXhwMTogYW55LCBleHAyOiBhbnksIGV4cDM6IGFueSwgZXhwNDogYW55LCBleHA1OiBhbnksIGV4cDY6IGFueSwgZXhwNzogYW55LCBleHA4OiBhbnksXG4gICAgdGhpc0FyZz86IGFueSk6IGFueSB7XG4gIC8vIFRPRE8oa2FyYSk6IHVzZSBiaW5kaW5nUm9vdCBpbnN0ZWFkIG9mIGJpbmRpbmdTdGFydEluZGV4IHdoZW4gaW1wbGVtZW50aW5nIGhvc3QgYmluZGluZ3NcbiAgY29uc3QgYmluZGluZ0luZGV4ID0gZ2V0QmluZGluZ1Jvb3QoKSArIHNsb3RPZmZzZXQ7XG4gIGNvbnN0IGRpZmZlcmVudCA9IGJpbmRpbmdVcGRhdGVkNChiaW5kaW5nSW5kZXgsIGV4cDEsIGV4cDIsIGV4cDMsIGV4cDQpO1xuICByZXR1cm4gYmluZGluZ1VwZGF0ZWQ0KGJpbmRpbmdJbmRleCArIDQsIGV4cDUsIGV4cDYsIGV4cDcsIGV4cDgpIHx8IGRpZmZlcmVudCA/XG4gICAgICB1cGRhdGVCaW5kaW5nKFxuICAgICAgICAgIGJpbmRpbmdJbmRleCArIDgsIHRoaXNBcmcgP1xuICAgICAgICAgICAgICBwdXJlRm4uY2FsbCh0aGlzQXJnLCBleHAxLCBleHAyLCBleHAzLCBleHA0LCBleHA1LCBleHA2LCBleHA3LCBleHA4KSA6XG4gICAgICAgICAgICAgIHB1cmVGbihleHAxLCBleHAyLCBleHAzLCBleHA0LCBleHA1LCBleHA2LCBleHA3LCBleHA4KSkgOlxuICAgICAgZ2V0QmluZGluZyhiaW5kaW5nSW5kZXggKyA4KTtcbn1cblxuLyoqXG4gKiBwdXJlRnVuY3Rpb24gaW5zdHJ1Y3Rpb24gdGhhdCBjYW4gc3VwcG9ydCBhbnkgbnVtYmVyIG9mIGJpbmRpbmdzLlxuICpcbiAqIElmIHRoZSB2YWx1ZSBvZiBhbnkgcHJvdmlkZWQgZXhwIGhhcyBjaGFuZ2VkLCBjYWxscyB0aGUgcHVyZSBmdW5jdGlvbiB0byByZXR1cm5cbiAqIGFuIHVwZGF0ZWQgdmFsdWUuIE9yIGlmIG5vIHZhbHVlcyBoYXZlIGNoYW5nZWQsIHJldHVybnMgY2FjaGVkIHZhbHVlLlxuICpcbiAqIEBwYXJhbSBzbG90T2Zmc2V0IHRoZSBvZmZzZXQgZnJvbSBiaW5kaW5nIHJvb3QgdG8gdGhlIHJlc2VydmVkIHNsb3RcbiAqIEBwYXJhbSBwdXJlRm4gQSBwdXJlIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYmluZGluZyB2YWx1ZXMgYW5kIGJ1aWxkcyBhbiBvYmplY3Qgb3IgYXJyYXlcbiAqIGNvbnRhaW5pbmcgdGhvc2UgdmFsdWVzLlxuICogQHBhcmFtIGV4cHMgQW4gYXJyYXkgb2YgYmluZGluZyB2YWx1ZXNcbiAqIEBwYXJhbSB0aGlzQXJnIE9wdGlvbmFsIGNhbGxpbmcgY29udGV4dCBvZiBwdXJlRm5cbiAqIEByZXR1cm5zIFVwZGF0ZWQgb3IgY2FjaGVkIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRnVuY3Rpb25WKFxuICAgIHNsb3RPZmZzZXQ6IG51bWJlciwgcHVyZUZuOiAoLi4udjogYW55W10pID0+IGFueSwgZXhwczogYW55W10sIHRoaXNBcmc/OiBhbnkpOiBhbnkge1xuICAvLyBUT0RPKGthcmEpOiB1c2UgYmluZGluZ1Jvb3QgaW5zdGVhZCBvZiBiaW5kaW5nU3RhcnRJbmRleCB3aGVuIGltcGxlbWVudGluZyBob3N0IGJpbmRpbmdzXG4gIGxldCBiaW5kaW5nSW5kZXggPSBnZXRCaW5kaW5nUm9vdCgpICsgc2xvdE9mZnNldDtcbiAgbGV0IGRpZmZlcmVudCA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHMubGVuZ3RoOyBpKyspIHtcbiAgICBiaW5kaW5nVXBkYXRlZChiaW5kaW5nSW5kZXgrKywgZXhwc1tpXSkgJiYgKGRpZmZlcmVudCA9IHRydWUpO1xuICB9XG4gIHJldHVybiBkaWZmZXJlbnQgPyB1cGRhdGVCaW5kaW5nKGJpbmRpbmdJbmRleCwgcHVyZUZuLmFwcGx5KHRoaXNBcmcsIGV4cHMpKSA6XG4gICAgICAgICAgICAgICAgICAgICBnZXRCaW5kaW5nKGJpbmRpbmdJbmRleCk7XG59XG4iXX0=