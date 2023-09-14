import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  imageDisplay: any = '';
  categories: any;
  editmode = false;
  productId: any;
  constructor(
    private _categoryService: CategoriesService,
    private _productService: ProductService,
    private messageService: MessageService,
    private location: Location,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  form: FormGroup = new FormGroup({
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    discount: new FormControl('', [Validators.required]),
    ar_name: new FormControl('', [Validators.required]),
    en_name: new FormControl('', [Validators.required]),
    ar_brand: new FormControl('', [Validators.required]),
    en_brand: new FormControl('', [Validators.required]),
    ar_type: new FormControl('', [Validators.required]),
    en_type: new FormControl('', [Validators.required]),
    // ar_status: new FormControl('', [Validators.required]),
    // en_status: new FormControl('', [Validators.required]),
    featured: new FormControl(false, [Validators.required]),
    ar_description: new FormControl('', [Validators.required]),
    en_description: new FormControl('', [Validators.required]),
    category_id: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this._checkUrl();
    this._getCategories();
  }

  private _checkUrl() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.editmode = true;
        this.productId = params.get('id');

        this._productService
          .getProduct(this.productId)
          .subscribe((product: any) => {
            this.form.controls['ar_name'].setValue(product.ar_name);
            this.form.controls['en_name'].setValue(product.en_name);
            this.form.controls['ar_description'].setValue(
              product.ar_description
            );
            this.form.controls['en_description'].setValue(
              product.en_description
            );
            this.form.controls['price'].setValue(product.price);
            this.form.controls['quantity'].setValue(product.quantity);
            this.form.controls['discount'].setValue(product.discount);
            this.form.controls['ar_name'].setValue(product.ar_name);
            this.form.controls['en_name'].setValue(product.en_name);
            this.form.controls['ar_brand'].setValue(product.ar_brand);
            this.form.controls['en_brand'].setValue(product.en_brand);
            this.form.controls['ar_type'].setValue(product.ar_type);
            this.form.controls['en_type'].setValue(product.en_type);
            this.form.controls['featured'].setValue(product.featured);
            this.form.controls['category_id'].setValue(product.category_id);
            this.imageDisplay = product.image;
            this.form.controls['image'].setValidators([]);
            this.form.controls['image'].updateValueAndValidity();
          });
      }
    });
  }

  private _getCategories() {
    this._categoryService.getAllCategories().subscribe((response) => {
      this.categories = response.products.data;

      console.log(this.categories, 'CAt');
    });
  }

  private _addProduct(productData: FormData) {
    this._productService.addProduct(productData).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Product is created !`,
        });

        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Product is not created !',
        });
      }
    );
  }

  _updateProduct() {}

  onSubmit() {
    console.log(this.form.value);

    const productFormData = new FormData();

    productFormData.append(
      'ar_name',
      this.form.value.ar_name ? this.form.value.ar_name : ''
    );
    productFormData.append(
      'en_name',
      this.form.value.en_name ? this.form.value.en_name : ''
    );
    productFormData.append(
      'ar_description',
      this.form.value.ar_description ? this.form.value.ar_description : ''
    );
    productFormData.append(
      'en_description',
      this.form.value.en_description ? this.form.value.en_description : ''
    );
    productFormData.append(
      'image',
      this.form.value.image ? this.form.value.image : ''
    );
    productFormData.append(
      'ar_brand',
      this.form.value.brand ? this.form.value.ar_brand : ''
    );
    productFormData.append(
      'en_brand',
      this.form.value.brand ? this.form.value.en_brand : ''
    );
    productFormData.append('price', JSON.stringify(this.form.value.price));
    productFormData.append(
      'category_id',
      this.form.value.category ? this.form.value.category_id : ''
    );
    productFormData.append(
      'quantity',
      JSON.stringify(this.form.value.quantity)
    );
    productFormData.append(
      'featured',
      JSON.stringify(this.form.value.featured)
    );
    productFormData.append(
      'discount',
      JSON.stringify(this.form.value.discount)
    );
    // productFormData.append('ar_status', JSON.stringify(this.form.value.ar_status));
    // productFormData.append('en_status', JSON.stringify(this.form.value.en_status));
    productFormData.append('ar_type', JSON.stringify(this.form.value.ar_type));
    productFormData.append('en_type', JSON.stringify(this.form.value.en_type));

    if (this.editmode) {
      // this._updateProduct(productFormData)
    } else {
      this._addProduct(productFormData);
    }
  }

  onImageUpload(e: any) {
    const file = e.target.files[0];

    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image')?.updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result ? fileReader.result : '';
      };
      fileReader.readAsDataURL(file);
    }
  }

  goBack() {
    this._router.navigate(['/products']);
  }
  get productForm() {
    return this.form.controls;
  }
}
