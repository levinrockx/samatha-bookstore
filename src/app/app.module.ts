import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NguiMapModule } from '@ngui/map';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HttplayerService } from './HttpService/httplayer.service';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=MY_GOOGLE_API_KEY' }),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttplayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
