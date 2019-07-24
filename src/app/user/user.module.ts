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
import { BooksCardSliderComponent } from './books-card-slider/books-card-slider.component';
import { BookCardComponent } from './book-card/book-card.component';
import { CategorySliderComponent } from './category-slider/category-slider.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BookPageComponent } from './book-page/book-page.component';
<<<<<<< HEAD
import { FeaturedBookComponent } from './featured-book/featured-book.component';
import { NguiMapModule } from '@ngui/map';

@NgModule({
  declarations: [UserlandingComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BooksCardSliderComponent,
    BookCardComponent,
    CategorySliderComponent,
    CategoryPageComponent,
    BookStoreComponent,
    SearchResultsComponent,
    BookPageComponent,
    FeaturedBookComponent ],
=======

@NgModule({
  declarations: [UserlandingComponent, HomeComponent, AboutComponent, ContactComponent, HeaderComponent, FooterComponent, BooksCardSliderComponent, BookCardComponent, CategorySliderComponent, CategoryPageComponent, BookStoreComponent, SearchResultsComponent, BookPageComponent],
>>>>>>> parent of a480394... Merge branch 'dev-ashwin'
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule
  ]
})
export class UserModule { }
