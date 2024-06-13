import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../interface/empleado';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  Url:string="http://localhost:5156/api/Empleado";
  constructor(
    private http:HttpClient 
  ) { }

  Listar(){
    return this.http.get<Empleado[]>(this.Url);
  }

  Obtener(id:number){
    const url = this.Url+`/${id}`;
    return this.http.get(url);
  }

  Crear(empleado:Empleado){
    return this.http.post(this.Url,empleado);
  }

  Editar(empleado:Empleado){
    return this.http.put(this.Url,empleado);
  }

  Eliminar(id:number){
    const url = this.Url + "/" + id;
    return this.http.delete(url);
  }

}
