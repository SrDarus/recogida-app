import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventData } from "tns-core-modules/data/observable";
import { RouterExtensions } from "nativescript-angular/router";

//MODELS
import { Guide } from "../../models/guide.model";
import { Service } from "../../models/service.model";

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
	selector: "ns-main",
	moduleId: module.id,
	templateUrl: "./main.component.html",
})
export class MainComponent implements OnInit {

	public guides: Guide[];
	public guideSelected:Guide;

	public services: Service[];
	public serviceSelected:Service;

	fecha:string;

	constructor(
		private mainService: MainService,
		private router: RouterExtensions,
		private repService:RepositoryService){}

	ngOnInit(){	}

    saveGuide(args){
    	this.guideSelected = this.guides[args.value];
    	this.mainService.rescataServicios(this.guideSelected.idOpeGuia,this.fecha,1)
    	.subscribe((resp)=>{
    		//console.log(resp)
    		let s:any = resp;
    		this.services = s;
    	});
    }

    saveService(args){
    	this.serviceSelected = this.services[args.value];
    }
    
    onPickerLoaded(args) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let datePicker = <DatePicker>args.object;

        datePicker.year = 2018;
        datePicker.month = 1;
        datePicker.day = 1;
        datePicker.minDate = new Date(2010, 1, 1);
        datePicker.maxDate = new Date(2045, 12,12);

    }

    onDateChanged(args) {
    	let dia = args.value.getDate()
    	let mes = args.value.getMonth()+1
    	let ano = args.value.getFullYear()
    	this.fecha = dia+"-"+mes+"-"+ano;

    	this.mainService.rescataGuias(this.fecha,1)
    	.subscribe((resp)=>{
    		let g:any = resp;
    		this.guides=g;
    		//console.log("guides",this.guides)
    	});
    	//console.log(this.fecha)
        //console.log("Date value: " + args.oldValue);
        //console.log("Date New value: " + args.value);
    }

    buscarPasajero(args: EventData) {
	    let button = <Button>args.object;

	    this.repService.setRepo(this.serviceSelected);
    	this.router.navigate(["pasajero"]);
	}


}
