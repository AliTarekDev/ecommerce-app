import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent {
  products = [
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
    { image: './assets/images/product/10.jpg' },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayHoverPause: false,
    navText: [
      // '<i class="fa-solid fa-chevron-left"></i>',
      // '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 1,
      },
    },
    // nav: true,
    margin: 20,
    // center: true,
  };
}
