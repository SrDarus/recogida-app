"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//SERVICES
var main_service_1 = require("../../services/main.service");
var repository_service_1 = require("../../services/repository.service");
var MainComponent = /** @class */ (function () {
    function MainComponent(mainService, router, repService) {
        this.mainService = mainService;
        this.router = router;
        this.repService = repService;
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent.prototype.saveGuide = function (args) {
        var _this = this;
        this.guideSelected = this.guides[args.value];
        this.mainService.rescataServicios(this.guideSelected.idOpeGuia, this.fecha, 1)
            .subscribe(function (resp) {
            //console.log(resp)
            var s = resp;
            _this.services = s;
        });
    };
    MainComponent.prototype.saveService = function (args) {
        this.serviceSelected = this.services[args.value];
    };
    MainComponent.prototype.onPickerLoaded = function (args) {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var datePicker = args.object;
        datePicker.year = 2018;
        datePicker.month = 1;
        datePicker.day = 1;
        datePicker.minDate = new Date(2010, 1, 1);
        datePicker.maxDate = new Date(2045, 12, 12);
    };
    MainComponent.prototype.onDateChanged = function (args) {
        var _this = this;
        var dia = args.value.getDate();
        var mes = args.value.getMonth() + 1;
        var ano = args.value.getFullYear();
        this.fecha = dia + "-" + mes + "-" + ano;
        this.mainService.rescataGuias(this.fecha, 1)
            .subscribe(function (resp) {
            var g = resp;
            _this.guides = g;
            //console.log("guides",this.guides)
        });
        //console.log(this.fecha)
        //console.log("Date value: " + args.oldValue);
        //console.log("Date New value: " + args.value);
    };
    MainComponent.prototype.buscarPasajero = function (args) {
        var button = args.object;
        this.repService.setRepo(this.serviceSelected);
        this.router.navigate(["pasajero"]);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "ns-main",
            moduleId: module.id,
            templateUrl: "./main.component.html",
        }),
        __metadata("design:paramtypes", [main_service_1.MainService,
            router_1.RouterExtensions,
            repository_service_1.RepositoryService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCxzREFBK0Q7QUFhL0QsVUFBVTtBQUNWLDREQUEwRDtBQUMxRCx3RUFBc0U7QUFPdEU7SUFVQyx1QkFDUyxXQUF3QixFQUN4QixNQUF3QixFQUN4QixVQUE0QjtRQUY1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFFLENBQUM7SUFFeEMsZ0NBQVEsR0FBUixjQUFZLENBQUM7SUFFVixpQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUFkLGlCQVFDO1FBUEEsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO2FBQzNFLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZixtQkFBbUI7WUFDbkIsSUFBSSxDQUFDLEdBQU8sSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDbkIsSUFBSSxPQUFPLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDOUUsSUFBSSxVQUFVLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV6QyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNuQixVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUFsQixpQkFlQztRQWRBLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUE7UUFDakMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7UUFFakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7YUFDMUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNmLElBQUksQ0FBQyxHQUFPLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztZQUNkLG1DQUFtQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILHlCQUF5QjtRQUN0Qiw4Q0FBOEM7UUFDOUMsK0NBQStDO0lBQ25ELENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsSUFBZTtRQUM3QixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRWpDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQWpFVyxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUNwQyxDQUFDO3lDQVlxQiwwQkFBVztZQUNoQix5QkFBZ0I7WUFDYixzQ0FBaUI7T0FiekIsYUFBYSxDQW9FekI7SUFBRCxvQkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG4vL01PREVMU1xyXG5pbXBvcnQgeyBHdWlkZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZ3VpZGUubW9kZWxcIjtcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc2VydmljZS5tb2RlbFwiO1xyXG5cclxuLy9VU0VSIElOVEVSRkFDRVxyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XHJcblxyXG4vL1NFUlZJQ0VTXHJcbmltcG9ydCB7IE1haW5TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL21haW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSZXBvc2l0b3J5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9yZXBvc2l0b3J5LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5zLW1haW5cIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbWFpbi5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdHB1YmxpYyBndWlkZXM6IEd1aWRlW107XHJcblx0cHVibGljIGd1aWRlU2VsZWN0ZWQ6R3VpZGU7XHJcblxyXG5cdHB1YmxpYyBzZXJ2aWNlczogU2VydmljZVtdO1xyXG5cdHB1YmxpYyBzZXJ2aWNlU2VsZWN0ZWQ6U2VydmljZTtcclxuXHJcblx0ZmVjaGE6c3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbWFpblNlcnZpY2U6IE1haW5TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcblx0XHRwcml2YXRlIHJlcFNlcnZpY2U6UmVwb3NpdG9yeVNlcnZpY2Upe31cclxuXHJcblx0bmdPbkluaXQoKXtcdH1cclxuXHJcbiAgICBzYXZlR3VpZGUoYXJncyl7XHJcbiAgICBcdHRoaXMuZ3VpZGVTZWxlY3RlZCA9IHRoaXMuZ3VpZGVzW2FyZ3MudmFsdWVdO1xyXG4gICAgXHR0aGlzLm1haW5TZXJ2aWNlLnJlc2NhdGFTZXJ2aWNpb3ModGhpcy5ndWlkZVNlbGVjdGVkLmlkT3BlR3VpYSx0aGlzLmZlY2hhLDEpXHJcbiAgICBcdC5zdWJzY3JpYmUoKHJlc3ApPT57XHJcbiAgICBcdFx0Ly9jb25zb2xlLmxvZyhyZXNwKVxyXG4gICAgXHRcdGxldCBzOmFueSA9IHJlc3A7XHJcbiAgICBcdFx0dGhpcy5zZXJ2aWNlcyA9IHM7XHJcbiAgICBcdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTZXJ2aWNlKGFyZ3Mpe1xyXG4gICAgXHR0aGlzLnNlcnZpY2VTZWxlY3RlZCA9IHRoaXMuc2VydmljZXNbYXJncy52YWx1ZV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcclxuICAgIGxldCBvcHRpb25zID0geyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfTtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAyMDE4O1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSAxO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gMTtcclxuICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgyMDEwLCAxLCAxKTtcclxuICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCAxMiwxMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZUNoYW5nZWQoYXJncykge1xyXG4gICAgXHRsZXQgZGlhID0gYXJncy52YWx1ZS5nZXREYXRlKClcclxuICAgIFx0bGV0IG1lcyA9IGFyZ3MudmFsdWUuZ2V0TW9udGgoKSsxXHJcbiAgICBcdGxldCBhbm8gPSBhcmdzLnZhbHVlLmdldEZ1bGxZZWFyKClcclxuICAgIFx0dGhpcy5mZWNoYSA9IGRpYStcIi1cIittZXMrXCItXCIrYW5vO1xyXG5cclxuICAgIFx0dGhpcy5tYWluU2VydmljZS5yZXNjYXRhR3VpYXModGhpcy5mZWNoYSwxKVxyXG4gICAgXHQuc3Vic2NyaWJlKChyZXNwKT0+e1xyXG4gICAgXHRcdGxldCBnOmFueSA9IHJlc3A7XHJcbiAgICBcdFx0dGhpcy5ndWlkZXM9ZztcclxuICAgIFx0XHQvL2NvbnNvbGUubG9nKFwiZ3VpZGVzXCIsdGhpcy5ndWlkZXMpXHJcbiAgICBcdH0pO1xyXG4gICAgXHQvL2NvbnNvbGUubG9nKHRoaXMuZmVjaGEpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRhdGUgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRhdGUgTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1c2NhclBhc2FqZXJvKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG5cdCAgICBsZXQgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcclxuXHJcblx0ICAgIHRoaXMucmVwU2VydmljZS5zZXRSZXBvKHRoaXMuc2VydmljZVNlbGVjdGVkKTtcclxuICAgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicGFzYWplcm9cIl0pO1xyXG5cdH1cclxuXHJcblxyXG59XHJcbiJdfQ==