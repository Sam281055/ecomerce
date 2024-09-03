import { Component, Input } from '@angular/core';
import { producto } from '../../interface/producto.interface';

@Component({
  selector: 'app-card-product-vertical',
  standalone: true,
  imports: [],
  templateUrl: './card-product-vertical.component.html',
  styleUrl: './card-product-vertical.component.css'
})
export class CardProductVerticalComponent {
  @Input() producto!:producto;

}
