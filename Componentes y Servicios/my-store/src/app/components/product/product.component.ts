import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product = {
    name: 'Producto 1',
    imagen: './assets/images/toy.jpg',
    price: 100,
  };
}
