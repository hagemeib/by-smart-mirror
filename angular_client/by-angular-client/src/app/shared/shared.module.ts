import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent, FooterComponent, NavigationComponent } from './layout';

import { AdminModule } from './../admin';
import { AccountingModule } from './../accounting';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AdminModule,
    AccountingModule
  ],
  declarations: [ HeaderComponent, FooterComponent, NavigationComponent ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderComponent, FooterComponent, NavigationComponent
  ]
})
export class SharedModule {}
