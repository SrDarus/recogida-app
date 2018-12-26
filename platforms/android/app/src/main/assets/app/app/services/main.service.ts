import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()



export class MainService {
	urlBase:string="https://ws-situr.asinco.cl/api/"
    //urlBase:string='http://localhost:38831/api/'
	controlador:string;
    constructor(private http:HttpClient){}


    public rescataGuias(fecha, id) {
	    this.controlador = 'OpeGuias/obtenerGuia?fecha=' + fecha + '&idSegUsuario=' + id;
        return this.http.get(this.urlBase+this.controlador)
    }

    public rescataServicios(idOpeGuia, fecha, id){
        this.controlador = 'OpeServicios/obtenerServicio?idOpeGuia=' + idOpeGuia + '&fecha=' + fecha + '&idSegUsuario=' + id;
        return this.http.get(this.urlBase+this.controlador)
        
    }

    public rescataPasajeros(idOpeServicio, id){
        this.controlador = 'OpeServicioDetalles/obtenerPasajero?idOpeServicio=' + idOpeServicio + '&idSegUsuario=' + id;
        //console.log("url",this.urlBase+this.controlador)
        return this.http.get(this.urlBase+this.controlador)
    }

    //Sp_WebEncuesta_GrabaStatus_Recogida(_idOpeServicioDetalle, _esRecogida, _fechaHoraRecogida, _recogidaObs, id) {
    //    let idSegUsuario: number = id;
//
    //    //this.ruta = 'http://localhost:38831/api/OpeServicioDetalles/grabarEstatus?idOpeServicioDetalle=' + _idOpeServicioDetalle + '&esRecogida=' + _esRecogida + '&fechaHoraRecogida=' + _fechaHoraRecogida + '&recogidaObs=' + _recogidaObs + '&id=' + idSegUsuario;
    //    this.ruta = 'https://ws-situr.asinco.cl/api/OpeServicioDetalles/grabarEstatus?idOpeServicioDetalle=' + _idOpeServicioDetalle + '&esRecogida=' + _esRecogida + '&fechaHoraRecogida=' + _fechaHoraRecogida + '&recogidaObs=' + _recogidaObs + '&id=' + idSegUsuario;
    //   
    //    let model = {
    //        idOpeServicioDetalle: _idOpeServicioDetalle,
    //        esRecogida: _esRecogida,
    //        fechaHoraRecogida: _fechaHoraRecogida,
    //        recogidaObs: _recogidaObs
    //    };
    //    return this.http.post(this.ruta, model)
    //        .subscribe(res => res.json());
    //}
//
    //Sp_WebEncuesta_Logeo(user, pass): Promise<SegUsuario[]> {
//
    //    //this.ruta = 'http://localhost:38831/api/SegUsuarios/obtenerUsuario?user=' + user + '&pass=' + pass;
    //    this.ruta = 'https://ws-situr.asinco.cl/api/SegUsuarios/obtenerUsuario?user=' + user + '&pass=' + pass;
//
//
    //    return this.http.get(this.ruta)
    //        .toPromise()
    //        .then(
    //        (response) => {
    //            let respuesta: any = response;
    //            let usuario: SegUsuario[] = JSON.parse(respuesta._body);
    //            return usuario;
    //        }
    //        ).catch()
    //}

}