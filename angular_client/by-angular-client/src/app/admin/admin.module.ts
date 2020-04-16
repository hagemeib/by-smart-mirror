import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { UserComponent, RightsComponent, DashboardComponent, AdminComponent } from './pages';

@NgModule({
  declarations: [
    UserComponent,
    RightsComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }
