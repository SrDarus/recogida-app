/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/ml_parser/xml_parser", ["require", "exports", "tslib", "@angular/compiler/src/ml_parser/parser", "@angular/compiler/src/ml_parser/xml_tags", "@angular/compiler/src/ml_parser/parser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var parser_1 = require("@angular/compiler/src/ml_parser/parser");
    var xml_tags_1 = require("@angular/compiler/src/ml_parser/xml_tags");
    var parser_2 = require("@angular/compiler/src/ml_parser/parser");
    exports.ParseTreeResult = parser_2.ParseTreeResult;
    exports.TreeError = parser_2.TreeError;
    var XmlParser = /** @class */ (function (_super) {
        tslib_1.__extends(XmlParser, _super);
        function XmlParser() {
            return _super.call(this, xml_tags_1.getXmlTagDefinition) || this;
        }
        XmlParser.prototype.parse = function (source, url, parseExpansionForms) {
            if (parseExpansionForms === void 0) { parseExpansionForms = false; }
            return _super.prototype.parse.call(this, source, url, parseExpansionForms);
        };
        return XmlParser;
    }(parser_1.Parser));
    exports.XmlParser = XmlParser;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbXBpbGVyL3NyYy9tbF9wYXJzZXIveG1sX3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCxpRUFBaUQ7SUFDakQscUVBQStDO0lBRS9DLGlFQUFvRDtJQUE1QyxtQ0FBQSxlQUFlLENBQUE7SUFBRSw2QkFBQSxTQUFTLENBQUE7SUFFbEM7UUFBK0IscUNBQU07UUFDbkM7bUJBQWdCLGtCQUFNLDhCQUFtQixDQUFDO1FBQUUsQ0FBQztRQUU3Qyx5QkFBSyxHQUFMLFVBQU0sTUFBYyxFQUFFLEdBQVcsRUFBRSxtQkFBb0M7WUFBcEMsb0NBQUEsRUFBQSwyQkFBb0M7WUFDckUsT0FBTyxpQkFBTSxLQUFLLFlBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDSCxnQkFBQztJQUFELENBQUMsQUFORCxDQUErQixlQUFNLEdBTXBDO0lBTlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGFyc2VUcmVlUmVzdWx0LCBQYXJzZXJ9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi94bWxfdGFncyc7XG5cbmV4cG9ydCB7UGFyc2VUcmVlUmVzdWx0LCBUcmVlRXJyb3J9IGZyb20gJy4vcGFyc2VyJztcblxuZXhwb3J0IGNsYXNzIFhtbFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKCkgeyBzdXBlcihnZXRYbWxUYWdEZWZpbml0aW9uKTsgfVxuXG4gIHBhcnNlKHNvdXJjZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcGFyc2VFeHBhbnNpb25Gb3JtczogYm9vbGVhbiA9IGZhbHNlKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICByZXR1cm4gc3VwZXIucGFyc2Uoc291cmNlLCB1cmwsIHBhcnNlRXhwYW5zaW9uRm9ybXMpO1xuICB9XG59XG4iXX0=