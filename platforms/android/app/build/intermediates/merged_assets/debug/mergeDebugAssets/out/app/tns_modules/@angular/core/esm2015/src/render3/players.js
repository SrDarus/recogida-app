/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import './ng_dev_mode';
import { getContext } from './context_discovery';
import { getRootContext } from './discovery_utils';
import { scheduleTick } from './instructions';
import { HEADER_OFFSET } from './interfaces/view';
import { addPlayerInternal, getOrCreatePlayerContext, getPlayerContext, getPlayersInternal, getStylingContext, throwInvalidRefError } from './styling/util';
/**
 * Adds a player to an element, directive or component instance that will later be
 * animated once change detection has passed.
 *
 * When a player is added to a reference it will stay active until `player.destroy()`
 * is called. Once called then the player will be removed from the active players
 * present on the associated ref instance.
 *
 * To get a list of all the active players on an element see [getPlayers].
 *
 * @param {?} ref The element, directive or component that the player will be placed on.
 * @param {?} player The player that will be triggered to play once change detection has run.
 * @return {?}
 */
export function addPlayer(ref, player) {
    /** @type {?} */
    const context = getContext(ref);
    if (!context) {
        ngDevMode && throwInvalidRefError();
        return;
    }
    /** @type {?} */
    const element = /** @type {?} */ (context.native);
    /** @type {?} */
    const lViewData = context.lViewData;
    /** @type {?} */
    const playerContext = /** @type {?} */ ((getOrCreatePlayerContext(element, context)));
    /** @type {?} */
    const rootContext = getRootContext(lViewData);
    addPlayerInternal(playerContext, rootContext, element, player, 0, ref);
    scheduleTick(rootContext, 2 /* FlushPlayers */);
}
/**
 * Returns a list of all the active players present on the provided ref instance (which can
 * be an instance of a directive, component or element).
 *
 * This function will only return players that have been added to the ref instance using
 * `addPlayer` or any players that are active through any template styling bindings
 * (`[style]`, `[style.prop]`, `[class]` and `[class.name]`).
 *
 * \@publicApi
 * @param {?} ref
 * @return {?}
 */
export function getPlayers(ref) {
    /** @type {?} */
    const context = getContext(ref);
    if (!context) {
        ngDevMode && throwInvalidRefError();
        return [];
    }
    /** @type {?} */
    const stylingContext = getStylingContext(context.nodeIndex - HEADER_OFFSET, context.lViewData);
    /** @type {?} */
    const playerContext = stylingContext ? getPlayerContext(stylingContext) : null;
    return playerContext ? getPlayersInternal(playerContext) : [];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvcGxheWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0EsT0FBTyxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFDLGFBQWEsRUFBbUIsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBZTFKLE1BQU0sVUFBVSxTQUFTLENBQ3JCLEdBQXdELEVBQUUsTUFBYzs7SUFDMUUsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixTQUFTLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUNwQyxPQUFPO0tBQ1I7O0lBRUQsTUFBTSxPQUFPLHFCQUFHLE9BQU8sQ0FBQyxNQUFxQixFQUFDOztJQUM5QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDOztJQUNwQyxNQUFNLGFBQWEsc0JBQUcsd0JBQXdCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHOztJQUNuRSxNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2RSxZQUFZLENBQUMsV0FBVyx1QkFBZ0MsQ0FBQztDQUMxRDs7Ozs7Ozs7Ozs7OztBQVlELE1BQU0sVUFBVSxVQUFVLENBQUMsR0FBd0Q7O0lBQ2pGLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osU0FBUyxJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFDcEMsT0FBTyxFQUFFLENBQUM7S0FDWDs7SUFFRCxNQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBQy9GLE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztDQUMvRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAnLi9uZ19kZXZfbW9kZSc7XG5cbmltcG9ydCB7Z2V0Q29udGV4dH0gZnJvbSAnLi9jb250ZXh0X2Rpc2NvdmVyeSc7XG5pbXBvcnQge2dldFJvb3RDb250ZXh0fSBmcm9tICcuL2Rpc2NvdmVyeV91dGlscyc7XG5pbXBvcnQge3NjaGVkdWxlVGlja30gZnJvbSAnLi9pbnN0cnVjdGlvbnMnO1xuaW1wb3J0IHtDb21wb25lbnRJbnN0YW5jZSwgRGlyZWN0aXZlSW5zdGFuY2UsIFBsYXllcn0gZnJvbSAnLi9pbnRlcmZhY2VzL3BsYXllcic7XG5pbXBvcnQge0hFQURFUl9PRkZTRVQsIFJvb3RDb250ZXh0RmxhZ3N9IGZyb20gJy4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7YWRkUGxheWVySW50ZXJuYWwsIGdldE9yQ3JlYXRlUGxheWVyQ29udGV4dCwgZ2V0UGxheWVyQ29udGV4dCwgZ2V0UGxheWVyc0ludGVybmFsLCBnZXRTdHlsaW5nQ29udGV4dCwgdGhyb3dJbnZhbGlkUmVmRXJyb3J9IGZyb20gJy4vc3R5bGluZy91dGlsJztcblxuLyoqXG4gKiBBZGRzIGEgcGxheWVyIHRvIGFuIGVsZW1lbnQsIGRpcmVjdGl2ZSBvciBjb21wb25lbnQgaW5zdGFuY2UgdGhhdCB3aWxsIGxhdGVyIGJlXG4gKiBhbmltYXRlZCBvbmNlIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHBhc3NlZC5cbiAqXG4gKiBXaGVuIGEgcGxheWVyIGlzIGFkZGVkIHRvIGEgcmVmZXJlbmNlIGl0IHdpbGwgc3RheSBhY3RpdmUgdW50aWwgYHBsYXllci5kZXN0cm95KClgXG4gKiBpcyBjYWxsZWQuIE9uY2UgY2FsbGVkIHRoZW4gdGhlIHBsYXllciB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgYWN0aXZlIHBsYXllcnNcbiAqIHByZXNlbnQgb24gdGhlIGFzc29jaWF0ZWQgcmVmIGluc3RhbmNlLlxuICpcbiAqIFRvIGdldCBhIGxpc3Qgb2YgYWxsIHRoZSBhY3RpdmUgcGxheWVycyBvbiBhbiBlbGVtZW50IHNlZSBbZ2V0UGxheWVyc10uXG4gKlxuICogQHBhcmFtIHJlZiBUaGUgZWxlbWVudCwgZGlyZWN0aXZlIG9yIGNvbXBvbmVudCB0aGF0IHRoZSBwbGF5ZXIgd2lsbCBiZSBwbGFjZWQgb24uXG4gKiBAcGFyYW0gcGxheWVyIFRoZSBwbGF5ZXIgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCB0byBwbGF5IG9uY2UgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUGxheWVyKFxuICAgIHJlZjogQ29tcG9uZW50SW5zdGFuY2UgfCBEaXJlY3RpdmVJbnN0YW5jZSB8IEhUTUxFbGVtZW50LCBwbGF5ZXI6IFBsYXllcik6IHZvaWQge1xuICBjb25zdCBjb250ZXh0ID0gZ2V0Q29udGV4dChyZWYpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICBuZ0Rldk1vZGUgJiYgdGhyb3dJbnZhbGlkUmVmRXJyb3IoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBlbGVtZW50ID0gY29udGV4dC5uYXRpdmUgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IGxWaWV3RGF0YSA9IGNvbnRleHQubFZpZXdEYXRhO1xuICBjb25zdCBwbGF5ZXJDb250ZXh0ID0gZ2V0T3JDcmVhdGVQbGF5ZXJDb250ZXh0KGVsZW1lbnQsIGNvbnRleHQpICE7XG4gIGNvbnN0IHJvb3RDb250ZXh0ID0gZ2V0Um9vdENvbnRleHQobFZpZXdEYXRhKTtcbiAgYWRkUGxheWVySW50ZXJuYWwocGxheWVyQ29udGV4dCwgcm9vdENvbnRleHQsIGVsZW1lbnQsIHBsYXllciwgMCwgcmVmKTtcbiAgc2NoZWR1bGVUaWNrKHJvb3RDb250ZXh0LCBSb290Q29udGV4dEZsYWdzLkZsdXNoUGxheWVycyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRoZSBhY3RpdmUgcGxheWVycyBwcmVzZW50IG9uIHRoZSBwcm92aWRlZCByZWYgaW5zdGFuY2UgKHdoaWNoIGNhblxuICogYmUgYW4gaW5zdGFuY2Ugb2YgYSBkaXJlY3RpdmUsIGNvbXBvbmVudCBvciBlbGVtZW50KS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgb25seSByZXR1cm4gcGxheWVycyB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgcmVmIGluc3RhbmNlIHVzaW5nXG4gKiBgYWRkUGxheWVyYCBvciBhbnkgcGxheWVycyB0aGF0IGFyZSBhY3RpdmUgdGhyb3VnaCBhbnkgdGVtcGxhdGUgc3R5bGluZyBiaW5kaW5nc1xuICogKGBbc3R5bGVdYCwgYFtzdHlsZS5wcm9wXWAsIGBbY2xhc3NdYCBhbmQgYFtjbGFzcy5uYW1lXWApLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllcnMocmVmOiBDb21wb25lbnRJbnN0YW5jZSB8IERpcmVjdGl2ZUluc3RhbmNlIHwgSFRNTEVsZW1lbnQpOiBQbGF5ZXJbXSB7XG4gIGNvbnN0IGNvbnRleHQgPSBnZXRDb250ZXh0KHJlZik7XG4gIGlmICghY29udGV4dCkge1xuICAgIG5nRGV2TW9kZSAmJiB0aHJvd0ludmFsaWRSZWZFcnJvcigpO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHN0eWxpbmdDb250ZXh0ID0gZ2V0U3R5bGluZ0NvbnRleHQoY29udGV4dC5ub2RlSW5kZXggLSBIRUFERVJfT0ZGU0VULCBjb250ZXh0LmxWaWV3RGF0YSk7XG4gIGNvbnN0IHBsYXllckNvbnRleHQgPSBzdHlsaW5nQ29udGV4dCA/IGdldFBsYXllckNvbnRleHQoc3R5bGluZ0NvbnRleHQpIDogbnVsbDtcbiAgcmV0dXJuIHBsYXllckNvbnRleHQgPyBnZXRQbGF5ZXJzSW50ZXJuYWwocGxheWVyQ29udGV4dCkgOiBbXTtcbn1cbiJdfQ==