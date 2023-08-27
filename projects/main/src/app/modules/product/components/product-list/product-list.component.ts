import { Component, OnInit } from '@angular/core';
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
    public _translate: LanguageService
  ) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this._productService.getProductList().subscribe((res: any) => {});
  }
}
