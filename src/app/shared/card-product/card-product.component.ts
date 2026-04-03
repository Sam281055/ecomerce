import { Component, Input } from '@angular/core';
import { producto } from '../../interface/producto.interface';

@Component({
    selector: 'app-card-product',
    imports: [],
    templateUrl: './card-product.component.html',
    styleUrl: './card-product.component.css'
})
export class CardProductComponent {
    @Input() producto!:producto;
}
