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
