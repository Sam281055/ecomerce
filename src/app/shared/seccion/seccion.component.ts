import { Component, Input } from '@angular/core';
import { opciones } from '../../interface/opcion.interface';
import { CarouselSmallComponent } from '../carousel-small/carousel-small.component';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from "../card-product/card-product.component";
import { producto } from '../../interface/producto.interface';
import { CardProductVerticalComponent } from '../card-product-vertical/card-product-vertical.component';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [CarouselSmallComponent, CommonModule, 
    CardProductComponent, CardProductComponent, CardProductVerticalComponent],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent {
@Input() icon:string="";
@Input() opcion:opciones[]=[];
@Input() producto_recomendado:producto[]=[];
@Input() productos_nuevos:producto[]=[];
@Input() productos_mas_vendidos:producto[]=[];

isNewProduct=true;

setNewProduct(){
  this.isNewProduct = !this.isNewProduct;
}

}
