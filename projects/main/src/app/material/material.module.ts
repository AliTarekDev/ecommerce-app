import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatPaginatorModule],
  exports: [MatPaginatorModule, MatSelectModule, MatCheckboxModule],
})
export class MaterialModule {}
