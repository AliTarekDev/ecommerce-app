import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLayoutComponent } from './layout/nav-layout/nav-layout.component';
import { AuthGuard } from 'projects/main/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'en/home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: NavLayoutComponent,
    children: [
      {
        path: ':lang/home',
        loadChildren: () =>
          import('./layout/layout.module').then((m) => m.LayoutModule),
      },

      {
        path: ':lang/product',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: ':lang/contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: ':lang/about',
        loadChildren: () =>
          import('./modules/about/about.module').then((m) => m.AboutModule),
      },
    ],
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
