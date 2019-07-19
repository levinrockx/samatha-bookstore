import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [UserlandingComponent, HomeComponent, AboutComponent, ContactComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule
  ]
})
export class UserModule { }
