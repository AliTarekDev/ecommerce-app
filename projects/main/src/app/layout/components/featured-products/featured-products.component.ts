import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'projects/main/services/product.service';
import { map, filter, tap } from 'rxjs';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('300ms', style({ opacity: 1 })),
  //     ]),
  //     transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
  //   ]),
  // ],
})
export class FeaturedProductsComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    /*************** animation */
    AOS.init({});
    this.getFeaturedProdcuts();
  }

  products = [
    // { image_url: './assets/images/home/1.jpeg' },
    // { image_url: './assets/images/home/8.jpeg' },
    // { image_url: './assets/images/home/3.jpeg' },
    // { image_url: './assets/images/home/4.jpeg' },
    // { image_url: './assets/images/home/5.jpeg' },
    // { image_url: './assets/images/home/6.jpeg' },
    // { image_url: './assets/images/home/7.jpeg' },
  ];

  getFeaturedProdcuts() {
    this._productService
      .getProductList({})
      .pipe(map((products) => products.products))
      .subscribe((products: any) => {
        // console.log(products, 'featured');
        const newProducts = products.filter((product) => product.featured == 1);
        this.products = newProducts;
      });
  }

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
