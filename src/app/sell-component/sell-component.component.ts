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
  selector: 'app-sell-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavbarComponentComponent],
  templateUrl: './sell-component.component.html',
  styleUrls: ['./sell-component.component.css']
})
export class SellComponentComponent {
  searchTerm: string = '';
  allProperties: Property[] = [];
  filteredProperties: Property[] = [];

  constructor() {}

  ngOnInit(): void {
    // Example Sell properties
    this.allProperties = [
      { id: 1, title: 'Luxury Villa', description: 'Beautiful villa in city center', price: '$350,000', location: 'Lagos', imageUrl: '/assets/image/image32.jpeg' },
      { id: 2, title: 'Cozy Apartment', description: '2 bedroom apartment near market', price: '$120,000', location: 'Abuja', imageUrl: '/assets/image/image23.jpeg' },
      { id: 3, title: 'Modern House', description: '3 bedroom modern home', price: '$250,000', location: 'Port Harcourt', imageUrl: '/assets/image/image28.jpeg' }
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