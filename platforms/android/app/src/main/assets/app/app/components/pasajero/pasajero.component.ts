import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventData } from "tns-core-modules/data/observable";
import { RouterExtensions } from "nativescript-angular/router";


import { Pasajero } from "../../models/pasajero.model";

//USER INTERFACE
import { TextView } from "tns-core-modules/ui/text-view";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { Label } from "tns-core-modules/ui/label";
import { Button } from "tns-core-modules/ui/button";

//SERVICES
import { MainService } from "../../services/main.service";
import { RepositoryService } from "../../services/repository.service";

@Component({
	selector: "ns-pasajero",
	moduleId: module.id,
	templateUrl: "./pasajero.component.html",
})
export class PasajeroComponent implements OnInit {

	pasajeros:Pasajero[];

	constructor(
		private mainService: MainService,
		private repService:RepositoryService){
		let repo = repService.getRepo();
		console.log("repo", repo)
		mainService.rescataPasajeros(repo.idOpeServicio,1)
		.subscribe((resp)=>{
			let p:any = resp;
			this.pasajeros = p;
			//console.log("p",p)
		});

	}
	ngOnInit(){

	}

}