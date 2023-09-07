import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, ContactRoutingModule, RouterModule, HttpClientModule],
})
export class ContactModule {}
