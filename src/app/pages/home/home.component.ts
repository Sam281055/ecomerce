import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { SeccionComponent } from '../../shared/seccion/seccion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, SeccionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  slidePrincipal = [
      'https://via.placeholder.com/800x400?text=Slide+1',
      'https://via.placeholder.com/800x400?text=Slide+2',
      'https://via.placeholder.com/800x400?text=Slide+3'
    ];
    
  constructor(
  ) {
  }

  ngOnInit(){
    
    // this.Listar();
  }

}
