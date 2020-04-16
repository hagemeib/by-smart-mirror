import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent, ContactUsComponent, HomeComponent } from './pages';

const routes: Routes = [
  { path: '',   component: HomeComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'aboutus', component: AboutUsComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
