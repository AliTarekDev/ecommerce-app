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
  switch: boolean = false;
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
    ar_type: new FormControl(''),
    en_type: new FormControl(''),
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
            this.form.controls['ar_type'].setValue(products.type.ar || '');
            this.form.controls['en_type'].setValue(products.type.en || '');
            this.form.controls['featured'].setValue(
              products.featured == 0 ? false : true
            );
            this.form.controls['category_id'].setValue(products.category.id);
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
    debugger;
    const formData = new FormData();
    const formObject = {
      ...this.form.value,
      featured: this.form.get('featured').value == true ? 1 : 0,
    };
    Object.entries(formObject).forEach(([key, value]: any) => {
      formData.append(key, value);
    });

    return formData;
  }

  onSubmit() {
    debugger;
    console.log(this.form.value);

    if (this.form.invalid) return;
    const productFormData: any = this.prepareFormData();

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
