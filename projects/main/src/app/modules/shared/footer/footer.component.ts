import { Component, OnInit } from '@angular/core';
import { ProductService } from 'projects/main/services/product.service';
import { Category } from '../../product/interfaces/category';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private _productService: ProductService,
    public translate: TranslateService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this._productService.getAllCategories().subscribe((cat: any) => {
      this.categories = cat.products.data;
    });
  }
}
