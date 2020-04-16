import { AccountingCategoryService } from 'src/app/accounting/services';
import { NgModule } from '@angular/core';
import { AccountingRoutingModule } from './accounting.routing.module';
import { AccountingComponent, CategoryListComponent } from './pages';

@NgModule({
  declarations: [
    CategoryListComponent,
    AccountingComponent
  ],
  imports: [
    AccountingRoutingModule
  ]
})
export class AccountingModule { }
