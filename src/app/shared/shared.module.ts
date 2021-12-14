import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageModelComponent } from './components/page-model/page-model.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    PageModelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    PageModelComponent
  ]
})
export class SharedModule { }

