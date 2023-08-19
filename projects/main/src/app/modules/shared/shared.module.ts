import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [SectionTitleComponent, ProductItemComponent],
  imports: [CommonModule, CarouselModule],
  exports: [TranslateModule, SectionTitleComponent, ProductItemComponent],
})
export class SharedModule {}
