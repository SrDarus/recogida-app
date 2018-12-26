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
import { injectElementRef as render3InjectElementRef } from '../render3/view_engine_compatibility';
import { noop } from '../util/noop';
/**
 * A wrapper around a native element inside of a View.
 *
 * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
 * element.
 *
 * \@security Permitting direct access to the DOM can make your application more vulnerable to
 * XSS attacks. Carefully review any use of `ElementRef` in your code. For more detail, see the
 * [Security Guide](http://g.co/ng/security).
 *
 * \@publicApi
 * @template T
 */
export class ElementRef {
    /**
     * @param {?} nativeElement
     */
    constructor(nativeElement) { this.nativeElement = nativeElement; }
}
/**
 * \@internal
 */
ElementRef.__NG_ELEMENT_ID__ = () => SWITCH_ELEMENT_REF_FACTORY(ElementRef);
if (false) {
    /**
     * \@internal
     * @type {?}
     */
    ElementRef.__NG_ELEMENT_ID__;
    /**
     * The underlying native element or `null` if direct access to native elements is not supported
     * (e.g. when the application runs in a web worker).
     *
     * <div class="callout is-critical">
     *   <header>Use with caution</header>
     *   <p>
     *    Use this API as the last resort when direct access to DOM is needed. Use templating and
     *    data-binding provided by Angular instead. Alternatively you can take a look at {\@link
     * Renderer2}
     *    which provides API that can safely be used even when direct access to native elements is not
     *    supported.
     *   </p>
     *   <p>
     *    Relying on direct DOM access creates tight coupling between your application and rendering
     *    layers which will make it impossible to separate the two and deploy your application into a
     *    web worker.
     *   </p>
     * </div>
     *
     * @type {?}
     */
    ElementRef.prototype.nativeElement;
}
/** @type {?} */
export const SWITCH_ELEMENT_REF_FACTORY__POST_R3__ = render3InjectElementRef;
/** @type {?} */
const SWITCH_ELEMENT_REF_FACTORY__PRE_R3__ = noop;
/** @type {?} */
const SWITCH_ELEMENT_REF_FACTORY = SWITCH_ELEMENT_REF_FACTORY__PRE_R3__;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9yZWYuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb3JlL3NyYy9saW5rZXIvZWxlbWVudF9yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsZ0JBQWdCLElBQUksdUJBQXVCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQWlCbEMsTUFBTSxPQUFPLFVBQVU7Ozs7SUF3QnJCLFlBQVksYUFBZ0IsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxFQUFFOzs7OztBQUdyRSwrQkFBNkMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzVGLGFBQWEscUNBQXFDLEdBQUcsdUJBQXVCLENBQUM7O0FBQzdFLE1BQU0sb0NBQW9DLEdBQUcsSUFBSSxDQUFDOztBQUNsRCxNQUFNLDBCQUEwQixHQUM1QixvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtpbmplY3RFbGVtZW50UmVmIGFzIHJlbmRlcjNJbmplY3RFbGVtZW50UmVmfSBmcm9tICcuLi9yZW5kZXIzL3ZpZXdfZW5naW5lX2NvbXBhdGliaWxpdHknO1xuaW1wb3J0IHtub29wfSBmcm9tICcuLi91dGlsL25vb3AnO1xuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYSBuYXRpdmUgZWxlbWVudCBpbnNpZGUgb2YgYSBWaWV3LlxuICpcbiAqIEFuIGBFbGVtZW50UmVmYCBpcyBiYWNrZWQgYnkgYSByZW5kZXItc3BlY2lmaWMgZWxlbWVudC4gSW4gdGhlIGJyb3dzZXIsIHRoaXMgaXMgdXN1YWxseSBhIERPTVxuICogZWxlbWVudC5cbiAqXG4gKiBAc2VjdXJpdHkgUGVybWl0dGluZyBkaXJlY3QgYWNjZXNzIHRvIHRoZSBET00gY2FuIG1ha2UgeW91ciBhcHBsaWNhdGlvbiBtb3JlIHZ1bG5lcmFibGUgdG9cbiAqIFhTUyBhdHRhY2tzLiBDYXJlZnVsbHkgcmV2aWV3IGFueSB1c2Ugb2YgYEVsZW1lbnRSZWZgIGluIHlvdXIgY29kZS4gRm9yIG1vcmUgZGV0YWlsLCBzZWUgdGhlXG4gKiBbU2VjdXJpdHkgR3VpZGVdKGh0dHA6Ly9nLmNvL25nL3NlY3VyaXR5KS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbi8vIE5vdGU6IFdlIGRvbid0IGV4cG9zZSB0aGluZ3MgbGlrZSBgSW5qZWN0b3JgLCBgVmlld0NvbnRhaW5lcmAsIC4uLiBoZXJlLFxuLy8gaS5lLiB1c2VycyBoYXZlIHRvIGFzayBmb3Igd2hhdCB0aGV5IG5lZWQuIFdpdGggdGhhdCwgd2UgY2FuIGJ1aWxkIGJldHRlciBhbmFseXNpcyB0b29sc1xuLy8gYW5kIGNvdWxkIGRvIGJldHRlciBjb2RlZ2VuIGluIHRoZSBmdXR1cmUuXG5leHBvcnQgY2xhc3MgRWxlbWVudFJlZjxUID0gYW55PiB7XG4gIC8qKlxuICAgKiBUaGUgdW5kZXJseWluZyBuYXRpdmUgZWxlbWVudCBvciBgbnVsbGAgaWYgZGlyZWN0IGFjY2VzcyB0byBuYXRpdmUgZWxlbWVudHMgaXMgbm90IHN1cHBvcnRlZFxuICAgKiAoZS5nLiB3aGVuIHRoZSBhcHBsaWNhdGlvbiBydW5zIGluIGEgd2ViIHdvcmtlcikuXG4gICAqXG4gICAqIDxkaXYgY2xhc3M9XCJjYWxsb3V0IGlzLWNyaXRpY2FsXCI+XG4gICAqICAgPGhlYWRlcj5Vc2Ugd2l0aCBjYXV0aW9uPC9oZWFkZXI+XG4gICAqICAgPHA+XG4gICAqICAgIFVzZSB0aGlzIEFQSSBhcyB0aGUgbGFzdCByZXNvcnQgd2hlbiBkaXJlY3QgYWNjZXNzIHRvIERPTSBpcyBuZWVkZWQuIFVzZSB0ZW1wbGF0aW5nIGFuZFxuICAgKiAgICBkYXRhLWJpbmRpbmcgcHJvdmlkZWQgYnkgQW5ndWxhciBpbnN0ZWFkLiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gdGFrZSBhIGxvb2sgYXQge0BsaW5rXG4gICAqIFJlbmRlcmVyMn1cbiAgICogICAgd2hpY2ggcHJvdmlkZXMgQVBJIHRoYXQgY2FuIHNhZmVseSBiZSB1c2VkIGV2ZW4gd2hlbiBkaXJlY3QgYWNjZXNzIHRvIG5hdGl2ZSBlbGVtZW50cyBpcyBub3RcbiAgICogICAgc3VwcG9ydGVkLlxuICAgKiAgIDwvcD5cbiAgICogICA8cD5cbiAgICogICAgUmVseWluZyBvbiBkaXJlY3QgRE9NIGFjY2VzcyBjcmVhdGVzIHRpZ2h0IGNvdXBsaW5nIGJldHdlZW4geW91ciBhcHBsaWNhdGlvbiBhbmQgcmVuZGVyaW5nXG4gICAqICAgIGxheWVycyB3aGljaCB3aWxsIG1ha2UgaXQgaW1wb3NzaWJsZSB0byBzZXBhcmF0ZSB0aGUgdHdvIGFuZCBkZXBsb3kgeW91ciBhcHBsaWNhdGlvbiBpbnRvIGFcbiAgICogICAgd2ViIHdvcmtlci5cbiAgICogICA8L3A+XG4gICAqIDwvZGl2PlxuICAgKlxuICAgKi9cbiAgcHVibGljIG5hdGl2ZUVsZW1lbnQ6IFQ7XG5cbiAgY29uc3RydWN0b3IobmF0aXZlRWxlbWVudDogVCkgeyB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBuYXRpdmVFbGVtZW50OyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBzdGF0aWMgX19OR19FTEVNRU5UX0lEX186ICgpID0+IEVsZW1lbnRSZWYgPSAoKSA9PiBTV0lUQ0hfRUxFTUVOVF9SRUZfRkFDVE9SWShFbGVtZW50UmVmKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNXSVRDSF9FTEVNRU5UX1JFRl9GQUNUT1JZX19QT1NUX1IzX18gPSByZW5kZXIzSW5qZWN0RWxlbWVudFJlZjtcbmNvbnN0IFNXSVRDSF9FTEVNRU5UX1JFRl9GQUNUT1JZX19QUkVfUjNfXyA9IG5vb3A7XG5jb25zdCBTV0lUQ0hfRUxFTUVOVF9SRUZfRkFDVE9SWTogdHlwZW9mIHJlbmRlcjNJbmplY3RFbGVtZW50UmVmID1cbiAgICBTV0lUQ0hfRUxFTUVOVF9SRUZfRkFDVE9SWV9fUFJFX1IzX187XG4iXX0=