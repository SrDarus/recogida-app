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
import { InjectionToken } from '../di/injection_token';
import { makeParamDecorator, makePropDecorator } from '../util/decorators';
/** *
 * This token can be used to create a virtual provider that will populate the
 * `entryComponents` fields of components and ng modules based on its `useValue`.
 * All components that are referenced in the `useValue` value (either directly
 * or in a nested array or map) will be added to the `entryComponents` property.
 *
 * \@usageNotes
 * ### Example
 * The following example shows how the router can populate the `entryComponents`
 * field of an NgModule based on the router configuration which refers
 * to components.
 *
 * ```typescript
 * // helper function inside the router
 * function provideRoutes(routes) {
 *   return [
 *     {provide: ROUTES, useValue: routes},
 *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
 *   ];
 * }
 *
 * // user code
 * let routes = [
 *   {path: '/root', component: RootComp},
 *   {path: '/teams', component: TeamsComp}
 * ];
 *
 * \@NgModule({
 *   providers: [provideRoutes(routes)]
 * })
 * class ModuleWithRoutes {}
 * ```
 *
 * \@publicApi
  @type {?} */
export const ANALYZE_FOR_ENTRY_COMPONENTS = new InjectionToken('AnalyzeForEntryComponents');
/**
 * Type of the Attribute decorator / constructor function.
 *
 *
 * @record
 */
export function AttributeDecorator() { }
/** *
 * Attribute decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
  @type {?} */
export const Attribute = makeParamDecorator('Attribute', (attributeName) => ({ attributeName }));
/**
 * Base class for query metadata.
 *
 * @see `ContentChildren`.
 * @see `ContentChild`.
 * @see `ViewChildren`.
 * @see `ViewChild`.
 *
 * \@publicApi
 * @abstract
 */
export class Query {
}
/**
 * Type of the ContentChildren decorator / constructor function.
 *
 * @see `ContentChildren`.
 * \@publicApi
 * @record
 */
export function ContentChildrenDecorator() { }
/** *
 * ContentChildren decorator and metadata.
 *
 *
 * \@Annotation
 * \@publicApi
  @type {?} */
export const ContentChildren = makePropDecorator('ContentChildren', (selector, data = {}) => (Object.assign({ selector, first: false, isViewQuery: false, descendants: false }, data)), Query);
/**
 * Type of the ContentChild decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function ContentChildDecorator() { }
/** *
 * ContentChild decorator and metadata.
 *
 *
 * \@Annotation
 * \@publicApi
  @type {?} */
export const ContentChild = makePropDecorator('ContentChild', (selector, data = {}) => (Object.assign({ selector, first: true, isViewQuery: false, descendants: true }, data)), Query);
/**
 * Type of the ViewChildren decorator / constructor function.
 *
 * @see `ViewChildren`.
 *
 * \@publicApi
 * @record
 */
export function ViewChildrenDecorator() { }
/** *
 * ViewChildren decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
  @type {?} */
export const ViewChildren = makePropDecorator('ViewChildren', (selector, data = {}) => (Object.assign({ selector, first: false, isViewQuery: true, descendants: true }, data)), Query);
/**
 * Type of the ViewChild decorator / constructor function.
 *
 * @see `ViewChild`.
 * \@publicApi
 * @record
 */
export function ViewChildDecorator() { }
/** *
 * ViewChild decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
  @type {?} */
export const ViewChild = makePropDecorator('ViewChild', (selector, data) => (Object.assign({ selector, first: true, isViewQuery: true, descendants: true }, data)), Query);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb3JlL3NyYy9tZXRhZGF0YS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUN6RSxhQUFhLDRCQUE0QixHQUFHLElBQUksY0FBYyxDQUFNLDJCQUEyQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBK0RqRyxhQUFhLFNBQVMsR0FDbEIsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FBdUJuRixNQUFNLE9BQWdCLEtBQUs7Q0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQTJEOUIsYUFBYSxlQUFlLEdBQTZCLGlCQUFpQixDQUN0RSxpQkFBaUIsRUFDakIsQ0FBQyxRQUFjLEVBQUUsT0FBWSxFQUFFLEVBQUUsRUFBRSxDQUMvQixpQkFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLElBQUssSUFBSSxFQUFFLEVBQy9FLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFxRFgsYUFBYSxZQUFZLEdBQTBCLGlCQUFpQixDQUNoRSxjQUFjLEVBQUUsQ0FBQyxRQUFjLEVBQUUsT0FBWSxFQUFFLEVBQUUsRUFBRSxDQUMvQixpQkFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUssSUFBSSxFQUFFLEVBQzdGLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBbURYLGFBQWEsWUFBWSxHQUEwQixpQkFBaUIsQ0FDaEUsY0FBYyxFQUFFLENBQUMsUUFBYyxFQUFFLE9BQVksRUFBRSxFQUFFLEVBQUUsQ0FDL0IsaUJBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFLLElBQUksRUFBRSxFQUM3RixLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBK0RYLGFBQWEsU0FBUyxHQUF1QixpQkFBaUIsQ0FDMUQsV0FBVyxFQUFFLENBQUMsUUFBYSxFQUFFLElBQVMsRUFBRSxFQUFFLENBQ3pCLGlCQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSyxJQUFJLEVBQUUsRUFDekYsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJy4uL2RpL2luamVjdGlvbl90b2tlbic7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL3R5cGUnO1xuaW1wb3J0IHttYWtlUGFyYW1EZWNvcmF0b3IsIG1ha2VQcm9wRGVjb3JhdG9yfSBmcm9tICcuLi91dGlsL2RlY29yYXRvcnMnO1xuXG4vKipcbiAqIFRoaXMgdG9rZW4gY2FuIGJlIHVzZWQgdG8gY3JlYXRlIGEgdmlydHVhbCBwcm92aWRlciB0aGF0IHdpbGwgcG9wdWxhdGUgdGhlXG4gKiBgZW50cnlDb21wb25lbnRzYCBmaWVsZHMgb2YgY29tcG9uZW50cyBhbmQgbmcgbW9kdWxlcyBiYXNlZCBvbiBpdHMgYHVzZVZhbHVlYC5cbiAqIEFsbCBjb21wb25lbnRzIHRoYXQgYXJlIHJlZmVyZW5jZWQgaW4gdGhlIGB1c2VWYWx1ZWAgdmFsdWUgKGVpdGhlciBkaXJlY3RseVxuICogb3IgaW4gYSBuZXN0ZWQgYXJyYXkgb3IgbWFwKSB3aWxsIGJlIGFkZGVkIHRvIHRoZSBgZW50cnlDb21wb25lbnRzYCBwcm9wZXJ0eS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIyMjIEV4YW1wbGVcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgdGhlIHJvdXRlciBjYW4gcG9wdWxhdGUgdGhlIGBlbnRyeUNvbXBvbmVudHNgXG4gKiBmaWVsZCBvZiBhbiBOZ01vZHVsZSBiYXNlZCBvbiB0aGUgcm91dGVyIGNvbmZpZ3VyYXRpb24gd2hpY2ggcmVmZXJzXG4gKiB0byBjb21wb25lbnRzLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIC8vIGhlbHBlciBmdW5jdGlvbiBpbnNpZGUgdGhlIHJvdXRlclxuICogZnVuY3Rpb24gcHJvdmlkZVJvdXRlcyhyb3V0ZXMpIHtcbiAqICAgcmV0dXJuIFtcbiAqICAgICB7cHJvdmlkZTogUk9VVEVTLCB1c2VWYWx1ZTogcm91dGVzfSxcbiAqICAgICB7cHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUywgdXNlVmFsdWU6IHJvdXRlcywgbXVsdGk6IHRydWV9XG4gKiAgIF07XG4gKiB9XG4gKlxuICogLy8gdXNlciBjb2RlXG4gKiBsZXQgcm91dGVzID0gW1xuICogICB7cGF0aDogJy9yb290JywgY29tcG9uZW50OiBSb290Q29tcH0sXG4gKiAgIHtwYXRoOiAnL3RlYW1zJywgY29tcG9uZW50OiBUZWFtc0NvbXB9XG4gKiBdO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIHByb3ZpZGVyczogW3Byb3ZpZGVSb3V0ZXMocm91dGVzKV1cbiAqIH0pXG4gKiBjbGFzcyBNb2R1bGVXaXRoUm91dGVzIHt9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oJ0FuYWx5emVGb3JFbnRyeUNvbXBvbmVudHMnKTtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBBdHRyaWJ1dGUgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGVEZWNvcmF0b3Ige1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoYXQgYSBjb25zdGFudCBhdHRyaWJ1dGUgdmFsdWUgc2hvdWxkIGJlIGluamVjdGVkLlxuICAgKlxuICAgKiBUaGUgZGlyZWN0aXZlIGNhbiBpbmplY3QgY29uc3RhbnQgc3RyaW5nIGxpdGVyYWxzIG9mIGhvc3QgZWxlbWVudCBhdHRyaWJ1dGVzLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBTdXBwb3NlIHdlIGhhdmUgYW4gYDxpbnB1dD5gIGVsZW1lbnQgYW5kIHdhbnQgdG8ga25vdyBpdHMgYHR5cGVgLlxuICAgKlxuICAgKiBgYGBodG1sXG4gICAqIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICAgKiBgYGBcbiAgICpcbiAgICogQSBkZWNvcmF0b3IgY2FuIGluamVjdCBzdHJpbmcgbGl0ZXJhbCBgdGV4dGAgbGlrZSBzbzpcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvdHMvbWV0YWRhdGEvbWV0YWRhdGEudHMgcmVnaW9uPSdhdHRyaWJ1dGVNZXRhZGF0YSd9XG4gICAqXG4gICAqICMjIyBFeGFtcGxlIGFzIFR5cGVTY3JpcHQgRGVjb3JhdG9yXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL3RzL21ldGFkYXRhL21ldGFkYXRhLnRzIHJlZ2lvbj0nYXR0cmlidXRlRmFjdG9yeSd9XG4gICAqXG4gICAqICMjIyBFeGFtcGxlIGFzIEVTNSBhbm5vdGF0aW9uXG4gICAqXG4gICAqIGBgYFxuICAgKiB2YXIgTXlDb21wb25lbnQgPSBmdW5jdGlvbih0aXRsZSkge1xuICAgKiAgIC4uLlxuICAgKiB9O1xuICAgKlxuICAgKiBNeUNvbXBvbmVudC5hbm5vdGF0aW9ucyA9IFtcbiAgICogICBuZXcgbmcuQ29tcG9uZW50KHsuLi59KVxuICAgKiBdXG4gICAqIE15Q29tcG9uZW50LnBhcmFtZXRlcnMgPSBbXG4gICAqICAgW25ldyBuZy5BdHRyaWJ1dGUoJ3RpdGxlJyldXG4gICAqIF1cbiAgICogYGBgXG4gICAqXG4gICAqXG4gICAqL1xuICAobmFtZTogc3RyaW5nKTogYW55O1xuICBuZXcgKG5hbWU6IHN0cmluZyk6IEF0dHJpYnV0ZTtcbn1cblxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIEF0dHJpYnV0ZSBtZXRhZGF0YS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGUgeyBhdHRyaWJ1dGVOYW1lPzogc3RyaW5nOyB9XG5cbi8qKlxuICogQXR0cmlidXRlIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEF0dHJpYnV0ZTogQXR0cmlidXRlRGVjb3JhdG9yID1cbiAgICBtYWtlUGFyYW1EZWNvcmF0b3IoJ0F0dHJpYnV0ZScsIChhdHRyaWJ1dGVOYW1lPzogc3RyaW5nKSA9PiAoe2F0dHJpYnV0ZU5hbWV9KSk7XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgUXVlcnkgbWV0YWRhdGEuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnkge1xuICBkZXNjZW5kYW50czogYm9vbGVhbjtcbiAgZmlyc3Q6IGJvb2xlYW47XG4gIHJlYWQ6IGFueTtcbiAgaXNWaWV3UXVlcnk6IGJvb2xlYW47XG4gIHNlbGVjdG9yOiBhbnk7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgcXVlcnkgbWV0YWRhdGEuXG4gKlxuICogQHNlZSBgQ29udGVudENoaWxkcmVuYC5cbiAqIEBzZWUgYENvbnRlbnRDaGlsZGAuXG4gKiBAc2VlIGBWaWV3Q2hpbGRyZW5gLlxuICogQHNlZSBgVmlld0NoaWxkYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBRdWVyeSB7fVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIENvbnRlbnRDaGlsZHJlbiBkZWNvcmF0b3IgLyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqXG4gKiBAc2VlIGBDb250ZW50Q2hpbGRyZW5gLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRDaGlsZHJlbkRlY29yYXRvciB7XG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGEgY29udGVudCBxdWVyeS5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgQ29udGVudENoaWxkcmVuIHRvIGdldCB0aGUgYFF1ZXJ5TGlzdGAgb2YgZWxlbWVudHMgb3IgZGlyZWN0aXZlcyBmcm9tIHRoZVxuICAgKiBjb250ZW50IERPTS4gQW55IHRpbWUgYSBjaGlsZCBlbGVtZW50IGlzIGFkZGVkLCByZW1vdmVkLCBvciBtb3ZlZCwgdGhlIHF1ZXJ5IGxpc3Qgd2lsbCBiZVxuICAgKiB1cGRhdGVkLCBhbmQgdGhlIGNoYW5nZXMgb2JzZXJ2YWJsZSBvZiB0aGUgcXVlcnkgbGlzdCB3aWxsIGVtaXQgYSBuZXcgdmFsdWUuXG4gICAqXG4gICAqIENvbnRlbnQgcXVlcmllcyBhcmUgc2V0IGJlZm9yZSB0aGUgYG5nQWZ0ZXJDb250ZW50SW5pdGAgY2FsbGJhY2sgaXMgY2FsbGVkLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSB0aGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipkZXNjZW5kYW50cyoqIC0gaW5jbHVkZSBvbmx5IGRpcmVjdCBjaGlsZHJlbiBvciBhbGwgZGVzY2VuZGFudHMuXG4gICAqICogKipyZWFkKiogLSByZWFkIGEgZGlmZmVyZW50IHRva2VuIGZyb20gdGhlIHF1ZXJpZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBCYXNpYyBFeGFtcGxlXG4gICAqXG4gICAqIEhlcmUgaXMgYSBzaW1wbGUgZGVtb25zdHJhdGlvbiBvZiBob3cgdGhlIGBDb250ZW50Q2hpbGRyZW5gIGRlY29yYXRvciBjYW4gYmUgdXNlZC5cbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvY29udGVudENoaWxkcmVuL2NvbnRlbnRfY2hpbGRyZW5faG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqICMjIyBUYWItcGFuZSBFeGFtcGxlXG4gICAqXG4gICAqIEhlcmUgaXMgYSBzbGlnaHRseSBtb3JlIHJlYWxpc3RpYyBleGFtcGxlIHRoYXQgc2hvd3MgaG93IGBDb250ZW50Q2hpbGRyZW5gIGRlY29yYXRvcnNcbiAgICogY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IGEgdGFiIHBhbmUgY29tcG9uZW50LlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9jb250ZW50Q2hpbGRyZW4vY29udGVudF9jaGlsZHJlbl9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICpcbiAgICogQEFubm90YXRpb25cbiAgICovXG4gIChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtkZXNjZW5kYW50cz86IGJvb2xlYW4sIHJlYWQ/OiBhbnl9KTogYW55O1xuICBuZXcgKHNlbGVjdG9yOiBUeXBlPGFueT58RnVuY3Rpb258c3RyaW5nLCBvcHRzPzoge2Rlc2NlbmRhbnRzPzogYm9vbGVhbiwgcmVhZD86IGFueX0pOiBRdWVyeTtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGRyZW4gbWV0YWRhdGEuXG4gKlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIENvbnRlbnRDaGlsZHJlbiA9IFF1ZXJ5O1xuXG4vKipcbiAqIENvbnRlbnRDaGlsZHJlbiBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqXG4gKiBAQW5ub3RhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQ29udGVudENoaWxkcmVuOiBDb250ZW50Q2hpbGRyZW5EZWNvcmF0b3IgPSBtYWtlUHJvcERlY29yYXRvcihcbiAgICAnQ29udGVudENoaWxkcmVuJyxcbiAgICAoc2VsZWN0b3I/OiBhbnksIGRhdGE6IGFueSA9IHt9KSA9PlxuICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogZmFsc2UsIGlzVmlld1F1ZXJ5OiBmYWxzZSwgZGVzY2VuZGFudHM6IGZhbHNlLCAuLi5kYXRhfSksXG4gICAgUXVlcnkpO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIENvbnRlbnRDaGlsZCBkZWNvcmF0b3IgLyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudENoaWxkRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgYSBjb250ZW50IHF1ZXJ5LlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSBDb250ZW50Q2hpbGQgdG8gZ2V0IHRoZSBmaXJzdCBlbGVtZW50IG9yIHRoZSBkaXJlY3RpdmUgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZyb21cbiAgICogdGhlIGNvbnRlbnQgRE9NLiBJZiB0aGUgY29udGVudCBET00gY2hhbmdlcywgYW5kIGEgbmV3IGNoaWxkIG1hdGNoZXMgdGhlIHNlbGVjdG9yLFxuICAgKiB0aGUgcHJvcGVydHkgd2lsbCBiZSB1cGRhdGVkLlxuICAgKlxuICAgKiBDb250ZW50IHF1ZXJpZXMgYXJlIHNldCBiZWZvcmUgdGhlIGBuZ0FmdGVyQ29udGVudEluaXRgIGNhbGxiYWNrIGlzIGNhbGxlZC5cbiAgICpcbiAgICogKipNZXRhZGF0YSBQcm9wZXJ0aWVzKio6XG4gICAqXG4gICAqICogKipzZWxlY3RvcioqIC0gdGhlIGRpcmVjdGl2ZSB0eXBlIG9yIHRoZSBuYW1lIHVzZWQgZm9yIHF1ZXJ5aW5nLlxuICAgKiAqICoqcmVhZCoqIC0gcmVhZCBhIGRpZmZlcmVudCB0b2tlbiBmcm9tIHRoZSBxdWVyaWVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL2NvbnRlbnRDaGlsZC9jb250ZW50X2NoaWxkX2hvd3RvLnRzIHJlZ2lvbj0nSG93VG8nfVxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9jb250ZW50Q2hpbGQvY29udGVudF9jaGlsZF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICpcbiAgICogQEFubm90YXRpb25cbiAgICovXG4gIChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtyZWFkPzogYW55fSk6IGFueTtcbiAgbmV3IChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtyZWFkPzogYW55fSk6IENvbnRlbnRDaGlsZDtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGQgbWV0YWRhdGEuXG4gKlxuICogQHNlZSBgQ29udGVudENoaWxkYC5cbiAqXG4gKlxuICovXG5leHBvcnQgdHlwZSBDb250ZW50Q2hpbGQgPSBRdWVyeTtcblxuLyoqXG4gKiBDb250ZW50Q2hpbGQgZGVjb3JhdG9yIGFuZCBtZXRhZGF0YS5cbiAqXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRlbnRDaGlsZDogQ29udGVudENoaWxkRGVjb3JhdG9yID0gbWFrZVByb3BEZWNvcmF0b3IoXG4gICAgJ0NvbnRlbnRDaGlsZCcsIChzZWxlY3Rvcj86IGFueSwgZGF0YTogYW55ID0ge30pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogdHJ1ZSwgaXNWaWV3UXVlcnk6IGZhbHNlLCBkZXNjZW5kYW50czogdHJ1ZSwgLi4uZGF0YX0pLFxuICAgIFF1ZXJ5KTtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBWaWV3Q2hpbGRyZW4gZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHNlZSBgVmlld0NoaWxkcmVuYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0NoaWxkcmVuRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgYSB2aWV3IHF1ZXJ5LlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSBWaWV3Q2hpbGRyZW4gdG8gZ2V0IHRoZSBgUXVlcnlMaXN0YCBvZiBlbGVtZW50cyBvciBkaXJlY3RpdmVzIGZyb20gdGhlXG4gICAqIHZpZXcgRE9NLiBBbnkgdGltZSBhIGNoaWxkIGVsZW1lbnQgaXMgYWRkZWQsIHJlbW92ZWQsIG9yIG1vdmVkLCB0aGUgcXVlcnkgbGlzdCB3aWxsIGJlIHVwZGF0ZWQsXG4gICAqIGFuZCB0aGUgY2hhbmdlcyBvYnNlcnZhYmxlIG9mIHRoZSBxdWVyeSBsaXN0IHdpbGwgZW1pdCBhIG5ldyB2YWx1ZS5cbiAgICpcbiAgICogVmlldyBxdWVyaWVzIGFyZSBzZXQgYmVmb3JlIHRoZSBgbmdBZnRlclZpZXdJbml0YCBjYWxsYmFjayBpcyBjYWxsZWQuXG4gICAqXG4gICAqICoqTWV0YWRhdGEgUHJvcGVydGllcyoqOlxuICAgKlxuICAgKiAqICoqc2VsZWN0b3IqKiAtIHRoZSBkaXJlY3RpdmUgdHlwZSBvciB0aGUgbmFtZSB1c2VkIGZvciBxdWVyeWluZy5cbiAgICogKiAqKnJlYWQqKiAtIHJlYWQgYSBkaWZmZXJlbnQgdG9rZW4gZnJvbSB0aGUgcXVlcmllZCBlbGVtZW50cy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkcmVuL3ZpZXdfY2hpbGRyZW5faG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3ZpZXdDaGlsZHJlbi92aWV3X2NoaWxkcmVuX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgKlxuICAgKiBAQW5ub3RhdGlvblxuICAgKi9cbiAgKHNlbGVjdG9yOiBUeXBlPGFueT58RnVuY3Rpb258c3RyaW5nLCBvcHRzPzoge3JlYWQ/OiBhbnl9KTogYW55O1xuICBuZXcgKHNlbGVjdG9yOiBUeXBlPGFueT58RnVuY3Rpb258c3RyaW5nLCBvcHRzPzoge3JlYWQ/OiBhbnl9KTogVmlld0NoaWxkcmVuO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFZpZXdDaGlsZHJlbiBtZXRhZGF0YS5cbiAqL1xuZXhwb3J0IHR5cGUgVmlld0NoaWxkcmVuID0gUXVlcnk7XG5cbi8qKlxuICogVmlld0NoaWxkcmVuIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICogQEFubm90YXRpb25cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFZpZXdDaGlsZHJlbjogVmlld0NoaWxkcmVuRGVjb3JhdG9yID0gbWFrZVByb3BEZWNvcmF0b3IoXG4gICAgJ1ZpZXdDaGlsZHJlbicsIChzZWxlY3Rvcj86IGFueSwgZGF0YTogYW55ID0ge30pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogZmFsc2UsIGlzVmlld1F1ZXJ5OiB0cnVlLCBkZXNjZW5kYW50czogdHJ1ZSwgLi4uZGF0YX0pLFxuICAgIFF1ZXJ5KTtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBWaWV3Q2hpbGQgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHNlZSBgVmlld0NoaWxkYC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3Q2hpbGREZWNvcmF0b3Ige1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbmZpZ3VyZXMgYSB2aWV3IHF1ZXJ5LlxuICAgKiBUaGUgY2hhbmdlIGRldGVjdG9yIGxvb2tzIGZvciB0aGUgZmlyc3QgZWxlbWVudCBvciB0aGUgZGlyZWN0aXZlIG1hdGNoaW5nIHRoZSBzZWxlY3RvclxuICAgKiBpbiB0aGUgdmlldyBET00uIElmIHRoZSB2aWV3IERPTSBjaGFuZ2VzLCBhbmQgYSBuZXcgY2hpbGQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IsXG4gICAqIHRoZSBwcm9wZXJ0eSBpcyB1cGRhdGVkLlxuICAgKlxuICAgKiBWaWV3IHF1ZXJpZXMgYXJlIHNldCBiZWZvcmUgdGhlIGBuZ0FmdGVyVmlld0luaXRgIGNhbGxiYWNrIGlzIGNhbGxlZC5cbiAgICpcbiAgICogKipNZXRhZGF0YSBQcm9wZXJ0aWVzKio6XG4gICAqXG4gICAqICogKipzZWxlY3RvcioqIC0gdGhlIGRpcmVjdGl2ZSB0eXBlIG9yIHRoZSBuYW1lIHVzZWQgZm9yIHF1ZXJ5aW5nLlxuICAgKiAqICoqcmVhZCoqIC0gcmVhZCBhIGRpZmZlcmVudCB0b2tlbiBmcm9tIHRoZSBxdWVyaWVkIGVsZW1lbnRzLlxuICAgKlxuICAgKiBTdXBwb3J0ZWQgc2VsZWN0b3JzIGluY2x1ZGU6XG4gICAqICAgKiBhbnkgY2xhc3Mgd2l0aCB0aGUgYEBDb21wb25lbnRgIG9yIGBARGlyZWN0aXZlYCBkZWNvcmF0b3JcbiAgICogICAqIGEgdGVtcGxhdGUgcmVmZXJlbmNlIHZhcmlhYmxlIGFzIGEgc3RyaW5nIChlLmcuIHF1ZXJ5IGA8bXktY29tcG9uZW50ICNjbXA+PC9teS1jb21wb25lbnQ+XG4gICAqIHdpdGggYEBWaWV3Q2hpbGQoJ2NtcCcpYClcbiAgICogICAqIGFueSBwcm92aWRlciBkZWZpbmVkIGluIHRoZSBjaGlsZCBjb21wb25lbnQgdHJlZSBvZiB0aGUgY3VycmVudCBjb21wb25lbnQgKGUuZy5cbiAgICogYEBWaWV3Q2hpbGQoU29tZVNlcnZpY2UpIHNvbWVTZXJ2aWNlOiBTb21lU2VydmljZWApXG4gICAqICAgKiBhbnkgcHJvdmlkZXIgZGVmaW5lZCB0aHJvdWdoIGEgc3RyaW5nIHRva2VuIChlLmcuIGBAVmlld0NoaWxkKCdzb21lVG9rZW4nKSBzb21lVG9rZW5WYWw6XG4gICAqIGFueWApXG4gICAqICAgKiBhIGBUZW1wbGF0ZVJlZmAgKGUuZy4gcXVlcnkgYDxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPmAgd2l0aCBgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZilcbiAgICogdGVtcGxhdGU7YClcbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkL3ZpZXdfY2hpbGRfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3ZpZXdDaGlsZC92aWV3X2NoaWxkX2hvd3RvLnRzIHJlZ2lvbj0nSG93VG8nfVxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy92aWV3Q2hpbGQvdmlld19jaGlsZF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICpcbiAgICogQEFubm90YXRpb25cbiAgICovXG4gIChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtyZWFkPzogYW55fSk6IGFueTtcbiAgbmV3IChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtyZWFkPzogYW55fSk6IFZpZXdDaGlsZDtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBWaWV3Q2hpbGQgbWV0YWRhdGEuXG4gKi9cbmV4cG9ydCB0eXBlIFZpZXdDaGlsZCA9IFF1ZXJ5O1xuXG4vKipcbiAqIFZpZXdDaGlsZCBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBWaWV3Q2hpbGQ6IFZpZXdDaGlsZERlY29yYXRvciA9IG1ha2VQcm9wRGVjb3JhdG9yKFxuICAgICdWaWV3Q2hpbGQnLCAoc2VsZWN0b3I6IGFueSwgZGF0YTogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICAgKHtzZWxlY3RvciwgZmlyc3Q6IHRydWUsIGlzVmlld1F1ZXJ5OiB0cnVlLCBkZXNjZW5kYW50czogdHJ1ZSwgLi4uZGF0YX0pLFxuICAgIFF1ZXJ5KTtcbiJdfQ==