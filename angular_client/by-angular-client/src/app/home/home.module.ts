import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { AboutUsComponent, ContactUsComponent, HomeComponent } from './pages';

@NgModule({
  imports: [
    HomeRoutingModule
  ],
  providers: [
  ],
  declarations: [AboutUsComponent, ContactUsComponent, HomeComponent]
})

export class HomeModule { }
