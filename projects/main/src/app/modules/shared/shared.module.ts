import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [SectionTitleComponent],
  imports: [CommonModule, CarouselModule],
  exports: [TranslateModule, SectionTitleComponent],
})
export class SharedModule {}
