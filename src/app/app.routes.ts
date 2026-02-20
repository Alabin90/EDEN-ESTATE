import { RouterModule, Routes } from '@angular/router';
import  { HomeComponentComponent } from './Home-component/Home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyDetailsComponent } from './property-details-component/property-details-component.component';
import { PropertyListingComponent } from './property-listing-component/property-listing-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { FormsModule } from '@angular/forms';
import { MysigninComponent } from './mysignin/mysignin.component';
import { MysignupComponent } from './mysignup/mysignup.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { NavbarComponentComponent } from './Navbar-component/Navbar-component.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { RentComponentComponent } from './rent-component/rent-component.component';
import { SellComponentComponent } from './sell-component/sell-component.component';
import { PageNotFoundComponentComponent } from './pageNot-found-component/pageNot-found-component.component';

export const routes: Routes = [
    {path : '',component:HomeComponentComponent},
    {path: 'home', redirectTo: '', pathMatch:'full'},
    {path : 'about',component:AboutComponentComponent},
    {path : 'signin',component:MysigninComponent},
    {path : 'signup',component:MysignupComponent},
    {path : 'dashboard',component:MydashboardComponent},
    {path : 'nav',component:NavbarComponentComponent},
    {path : 'map',component:MapComponentComponent},
    {path : 'rent',component:RentComponentComponent},
    {path : 'sell',component:SellComponentComponent},



    // {path : 'properties/:id',component:PropertyDetailsComponent},
    // {path : 'properties',component:PropertyListingComponent},
    {path : 'contact',component:ContactComponentComponent},
    { path: 'properties', component: PropertyListingComponent },
    { path: 'properties/:id', component: PropertyDetailsComponent },  // Dynamic route for property details
    { path: '', redirectTo: '/properties', pathMatch: 'full' }, 
    {path : '**',component:PageNotFoundComponentComponent},



    



];


@NgModule({
    imports: [RouterModule.forRoot(routes),FormsModule,
      
    ],
    exports: [RouterModule],
  })
  
export class AppRoutingModule { }

