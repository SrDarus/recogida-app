import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

//COMPONENT
import { MainComponent } from "./components/main/main.component";
import { LoginComponent } from "./components/login/login.component";
import { PasajeroComponent } from "./components/pasajero/pasajero.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "main", component: MainComponent },
    { path: "pasajero", component: PasajeroComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }