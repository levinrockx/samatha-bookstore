import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {
    path: '',
    component: UserlandingComponent,
    children: [
      {
        path:'home',
        component: HomeComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
