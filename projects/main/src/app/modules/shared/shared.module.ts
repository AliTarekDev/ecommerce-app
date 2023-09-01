import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { SocialContactComponent } from './components/product-item/social-contact/social-contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PaginationComponent } from './components/product-item/pagination/pagination.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    SectionTitleComponent,
    ProductItemComponent,
    FooterComponent,
    SocialContactComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MaterialModule,
  ],
  exports: [
    TranslateModule,
    SectionTitleComponent,
    ProductItemComponent,
    FooterComponent,
    NgxSliderModule,
    SocialContactComponent,
    TranslateModule,
    PaginationComponent,
  ],
})
export class SharedModule {}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
