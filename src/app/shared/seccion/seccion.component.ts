import { Component, Input } from '@angular/core';
import { opciones } from '../../interface/opcion.interface';
import { CarouselSmallComponent } from '../carousel-small/carousel-small.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [CarouselSmallComponent, CommonModule],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent {
@Input() icon:string="";

opcion:opciones[]=[
  {nombre:"Sony",       link:""},
  {nombre:"Canon",      link:""},
  {nombre:"Nikon",      link:""},
  {nombre:"Accesorios", link:""},
];

}
