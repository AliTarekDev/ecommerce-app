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
    { image: './assets/images/styles/مكتب.jpg' },
    { image: './assets/images/styles/مكتب غرفة.jpg' },
    { image: './assets/images/styles/مطبخ2.jpg' },
    { image: './assets/images/styles/مطبخ.jpg' },
    { image: './assets/images/styles/لوبي محمد 3.jpg' },
  ];

  products2 = [
    { image: './assets/images/styles/كنب رمادي 2.jpg' },
    { image: './assets/images/styles/كنب بيج.jpg' },
    { image: './assets/images/styles/كنب بني زاوية.jpg' },
    { image: './assets/images/styles/كنب اخضر معتمد.jpg' },
    { image: './assets/images/styles/كنب ابيض.jpg' },
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
