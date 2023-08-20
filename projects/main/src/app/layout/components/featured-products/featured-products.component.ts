import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent {
  constructor() {}
  products = [
    { image: './assets/images/featured/2.jpg' },
    { image: './assets/images/featured/2.jpg' },
    { image: './assets/images/featured/2.jpg' },
    { image: './assets/images/featured/2.jpg' },
    { image: './assets/images/featured/2.jpg' },
    { image: './assets/images/featured/2.jpg' },
    { image: './assets/images/featured/2.jpg' },
    { image: './assets/images/featured/2.jpg' },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
    margin: 20,
    // center: true,
  };
}
