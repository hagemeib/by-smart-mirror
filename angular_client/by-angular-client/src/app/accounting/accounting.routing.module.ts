import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountingComponent, CategoryListComponent } from './pages';

const routes: Routes = [
    {   path: 'accounting', component: AccountingComponent,
        children : [
            { path: 'categories', component: CategoryListComponent},
            // { path: 'user', component: UserComponent},
            // { path: 'rights', component: RightsComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
