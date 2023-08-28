import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ngx-slider-v2';
import { ProductService } from 'projects/main/services/product.service';
import { LanguageService } from 'projects/main/src/app/services/language.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 200,
    step: 5,
  };

  constructor(
    private _productService: ProductService,
    public _translate: LanguageService,
    private _router: Router
  ) {}

  products = [
    { image: './assets/images/styles/تيفي2.jpg' },
    { image: './assets/images/styles/تيفي ماستر.jpg' },
    { image: './assets/images/styles/تلفزيون جيزان copy.jpg' },
    { image: './assets/images/styles/تسريحة زيني.jpg' },
    { image: './assets/images/styles/تسريحة الخبر.jpg' },
    { image: './assets/images/styles/تسريحة ازرق معدلة.jpg' },
    { image: './assets/images/styles/بووفية22 copy.jpg' },
    { image: './assets/images/styles/بانر كنب.jpg' },
    { image: './assets/images/styles/صالة اخييرة.jpg' },
    { image: './assets/images/styles/سرييرر.jpg' },
    { image: './assets/images/styles/سرير فندقي.jpg' },
    { image: './assets/images/styles/ديكورات خشبية1.jpg' },
    { image: './assets/images/styles/ديكور جدراي.jpg' },
    { image: './assets/images/styles/ديكور جداري.jpg' },
    { image: './assets/images/styles/دولاب.jpg' },
  ];

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this._productService.getProductList().subscribe((res: any) => {});
  }

  goToDetailsPage(img) {
    this._router.navigate([`/en/product/product-details/${'1'}`]);
  }
}
