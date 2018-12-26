import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router"
import { ActivatedRoute } from "@angular/router";
import { User } from "../../models/user.model";
import { USER } from "../../mock/user.mock";
import { RouterExtensions } from "nativescript-angular/router";

//import { UserService } from "../../services/user.service";

@Component({
	selector: "ns-login",
	moduleId: module.id,
	templateUrl: "./login.component.html",
})
export class LoginComponent {

	public credential: User;

	constructor(private router: RouterExtensions){
		this.credential = {
			email:'',
			password:'',
			confirmPassword:'',
			perfil:0
		}
		//console.log("//////////////////////")
	}

	ngOnInit(){	}

	login(){
		console.log(USER.email)
		if(this.credential.email=="user@gmail.com" && this.credential.password=="123"){
			this.router.navigate(["main"]);
		}else{
			alert("Usuario o password incorrectos")
		}

	}


}