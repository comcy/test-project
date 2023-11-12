import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './views/detail/detail.component';
import { OverviewComponent } from './views/overview/overview.component';
import { ImpressumComponent } from './views/impressum/impressum.component';
import { HomeComponent } from './views/components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
    children: [
      // Not used, but here for reference
      {
        path: ':id/detail',
        component: DetailComponent,
      },
    ],
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    // This is loading a standalone component `FourZeroFourComponent`
    path: 'somewhatever',
    loadComponent: () =>
      import(
        './shared/components/four-zero-four/four-zero-four.component'
      ).then((mod) => mod.FourZeroFourComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    // This is loading a standalone component `FourZeroFourComponent`
    path: '**',
    loadComponent: () =>
      import(
        './shared/components/four-zero-four/four-zero-four.component'
      ).then((mod) => mod.FourZeroFourComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
