import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLayoutComponent } from './layout/nav-layout/nav-layout.component';

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
