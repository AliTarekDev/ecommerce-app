import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/en/home',
    pathMatch: 'full',
  },
  {
    path: ':lang/home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static forChild():
    | any[]
    | import('@angular/core').Type<any>
    | import('@angular/core').ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
