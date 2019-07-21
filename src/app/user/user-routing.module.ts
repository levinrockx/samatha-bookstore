import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BookPageComponent } from './book-page/book-page.component';
const routes: Routes = [
  {
    path: '',
    component: UserlandingComponent,
    children: [
      {
        path: '',
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'categorypage',
        component: CategoryPageComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'bookstore',
        component: BookStoreComponent,
      },
      {
        path: 'search',
        component: SearchResultsComponent,
      },
      {
        path: 'bookpage',
        component: BookPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
