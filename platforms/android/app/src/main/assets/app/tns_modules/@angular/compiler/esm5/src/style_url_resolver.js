/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var StyleWithImports = /** @class */ (function () {
    function StyleWithImports(style, styleUrls) {
        this.style = style;
        this.styleUrls = styleUrls;
    }
    return StyleWithImports;
}());
export { StyleWithImports };
export function isStyleUrlResolvable(url) {
    if (url == null || url.length === 0 || url[0] == '/')
        return false;
    var schemeMatch = url.match(URL_WITH_SCHEMA_REGEXP);
    return schemeMatch === null || schemeMatch[1] == 'package' || schemeMatch[1] == 'asset';
}
/**
 * Rewrites stylesheets by resolving and removing the @import urls that
 * are either relative or don't have a `package:` scheme
 */
export function extractStyleUrls(resolver, baseUrl, cssText) {
    var foundUrls = [];
    var modifiedCssText = cssText.replace(CSS_STRIPPABLE_COMMENT_REGEXP, '')
        .replace(CSS_IMPORT_REGEXP, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        var url = m[1] || m[2];
        if (!isStyleUrlResolvable(url)) {
            // Do not attempt to resolve non-package absolute URLs with URI
            // scheme
            return m[0];
        }
        foundUrls.push(resolver.resolve(baseUrl, url));
        return '';
    });
    return new StyleWithImports(modifiedCssText, foundUrls);
}
var CSS_IMPORT_REGEXP = /@import\s+(?:url\()?\s*(?:(?:['"]([^'"]*))|([^;\)\s]*))[^;]*;?/g;
var CSS_STRIPPABLE_COMMENT_REGEXP = /\/\*(?!#\s*(?:sourceURL|sourceMappingURL)=)[\s\S]+?\*\//g;
var URL_WITH_SCHEMA_REGEXP = /^([^:/?#]+):/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfdXJsX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29tcGlsZXIvc3JjL3N0eWxlX3VybF9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFPSDtJQUNFLDBCQUFtQixLQUFhLEVBQVMsU0FBbUI7UUFBekMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVU7SUFBRyxDQUFDO0lBQ2xFLHVCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLEdBQVc7SUFDOUMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDbkUsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3RELE9BQU8sV0FBVyxLQUFLLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUM7QUFDMUYsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FDNUIsUUFBcUIsRUFBRSxPQUFlLEVBQUUsT0FBZTtJQUN6RCxJQUFNLFNBQVMsR0FBYSxFQUFFLENBQUM7SUFFL0IsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLENBQUM7U0FDN0MsT0FBTyxDQUFDLGlCQUFpQixFQUFFO1FBQUMsV0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCxzQkFBYzs7UUFDekMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsK0RBQStEO1lBQy9ELFNBQVM7WUFDVCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQyxDQUFDLENBQUM7SUFDL0IsT0FBTyxJQUFJLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsSUFBTSxpQkFBaUIsR0FBRyxpRUFBaUUsQ0FBQztBQUM1RixJQUFNLDZCQUE2QixHQUFHLDBEQUEwRCxDQUFDO0FBQ2pHLElBQU0sc0JBQXNCLEdBQUcsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBTb21lIG9mIHRoZSBjb2RlIGNvbWVzIGZyb20gV2ViQ29tcG9uZW50cy5KU1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL2Jsb2IvbWFzdGVyL3NyYy9IVE1MSW1wb3J0cy9wYXRoLmpzXG5cbmltcG9ydCB7VXJsUmVzb2x2ZXJ9IGZyb20gJy4vdXJsX3Jlc29sdmVyJztcblxuZXhwb3J0IGNsYXNzIFN0eWxlV2l0aEltcG9ydHMge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3R5bGU6IHN0cmluZywgcHVibGljIHN0eWxlVXJsczogc3RyaW5nW10pIHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0eWxlVXJsUmVzb2x2YWJsZSh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsID09IG51bGwgfHwgdXJsLmxlbmd0aCA9PT0gMCB8fCB1cmxbMF0gPT0gJy8nKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHNjaGVtZU1hdGNoID0gdXJsLm1hdGNoKFVSTF9XSVRIX1NDSEVNQV9SRUdFWFApO1xuICByZXR1cm4gc2NoZW1lTWF0Y2ggPT09IG51bGwgfHwgc2NoZW1lTWF0Y2hbMV0gPT0gJ3BhY2thZ2UnIHx8IHNjaGVtZU1hdGNoWzFdID09ICdhc3NldCc7XG59XG5cbi8qKlxuICogUmV3cml0ZXMgc3R5bGVzaGVldHMgYnkgcmVzb2x2aW5nIGFuZCByZW1vdmluZyB0aGUgQGltcG9ydCB1cmxzIHRoYXRcbiAqIGFyZSBlaXRoZXIgcmVsYXRpdmUgb3IgZG9uJ3QgaGF2ZSBhIGBwYWNrYWdlOmAgc2NoZW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U3R5bGVVcmxzKFxuICAgIHJlc29sdmVyOiBVcmxSZXNvbHZlciwgYmFzZVVybDogc3RyaW5nLCBjc3NUZXh0OiBzdHJpbmcpOiBTdHlsZVdpdGhJbXBvcnRzIHtcbiAgY29uc3QgZm91bmRVcmxzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0IG1vZGlmaWVkQ3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShDU1NfU1RSSVBQQUJMRV9DT01NRU5UX1JFR0VYUCwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShDU1NfSU1QT1JUX1JFR0VYUCwgKC4uLm06IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG1bMV0gfHwgbVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1N0eWxlVXJsUmVzb2x2YWJsZSh1cmwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IGF0dGVtcHQgdG8gcmVzb2x2ZSBub24tcGFja2FnZSBhYnNvbHV0ZSBVUkxzIHdpdGggVVJJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NoZW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRVcmxzLnB1c2gocmVzb2x2ZXIucmVzb2x2ZShiYXNlVXJsLCB1cmwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gIHJldHVybiBuZXcgU3R5bGVXaXRoSW1wb3J0cyhtb2RpZmllZENzc1RleHQsIGZvdW5kVXJscyk7XG59XG5cbmNvbnN0IENTU19JTVBPUlRfUkVHRVhQID0gL0BpbXBvcnRcXHMrKD86dXJsXFwoKT9cXHMqKD86KD86WydcIl0oW14nXCJdKikpfChbXjtcXClcXHNdKikpW147XSo7Py9nO1xuY29uc3QgQ1NTX1NUUklQUEFCTEVfQ09NTUVOVF9SRUdFWFAgPSAvXFwvXFwqKD8hI1xccyooPzpzb3VyY2VVUkx8c291cmNlTWFwcGluZ1VSTCk9KVtcXHNcXFNdKz9cXCpcXC8vZztcbmNvbnN0IFVSTF9XSVRIX1NDSEVNQV9SRUdFWFAgPSAvXihbXjovPyNdKyk6LztcbiJdfQ==