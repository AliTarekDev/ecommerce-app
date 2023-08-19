import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../modules/shared/shared.module';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NavLayoutComponent,
    FeaturedProductsComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, SharedModule, CarouselModule],
})
export class LayoutModule {}
