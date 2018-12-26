/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * This file is the index file collecting all of the symbols published on the global.ng namespace.
 *
 * The reason why this file/module is separate global_utils.ts file is that we use this file
 * to generate a d.ts file containing all the published symbols that is then compared to the golden
 * file in the public_api_guard test.
 */
export { getComponent, getDirectives, getHostElement, getInjector, getRootComponents, getViewComponent } from './discovery_utils';
export { markDirty } from './instructions';
export { getPlayers } from './players';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX3V0aWxzX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvZ2xvYmFsX3V0aWxzX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7Ozs7OztHQU9HO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hJLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIFRoaXMgZmlsZSBpcyB0aGUgaW5kZXggZmlsZSBjb2xsZWN0aW5nIGFsbCBvZiB0aGUgc3ltYm9scyBwdWJsaXNoZWQgb24gdGhlIGdsb2JhbC5uZyBuYW1lc3BhY2UuXG4gKlxuICogVGhlIHJlYXNvbiB3aHkgdGhpcyBmaWxlL21vZHVsZSBpcyBzZXBhcmF0ZSBnbG9iYWxfdXRpbHMudHMgZmlsZSBpcyB0aGF0IHdlIHVzZSB0aGlzIGZpbGVcbiAqIHRvIGdlbmVyYXRlIGEgZC50cyBmaWxlIGNvbnRhaW5pbmcgYWxsIHRoZSBwdWJsaXNoZWQgc3ltYm9scyB0aGF0IGlzIHRoZW4gY29tcGFyZWQgdG8gdGhlIGdvbGRlblxuICogZmlsZSBpbiB0aGUgcHVibGljX2FwaV9ndWFyZCB0ZXN0LlxuICovXG5cbmV4cG9ydCB7Z2V0Q29tcG9uZW50LCBnZXREaXJlY3RpdmVzLCBnZXRIb3N0RWxlbWVudCwgZ2V0SW5qZWN0b3IsIGdldFJvb3RDb21wb25lbnRzLCBnZXRWaWV3Q29tcG9uZW50fSBmcm9tICcuL2Rpc2NvdmVyeV91dGlscyc7XG5leHBvcnQge21hcmtEaXJ0eX0gZnJvbSAnLi9pbnN0cnVjdGlvbnMnO1xuZXhwb3J0IHtnZXRQbGF5ZXJzfSBmcm9tICcuL3BsYXllcnMnO1xuIl19