import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  constructor(
    private _productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productService.getProductList().subscribe((res: any) => {
      this.products = res.products;
      console.log(res);
    });
  }

  deleteProduct(id: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      header: 'Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._productService.deleteProduct(id).subscribe(
          () => {
            this.getAllProducts();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: `Product  is Deleted!`,
            });
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Product is not Deleted !',
            });
          }
        );
      },
    });
  }

  updateProduct(id: any) {
    this._router.navigateByUrl(`products/form/${id}`);
  }
}
