import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { BecomeDriverSectionComponent } from './components/become-driver-section/become-driver-section.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { FindCarFormComponent } from './components/find-car-form/find-car-form.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { FeaturedVoitureListComponent } from './components/featured-voiture-list/featured-voiture-list.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { CarItemComponent } from './components/car-item/car-item.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { CommonSectionComponent } from './components/common-section/common-section.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CarlistingComponent } from './components/pages/carlisting/carlisting.component';
import { ListcarsComponent } from './listcars/listcars.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutSectionComponent,
    BecomeDriverSectionComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactComponent,
    HeroSliderComponent,
    FindCarFormComponent,
    ServicesListComponent,
    ServiceItemComponent,
    FeaturedVoitureListComponent,
    TestimonialComponent,
    CarItemComponent,
    RegisterComponent,
    ThankYouComponent,
    NotFoundComponent,
    BlogListComponent,
    CommonSectionComponent,
    LoginComponent,
    CarlistingComponent,
    ListcarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule here
    SlickCarouselModule,
    NgxSliderModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule, // Add ReactiveFormsModule here
    BrowserAnimationsModule, // Add BrowserAnimationsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add CUSTOM_ELEMENTS_SCHEMA here
})
export class AppModule {}