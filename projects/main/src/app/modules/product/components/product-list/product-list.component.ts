import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Options } from 'ngx-slider-v2';
import { ProductService } from 'projects/main/services/product.service';
import { LanguageService } from 'projects/main/src/app/services/language.service';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  minValue: number = 50;
  maxValue: number = 200;
  pagination: any = 0;
  categories: Category[];
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
    private _router: Router,
    public translate: TranslateService
  ) {}

  products: any[] = [];

  ngOnInit(): void {
    this.getProductList(this.paginationOptions);
    this.getAllCategories();
  }

  getProductList(
    requestedData?: { pageSize: number; pageNumber: Number },
    categoriesFilter?: any
  ) {
    this._productService
      .getProductList(requestedData, categoriesFilter)
      .subscribe((res: any) => {
        console.log(res, 'ress');
        this.products = res.products;
        this.pagination = res.pagination;
      });
  }

  getAllCategories() {
    this._productService.getAllCategories().subscribe((res: any) => {
      this.categories = res.products.data;
    });
  }

  filterByCategory(category: Category) {
    console.log(category);
    if (category.checked) {
      category.checked = false;
    } else {
      category.checked = true;
    }

    const checkedCategoriesIds = this.categories
      .filter((cat) => cat.checked)
      .map((catId) => catId.id);

    console.log(checkedCategoriesIds, 'IDS');

    this.getProductList(this.paginationOptions, checkedCategoriesIds);
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
