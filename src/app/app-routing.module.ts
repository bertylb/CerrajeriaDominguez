import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'products',
    loadChildren:() => import(`./modules/products/products.module`).then(m => m.ProductsModule)
  },
  { path: 'services',
    loadChildren: () => import('./modules/servicios/servicios.module').then(m => m.ServiciosModule) },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
