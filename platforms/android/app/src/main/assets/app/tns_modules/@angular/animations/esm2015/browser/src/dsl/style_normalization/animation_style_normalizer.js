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
/**
 * \@publicApi
 * @abstract
 */
export class AnimationStyleNormalizer {
}
if (false) {
    /**
     * @abstract
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { };
    /**
     * @abstract
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) { };
}
/**
 * \@publicApi
 */
export class NoopAnimationStyleNormalizer {
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    normalizePropertyName(propertyName, errors) { return propertyName; }
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        return /** @type {?} */ (value);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3N0eWxlX25vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL2RzbC9zdHlsZV9ub3JtYWxpemF0aW9uL2FuaW1hdGlvbl9zdHlsZV9ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sT0FBZ0Isd0JBQXdCO0NBSzdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0QsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7O0lBQ3ZDLHFCQUFxQixDQUFDLFlBQW9CLEVBQUUsTUFBZ0IsSUFBWSxPQUFPLFlBQVksQ0FBQyxFQUFFOzs7Ozs7OztJQUU5RixtQkFBbUIsQ0FDZixvQkFBNEIsRUFBRSxrQkFBMEIsRUFBRSxLQUFvQixFQUM5RSxNQUFnQjtRQUNsQix5QkFBWSxLQUFLLEVBQUM7S0FDbkI7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIge1xuICBhYnN0cmFjdCBub3JtYWxpemVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGVycm9yczogc3RyaW5nW10pOiBzdHJpbmc7XG4gIGFic3RyYWN0IG5vcm1hbGl6ZVN0eWxlVmFsdWUoXG4gICAgICB1c2VyUHJvdmlkZWRQcm9wZXJ0eTogc3RyaW5nLCBub3JtYWxpemVkUHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZ3xudW1iZXIsXG4gICAgICBlcnJvcnM6IHN0cmluZ1tdKTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIE5vb3BBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIge1xuICBub3JtYWxpemVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGVycm9yczogc3RyaW5nW10pOiBzdHJpbmcgeyByZXR1cm4gcHJvcGVydHlOYW1lOyB9XG5cbiAgbm9ybWFsaXplU3R5bGVWYWx1ZShcbiAgICAgIHVzZXJQcm92aWRlZFByb3BlcnR5OiBzdHJpbmcsIG5vcm1hbGl6ZWRQcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfG51bWJlcixcbiAgICAgIGVycm9yczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiA8YW55PnZhbHVlO1xuICB9XG59XG4iXX0=