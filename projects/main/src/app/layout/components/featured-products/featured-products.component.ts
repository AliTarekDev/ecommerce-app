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
    { image: './assets/images/styles/طاولة خدمة1.jpg' },
    { image: './assets/images/styles/طاولة 3.jpg' },
    { image: './assets/images/styles/طاولة غرفة.jpg' },
    { image: './assets/images/styles/طاولة طعام حميد.jpg' },
    { image: './assets/images/styles/طاولة طعام الزيني.jpg' },
    { image: './assets/images/styles/طاولة طعام 1.jpg' },
    { image: './assets/images/styles/غرفة زيتي 2.jpg' },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
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
        items: 4,
      },
    },
    nav: true,
    margin: 15,
    // center: true,
  };
}
