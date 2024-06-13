import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Service/client.service';
import { Empleado } from '../../interface/empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  Lista:Empleado[]=[];

  constructor(
    private cliente:ClientService
  ) {
  }

  ngOnInit(){
    
    // this.Listar();
  }

  Listar(){
    return this.cliente.Listar().subscribe((a:Empleado[])=>{this.Lista=a});
  }
  Delete(id:number){
    this.cliente.Eliminar(id).subscribe();
    return this.Listar();
  }

}
