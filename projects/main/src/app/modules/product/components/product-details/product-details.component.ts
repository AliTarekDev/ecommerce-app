import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'projects/main/services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: Product;
  constructor(
    private _route: ActivatedRoute,
    private _produtService: ProductService
  ) {
    this._route.paramMap.subscribe((params: any) => {
      this.productId = params.params.id;
    });
  }

  ngOnInit(): void {
    this.getProduct(this.productId);
  }

  getProduct(id: any) {
    this._produtService.getProduct(id).subscribe((res: any) => {
      console.log(res, 'prod');
      this.product = res.products;
    });
  }
}
