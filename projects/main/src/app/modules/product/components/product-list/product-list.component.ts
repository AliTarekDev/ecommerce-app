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
  pagination: any = 0;
  paginationOptions = {
    pageSize: 15,
    pageNumber: 0,
  };
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

  products: any[] = [];

  ngOnInit(): void {
    this.getProductList(this.paginationOptions);
  }

  getProductList(requestedData: { pageSize: number; pageNumber: Number }) {
    this._productService.getProductList(requestedData).subscribe((res: any) => {
      console.log(res, 'ress');
      this.products = res.products;
      this.pagination = res.pagination;
    });
  }

  goToDetailsPage(img) {
    this._router.navigate([`/en/product/product-details/${'1'}`]);
  }

  /*** Pagination */
  pageChange(e: any) {
    console.log(e, 'Event');
    const { pageSize, pageIndex } = e;

    this.paginationOptions.pageNumber = +pageIndex;
    this.paginationOptions.pageSize = +pageSize;

    this.getProductList(this.paginationOptions);
  }
}
