import { Component, Input } from '@angular/core';
import { opciones } from '../../interface/opcion.interface';
import { CarouselSmallComponent } from '../carousel-small/carousel-small.component';
import { CommonModule } from '@angular/common';
import { producto } from '../../interface/producto.interface';
import { ProductCardComponent } from '../product.card/product.card.component';
import { RecomendCardComponent } from '../recomend.card/recomend.card.component';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [CarouselSmallComponent, CommonModule, ProductCardComponent, RecomendCardComponent],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent {
  @Input() titulo = "";
  @Input() icon: string = "";
  @Input() slide: string[] = [];
  @Input() opcion: opciones[] = [];
  @Input() productos: producto[] = [];
  @Input() productosNuevos: producto[] = [];
  @Input() productosRecomendados: producto[] = [];

  prdNew = true;

  Cambio(x: boolean, valor: boolean) {
    x = !x;
    console.log(x);
    return x;
  }
  currentPrdNew = 0;

  prevSlide() {
    this.currentPrdNew = (this.currentPrdNew === 0) ? this.productosNuevos.length - 1 : this.currentPrdNew - 1;
  }

  nextSlide() {
    this.currentPrdNew = (this.currentPrdNew === this.productosNuevos.length - 1) ? 0 : this.currentPrdNew + 1;
  }
}
