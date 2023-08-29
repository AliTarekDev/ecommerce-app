import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule, MaterialModule],
})
export class ProductModule {}
