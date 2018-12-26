"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_mock_1 = require("../../mock/user.mock");
var router_1 = require("nativescript-angular/router");
//import { UserService } from "../../services/user.service";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.credential = {
            email: '',
            password: '',
            confirmPassword: '',
            perfil: 0
        };
        //console.log("//////////////////////")
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        console.log(user_mock_1.USER.email);
        if (this.credential.email == "user@gmail.com" && this.credential.password == "123") {
            this.router.navigate(["main"]);
        }
        else {
            alert("Usuario o password incorrectos");
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBSWpFLGtEQUE0QztBQUM1QyxzREFBK0Q7QUFFL0QsNERBQTREO0FBTzVEO0lBSUMsd0JBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDakIsS0FBSyxFQUFDLEVBQUU7WUFDUixRQUFRLEVBQUMsRUFBRTtZQUNYLGVBQWUsRUFBQyxFQUFFO1lBQ2xCLE1BQU0sRUFBQyxDQUFDO1NBQ1IsQ0FBQTtRQUNELHVDQUF1QztJQUN4QyxDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFZLENBQUM7SUFFYiw4QkFBSyxHQUFMO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUUsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUUsS0FBSyxFQUFDO1lBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMvQjthQUFJO1lBQ0osS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7U0FDdkM7SUFFRixDQUFDO0lBeEJXLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3JDLENBQUM7eUNBSzJCLHlCQUFnQjtPQUpoQyxjQUFjLENBMkIxQjtJQUFELHFCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVU0VSIH0gZnJvbSBcIi4uLy4uL21vY2svdXNlci5tb2NrXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG4vL2ltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibnMtbG9naW5cIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIGNyZWRlbnRpYWw6IFVzZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuXHRcdHRoaXMuY3JlZGVudGlhbCA9IHtcclxuXHRcdFx0ZW1haWw6JycsXHJcblx0XHRcdHBhc3N3b3JkOicnLFxyXG5cdFx0XHRjb25maXJtUGFzc3dvcmQ6JycsXHJcblx0XHRcdHBlcmZpbDowXHJcblx0XHR9XHJcblx0XHQvL2NvbnNvbGUubG9nKFwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1wiKVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKXtcdH1cclxuXHJcblx0bG9naW4oKXtcclxuXHRcdGNvbnNvbGUubG9nKFVTRVIuZW1haWwpXHJcblx0XHRpZih0aGlzLmNyZWRlbnRpYWwuZW1haWw9PVwidXNlckBnbWFpbC5jb21cIiAmJiB0aGlzLmNyZWRlbnRpYWwucGFzc3dvcmQ9PVwiMTIzXCIpe1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtYWluXCJdKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRhbGVydChcIlVzdWFyaW8gbyBwYXNzd29yZCBpbmNvcnJlY3Rvc1wiKVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cclxufSJdfQ==