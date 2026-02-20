import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponentComponent } from "../Navbar-component/Navbar-component.component";

interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
  imageUrl: string;
}

@Component({
  selector: 'app-rent-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavbarComponentComponent],
  templateUrl: './rent-component.component.html',
  styleUrls: ['./rent-component.component.css']
})
export class RentComponentComponent {
  searchTerm: string = '';
  allProperties: Property[] = [];
  filteredProperties: Property[] = [];

  constructor() {}

  ngOnInit(): void {
    // Example Rent properties
    this.allProperties = [
      { id: 1, title: 'Luxury Apartment', description: '2 bedroom apartment', price: '$1,200/month', location: 'Lagos', imageUrl: '/assets/image/image32.jpeg' },
      { id: 2, title: 'Cozy Studio', description: 'Perfect for single tenants', price: '$800/month', location: 'Abuja', imageUrl: '/assets/image/image23.jpeg' },
      { id: 3, title: 'Family House', description: '3 bedrooms with garden', price: '$1,500/month', location: 'Port Harcourt', imageUrl: '/assets/image/image28.jpeg' }
    ];

    this.filteredProperties = [...this.allProperties];
  }

  filterProperties(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProperties = this.allProperties.filter(
      p => p.title.toLowerCase().includes(term) || p.location.toLowerCase().includes(term)
    );
  }
}