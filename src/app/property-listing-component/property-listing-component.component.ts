import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PropertyService,  } from '../property.service';
import { NavbarComponentComponent } from '../Navbar-component/Navbar-component.component';

export interface Property {
details: any;
additionalImages: any;
  id: number;
  title: string;
  price: string;
  location: string;
  description: string;
  imageUrl: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NavbarComponentComponent ],
  selector: 'app-property-listing-component',
  templateUrl: './property-listing-component.component.html',
  styleUrls: ['./property-listing-component.component.css']
})
export class PropertyListingComponent implements OnInit {
  properties: Property[] = [];
  filteredProperties: Property[] = [];
  searchTerm: string = '';
   storedUser: any;
email: any;
  

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    const user = localStorage.getItem('storedUser');
    if (user) {
      this.storedUser = JSON.parse(user);
    }
    // Get the properties from the service
    this.properties = this.propertyService.getProperties();
    this.filteredProperties = this.properties;
    
  }

  filterProperties(): void {
    // Filter properties based on location search term
    const term = this.searchTerm.toLowerCase();
    this.filteredProperties = this.properties.filter(property =>
      property.location.toLowerCase().includes(term)
    );
  }
}


  
