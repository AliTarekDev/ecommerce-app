import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-success-partners',
  templateUrl: './success-partners.component.html',
  styleUrls: ['./success-partners.component.scss'],
})
export class SuccessPartnersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    smartSpeed: 1000,
    navText: [],
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
    nav: false,
    margin: 15,
    autoplay: true,
    autoplayHoverPause: false,

    // center: true,
  };
}
