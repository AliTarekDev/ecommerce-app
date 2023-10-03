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
          .subscribe((res: any) => {
            console.log(res, 'prod');

            const { products } = res;

            this.form.get('ar_name').setValue(products.name.ar);
            this.form.controls['en_name'].setValue(products?.name?.en);
            this.form.controls['ar_description'].setValue(
              products.description?.ar
            );
            this.form.controls['en_description'].setValue(
              products.description?.en
            );
            this.form.controls['price'].setValue(+products?.price || 0);
            this.form.controls['quantity'].setValue(+products?.quantity || 0);
            this.form.controls['discount'].setValue(+products?.discount || 0);
            // this.form.controls['ar_name'].setValue(products.ar_name);
            // this.form.controls['en_name'].setValue(products.en_name);
            this.form.controls['ar_brand'].setValue(products.brand.ar);
            this.form.controls['en_brand'].setValue(products.brand.en);
            this.form.controls['ar_type'].setValue(products.type.ar);
            this.form.controls['en_type'].setValue(products.type.ar);
            this.form.controls['featured'].setValue(products.featured);
            this.form.controls['category_id'].setValue(products.category_id);
            this.form.controls['image'].setValue(products.image_url);

            this.imageDisplay = products.image_url;

            this.form.controls['image'].setValidators([]);
            this.form.controls['image'].updateValueAndValidity();
          });
      }
    });
  }

  private _getCategories() {
    this._categoryService.getAllCategories().subscribe((response) => {
      this.categories = response.products.data;
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

  _updateProduct(product: any) {
    this._productService.updateProduct(product, this.productId).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Product is Updated !`,
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
          detail: 'Product is not Updated !',
        });
      }
    );
  }

  prepareFormData() {
    const formData = new FormData();
    Object.entries(this.form.value).forEach(([key, value]: any) => {
      formData.append(key, value);
    });

    return formData;
  }

  onSubmit() {
    debugger;
    console.log(this.prepareFormData());

    if (this.form.invalid) return;
    const productFormData: any = this.prepareFormData();

    // productFormData.append(
    //   'ar_name',
    //   this.form.value.ar_name ? this.form.value.ar_name : ''
    // );
    // productFormData.append(
    //   'en_name',
    //   this.form.value.en_name ? this.form.value.en_name : ''
    // );
    // productFormData.append(
    //   'ar_description',
    //   this.form.value.ar_description ? this.form.value.ar_description : ''
    // );
    // productFormData.append(
    //   'en_description',
    //   this.form.value.en_description ? this.form.value.en_description : ''
    // );
    // productFormData.append(
    //   'image',
    //   this.form.value.image ? this.form.value.image : ''
    // );
    // productFormData.append(
    //   'ar_brand',
    //   this.form.value.brand ? this.form.value.ar_brand : ''
    // );
    // productFormData.append(
    //   'en_brand',
    //   this.form.value.brand ? this.form.value.en_brand : ''
    // );
    // productFormData.append('price', JSON.stringify(this.form.value.price));
    // productFormData.append(
    //   'category_id',
    //   JSON.stringify(this.form.value.category_id)
    // );
    // productFormData.append(
    //   'quantity',
    //   JSON.stringify(this.form.value.quantity)
    // );
    // productFormData.append(
    //   'featured',
    //   JSON.stringify(this.form.value.featured)
    // );
    // productFormData.append(
    //   'discount',
    //   JSON.stringify(this.form.value.discount)
    // );
    // // productFormData.append('ar_status', JSON.stringify(this.form.value.ar_status));
    // // productFormData.append('en_status', JSON.stringify(this.form.value.en_status));
    // productFormData.append('ar_type', JSON.stringify(this.form.value.ar_type));
    // productFormData.append('en_type', JSON.stringify(this.form.value.en_type));

    if (this.editmode) {
      this._updateProduct(productFormData);
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
