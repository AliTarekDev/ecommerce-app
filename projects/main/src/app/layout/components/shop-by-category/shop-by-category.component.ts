import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';
@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.scss'],
})
export class ShopByCategoryComponent implements OnInit {
  constructor() {}

  images = [
    { imageUrl: './assets/images/parteners/1.jpeg' },
    { imageUrl: './assets/images/parteners/2.jpeg' },
    { imageUrl: './assets/images/parteners/3.jpeg' },
    { imageUrl: './assets/images/parteners/4.jpeg' },
    { imageUrl: './assets/images/parteners/5.jpeg' },
    { imageUrl: './assets/images/parteners/6.jpeg' },
    { imageUrl: './assets/images/parteners/7.jpeg' },
    { imageUrl: './assets/images/parteners/8.jpeg' },
    { imageUrl: './assets/images/parteners/9.jpeg' },
    { imageUrl: './assets/images/parteners/10.jpeg' },
    { imageUrl: './assets/images/parteners/11.jpeg' },
    { imageUrl: './assets/images/parteners/12.jpeg' },
    { imageUrl: './assets/images/parteners/13.jpeg' },
    { imageUrl: './assets/images/parteners/14.jpeg' },
    { imageUrl: './assets/images/parteners/15.jpeg' },
    { imageUrl: './assets/images/parteners/16.jpeg' },
    { imageUrl: './assets/images/parteners/17.jpeg' },
    { imageUrl: './assets/images/parteners/18.jpeg' },
    { imageUrl: './assets/images/parteners/19.jpeg' },
    { imageUrl: './assets/images/parteners/20.jpeg' },
    { imageUrl: './assets/images/parteners/21.jpeg' },
    { imageUrl: './assets/images/parteners/22.jpeg' },
  ];
  ngOnInit(): void {
    /*************** animation */
  }

  products = [
    { image: './assets/images/home/1.jpeg' },
    { image: './assets/images/home/8.jpeg' },
    { image: './assets/images/home/3.jpeg' },
    { image: './assets/images/home/4.jpeg' },
    { image: './assets/images/home/5.jpeg' },
    { image: './assets/images/home/6.jpeg' },
    { image: './assets/images/home/7.jpeg' },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
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
