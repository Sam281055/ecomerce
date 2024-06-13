import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  Form = new FormGroup({
    nombreCompleto: new FormControl(''),
    correo: new FormControl(''),
    sueldo: new FormControl(0),
    fechaContrato: new FormControl('')}
  );

  OnSubmit(){
    console.log(this.Form.value);
    
  }

}
