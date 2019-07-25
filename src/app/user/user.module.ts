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
<<<<<<< HEAD
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

        BookPageComponent],

    imports: [
        CommonModule,
        UserRoutingModule,
        FontAwesomeModule
    ]
=======
<<<<<<< HEAD
=======
>>>>>>> parent of a55c9aa... revert
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
<<<<<<< HEAD
=======

@NgModule({
  declarations: [UserlandingComponent, HomeComponent, AboutComponent, ContactComponent, HeaderComponent, FooterComponent, BooksCardSliderComponent, BookCardComponent, CategorySliderComponent, CategoryPageComponent, BookStoreComponent, SearchResultsComponent, BookPageComponent],
>>>>>>> parent of 5346bd0... page not fount  card removed from category slider
=======

@NgModule({
  declarations: [UserlandingComponent, HomeComponent, AboutComponent, ContactComponent, HeaderComponent, FooterComponent, BooksCardSliderComponent, BookCardComponent, CategorySliderComponent, CategoryPageComponent, BookStoreComponent, SearchResultsComponent, BookPageComponent],
>>>>>>> parent of 5346bd0... page not fount  card removed from category slider
<<<<<<< HEAD
=======
=======
    BookPageComponent],

>>>>>>> parent of b60d710... Merge branch 'dev-vysakh'
>>>>>>> parent of 0921188... a
=======
>>>>>>> parent of a55c9aa... revert
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyD8eyWbk1ah4lArbrPYmj6gZS6YfphOZjw' })
  ]
>>>>>>> parent of d70599f... a
})
export class UserModule { }
