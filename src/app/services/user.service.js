//import { Injectable } from "@angular/core";
//import { User } from "../models/user.model";
//import { HttpClient }
//
//@Injectable({})
//
//export class UserService {
//
//	/*
//    register(user: User) {
//        return new Promise((resolve, reject) => {
//            Kinvey.User.logout()
//                .then(() => {
//                    Kinvey.User.signup({ username: user.email, password: user.password })
//                        .then(resolve)
//                        .catch((error) => { this.handleErrors(error); reject(); })
//                })
//                .catch((error) => { this.handleErrors(error); reject(); })
//        });
//    }
//
//    login(user: User) {
//        return new Promise((resolve, reject) => {
//            Kinvey.User.logout()
//                .then(() => {
//                    Kinvey.User.login(user.email, user.password)
//                        .then(resolve)
//                        .catch((error) => { this.handleErrors(error); reject(); })
//                })
//                .catch((error) => { this.handleErrors(error); reject(); })
//        });
//    }
//
//    resetPassword(email) {
//        return Kinvey.User.resetPassword(email)
//            .catch(this.handleErrors);
//    }
//
//    handleErrors(error: Kinvey.BaseError) {
//        console.error(error.message);
//    }
//    */
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsdUJBQXVCO0FBQ3ZCLEVBQUU7QUFDRixpQkFBaUI7QUFDakIsRUFBRTtBQUNGLDRCQUE0QjtBQUM1QixFQUFFO0FBQ0YsS0FBSztBQUNMLDRCQUE0QjtBQUM1QixtREFBbUQ7QUFDbkQsa0NBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQiwyRkFBMkY7QUFDM0Ysd0NBQXdDO0FBQ3hDLG9GQUFvRjtBQUNwRixvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLGFBQWE7QUFDYixPQUFPO0FBQ1AsRUFBRTtBQUNGLHlCQUF5QjtBQUN6QixtREFBbUQ7QUFDbkQsa0NBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQixrRUFBa0U7QUFDbEUsd0NBQXdDO0FBQ3hDLG9GQUFvRjtBQUNwRixvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLGFBQWE7QUFDYixPQUFPO0FBQ1AsRUFBRTtBQUNGLDRCQUE0QjtBQUM1QixpREFBaUQ7QUFDakQsd0NBQXdDO0FBQ3hDLE9BQU87QUFDUCxFQUFFO0FBQ0YsNkNBQTZDO0FBQzdDLHVDQUF1QztBQUN2QyxPQUFPO0FBQ1AsUUFBUTtBQUNSLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vL2ltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuLy9pbXBvcnQgeyBIdHRwQ2xpZW50IH1cclxuLy9cclxuLy9ASW5qZWN0YWJsZSh7fSlcclxuLy9cclxuLy9leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4vL1xyXG4vL1x0LypcclxuLy8gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xyXG4vLyAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gICAgICAgICAgICBLaW52ZXkuVXNlci5sb2dvdXQoKVxyXG4vLyAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICBLaW52ZXkuVXNlci5zaWdudXAoeyB1c2VybmFtZTogdXNlci5lbWFpbCwgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpOyByZWplY3QoKTsgfSlcclxuLy8gICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxyXG4vLyAgICAgICAgfSk7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgbG9naW4odXNlcjogVXNlcikge1xyXG4vLyAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gICAgICAgICAgICBLaW52ZXkuVXNlci5sb2dvdXQoKVxyXG4vLyAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICBLaW52ZXkuVXNlci5sb2dpbih1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxyXG4vLyAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7IHRoaXMuaGFuZGxlRXJyb3JzKGVycm9yKTsgcmVqZWN0KCk7IH0pXHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XHJcbi8vICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZChlbWFpbClcclxuLy8gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIGhhbmRsZUVycm9ycyhlcnJvcjogS2ludmV5LkJhc2VFcnJvcikge1xyXG4vLyAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuLy8gICAgfVxyXG4vLyAgICAqL1xyXG4vL30iXX0=