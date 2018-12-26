"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//SERVICES
var main_service_1 = require("../../services/main.service");
var repository_service_1 = require("../../services/repository.service");
var PasajeroComponent = /** @class */ (function () {
    function PasajeroComponent(mainService, repService) {
        var _this = this;
        this.mainService = mainService;
        this.repService = repService;
        var repo = repService.getRepo();
        console.log("repo", repo);
        mainService.rescataPasajeros(repo.idOpeServicio, 1)
            .subscribe(function (resp) {
            var p = resp;
            _this.pasajeros = p;
            //console.log("p",p)
        });
    }
    PasajeroComponent.prototype.ngOnInit = function () {
    };
    PasajeroComponent = __decorate([
        core_1.Component({
            selector: "ns-pasajero",
            moduleId: module.id,
            templateUrl: "./pasajero.component.html",
        }),
        __metadata("design:paramtypes", [main_service_1.MainService,
            repository_service_1.RepositoryService])
    ], PasajeroComponent);
    return PasajeroComponent;
}());
exports.PasajeroComponent = PasajeroComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzYWplcm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFzYWplcm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBZWxELFVBQVU7QUFDViw0REFBMEQ7QUFDMUQsd0VBQXNFO0FBT3RFO0lBSUMsMkJBQ1MsV0FBd0IsRUFDeEIsVUFBNEI7UUFGckMsaUJBWUM7UUFYUSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUNwQyxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekIsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO2FBQ2pELFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZixJQUFJLENBQUMsR0FBTyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsb0JBQW9CO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUNELG9DQUFRLEdBQVI7SUFFQSxDQUFDO0lBbkJXLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDeEMsQ0FBQzt5Q0FNcUIsMEJBQVc7WUFDYixzQ0FBaUI7T0FOekIsaUJBQWlCLENBcUI3QjtJQUFELHdCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgUGFzYWplcm8gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Bhc2FqZXJvLm1vZGVsXCI7XHJcblxyXG4vL1VTRVIgSU5URVJGQUNFXHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcclxuXHJcbi8vU0VSVklDRVNcclxuaW1wb3J0IHsgTWFpblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWFpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3JlcG9zaXRvcnkuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibnMtcGFzYWplcm9cIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGFzYWplcm8uY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhc2FqZXJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0cGFzYWplcm9zOlBhc2FqZXJvW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBtYWluU2VydmljZTogTWFpblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlcFNlcnZpY2U6UmVwb3NpdG9yeVNlcnZpY2Upe1xyXG5cdFx0bGV0IHJlcG8gPSByZXBTZXJ2aWNlLmdldFJlcG8oKTtcclxuXHRcdGNvbnNvbGUubG9nKFwicmVwb1wiLCByZXBvKVxyXG5cdFx0bWFpblNlcnZpY2UucmVzY2F0YVBhc2FqZXJvcyhyZXBvLmlkT3BlU2VydmljaW8sMSlcclxuXHRcdC5zdWJzY3JpYmUoKHJlc3ApPT57XHJcblx0XHRcdGxldCBwOmFueSA9IHJlc3A7XHJcblx0XHRcdHRoaXMucGFzYWplcm9zID0gcDtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInBcIixwKVxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHRuZ09uSW5pdCgpe1xyXG5cclxuXHR9XHJcblxyXG59Il19