import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
//import { CarDetailsComponent } from './components/pages/car-details/car-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ContactComponent } from './components/pages/contact/contact.component';
//import { CarSearchComponent } from './components/pages/car-search/car-search.component';
import { RegisterComponent } from './components/pages/register/register.component';
//import { LoginComponent } from './components/pages/login/login.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you.component';
import { CarlistingComponent } from './components/pages/carlisting/carlisting.component';
import { ListcarsComponent } from './listcars/listcars.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'listcars', component: ListcarsComponent },

  //{ path: 'cars/:_id', component: CarDetailsComponent }, // Car details with dynamic ID
  { path: 'blogs', component: BlogComponent }, // Blog listing
  { path: 'blogs/:slug', component: BlogDetailsComponent }, // Blog details with dynamic slug
  { path: 'contact', component: ContactComponent },
  //{ path: 'voitures/search', component: CarSearchComponent }, // Car search page
  { path: 'register', component: RegisterComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '**', component: NotFoundComponent }, // Fallback route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
