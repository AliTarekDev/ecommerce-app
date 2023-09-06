import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
  animations: [
    trigger('fade', [
      transition('void=> *', [
        style({ backgroundColor: 'yellow', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 })),
      ]),
    ]),
  ],
})
export class TrendingComponent {
  products = [
    { image: './assets/images/home/11.jpeg' },
    { image: './assets/images/home/12.jpeg' },
    { image: './assets/images/home/13.jpeg' },
    { image: './assets/images/home/14.jpeg' },
    { image: './assets/images/home/15.jpeg' },
  ];

  products2 = [
    { image: './assets/images/home/16.jpeg' },
    { image: './assets/images/home/17.jpeg' },
    { image: './assets/images/home/18.jpeg' },
    { image: './assets/images/home/19.jpeg' },
    { image: './assets/images/home/20.jpeg' },
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
