import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSliderModule } from 'ngx-slider-v2';

@NgModule({
  declarations: [SectionTitleComponent, ProductItemComponent, FooterComponent],
  imports: [CommonModule, CarouselModule],
  exports: [
    TranslateModule,
    SectionTitleComponent,
    ProductItemComponent,
    FooterComponent,
    NgxSliderModule,
  ],
})
export class SharedModule {}
