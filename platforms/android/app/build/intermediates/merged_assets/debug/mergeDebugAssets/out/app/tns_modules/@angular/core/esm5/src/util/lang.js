/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine if the argument is shaped like a Promise
 */
export function isPromise(obj) {
    // allow any Promise/A+ compliant thenable.
    // It's up to the caller to ensure that obj.then conforms to the spec
    return !!obj && typeof obj.then === 'function';
}
/**
 * Determine if the argument is an Observable
 */
export function isObservable(obj) {
    // TODO: use isObservable once we update pass rxjs 6.1
    // https://github.com/ReactiveX/rxjs/blob/master/CHANGELOG.md#610-2018-05-03
    return !!obj && typeof obj.subscribe === 'function';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvcmUvc3JjL3V0aWwvbGFuZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFJSDs7R0FFRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBUTtJQUNoQywyQ0FBMkM7SUFDM0MscUVBQXFFO0lBQ3JFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0FBQ2pELENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsR0FBMEI7SUFDckQsc0RBQXNEO0lBQ3RELDRFQUE0RTtJQUM1RSxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQztBQUN0RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgYXJndW1lbnQgaXMgc2hhcGVkIGxpa2UgYSBQcm9taXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2Uob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZTxhbnk+IHtcbiAgLy8gYWxsb3cgYW55IFByb21pc2UvQSsgY29tcGxpYW50IHRoZW5hYmxlLlxuICAvLyBJdCdzIHVwIHRvIHRoZSBjYWxsZXIgdG8gZW5zdXJlIHRoYXQgb2JqLnRoZW4gY29uZm9ybXMgdG8gdGhlIHNwZWNcbiAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JzZXJ2YWJsZShvYmo6IGFueSB8IE9ic2VydmFibGU8YW55Pik6IG9iaiBpcyBPYnNlcnZhYmxlPGFueT4ge1xuICAvLyBUT0RPOiB1c2UgaXNPYnNlcnZhYmxlIG9uY2Ugd2UgdXBkYXRlIHBhc3MgcnhqcyA2LjFcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2Jsb2IvbWFzdGVyL0NIQU5HRUxPRy5tZCM2MTAtMjAxOC0wNS0wM1xuICByZXR1cm4gISFvYmogJiYgdHlwZW9mIG9iai5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbic7XG59XG4iXX0=