import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  catId: string = '';
  isCategoryPage: boolean = false;
  constructor(
    private _productService: ProductService,
    public _translate: LanguageService,
    private _router: Router,
    public translate: TranslateService,
    private _route: ActivatedRoute
  ) {
    this._route.paramMap.subscribe((params: any) => {
      console.log(params, 'Params');
      this.catId = params?.id;
    });
  }

  products: any[] = [];

  ngOnInit(): void {
    this.getProductList(this.paginationOptions);
    this.getAllCategories();
    this.checkCatInUrl();
  }

  checkCatInUrl() {
    this._route.params.subscribe((params) => {
      debugger;
      params?.['id']
        ? this.getProductList(null, [params?.['id']], '', '')
        : this.getProductList();
      params?.['id']
        ? (this.isCategoryPage = true)
        : (this.isCategoryPage = false);
    });
  }

  getProductList(
    requestedData?: { pageSize: number; pageNumber: Number },
    categoriesFilter?: any,
    filterOption?: string,
    filterByName?: string
  ) {
    this._productService
      .getProductList(
        requestedData,
        categoriesFilter,
        filterOption,
        filterByName
      )
      .subscribe((res: any) => {
        console.log(res, 'ress');
        this.products = res.products || res.data;
        this.pagination = res.pagination;
      });
  }

  getAllCategories() {
    this._productService.getAllCategories().subscribe((res: any) => {
      this.categories = res.products.data;
    });
  }

  /******************** Filter By Category */
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

    this.getProductList(this.paginationOptions, checkedCategoriesIds);
  }

  /*** Pagination */
  pageChange(e: any) {
    console.log(e, 'Event');
    const { pageSize, pageIndex } = e;

    if (pageIndex == 0) {
      this.paginationOptions.pageNumber = +pageIndex;
    } else {
      this.paginationOptions.pageNumber = +pageIndex + 1;
    }
    this.paginationOptions.pageSize = +pageSize;

    this.getProductList(this.paginationOptions);
  }

  /****** Search By Price *******/

  filterByPrice(priceType: string) {
    console.log(priceType, 'Val');

    /***** to remove checked category ****/
    this.categories.map((cat) => (cat.checked = false));

    const filterOption = priceType;

    this.getProductList(null, [], filterOption);
  }

  /******* Filter By Name ****/

  filterByName(event: any) {}

  sendSearchName(name: string) {
    /***** to remove checked category ****/
    this.categories.map((cat) => (cat.checked = false));

    this.getProductList(null, [], null, name);
  }
}
