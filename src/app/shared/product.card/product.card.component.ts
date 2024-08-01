import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product.card',
  standalone: true,
  imports: [],
  templateUrl: './product.card.component.html',
  styleUrl: './product.card.component.css'
})
export class ProductCardComponent {
  @Input() name="";
  @Input() imagen="";
  @Input() price:number=0;


}
