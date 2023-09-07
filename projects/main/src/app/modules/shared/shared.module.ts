import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { SocialContactComponent } from './components/product-item/social-contact/social-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/product-item/pagination/pagination.component';
import { MaterialModule } from '../../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { SuccessPartnersComponent } from './components/success-partners/success-partners.component';
@NgModule({
  declarations: [
    SectionTitleComponent,
    ProductItemComponent,
    FooterComponent,
    SocialContactComponent,
    PaginationComponent,
    SuccessPartnersComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    HttpClientModule,
    MaterialModule,
    TranslateModule,
  ],
  exports: [
    ProductItemComponent,
    SectionTitleComponent,
    FooterComponent,
    NgxSliderModule,
    SocialContactComponent,
    TranslateModule,
    PaginationComponent,
    SuccessPartnersComponent,
  ],
})
export class SharedModule {}
