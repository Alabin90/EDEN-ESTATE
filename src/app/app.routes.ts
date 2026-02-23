import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './Home-component/Home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { MysigninComponent } from './mysignin/mysignin.component';
import { MysignupComponent } from './mysignup/mysignup.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { NavbarComponentComponent } from './Navbar-component/Navbar-component.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { RentComponentComponent } from './rent-component/rent-component.component';
import { SellComponentComponent } from './sell-component/sell-component.component';
import { PropertyListingComponent } from './property-listing-component/property-listing-component.component';
import { PropertyDetailsComponent } from './property-details-component/property-details-component.component';
import { PageNotFoundComponentComponent } from './pageNot-found-component/pageNot-found-component.component';

export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponentComponent },
  { path: 'signin', component: MysigninComponent },
  { path: 'signup', component: MysignupComponent },
  { path: 'dashboard', component: MydashboardComponent },
  { path: 'nav', component: NavbarComponentComponent },
  { path: 'map', component: MapComponentComponent },
  { path: 'rent', component: RentComponentComponent },
  { path: 'sell', component: SellComponentComponent },
  { path: 'properties', component: PropertyListingComponent },
  { path: 'properties/:id', component: PropertyDetailsComponent }, // dynamic route
  { path: 'contact', component: ContactComponentComponent },
  { path: '**', component: PageNotFoundComponentComponent }, // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }