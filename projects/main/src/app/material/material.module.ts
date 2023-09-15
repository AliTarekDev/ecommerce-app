import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatPaginatorModule],
  exports: [
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
})
export class MaterialModule {}
