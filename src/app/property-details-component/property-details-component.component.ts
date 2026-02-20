import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PropertyListingComponent, Property } from '../property-listing-component/property-listing-component.component';
import { PropertyService, } from '../property.service';
import { NavbarComponentComponent } from '../Navbar-component/Navbar-component.component';

@Component({
  standalone: true,
  imports: [RouterLink, CommonModule, NavbarComponentComponent],
  selector: 'app-property-details-component',
  templateUrl: './property-details-component.component.html',
  styleUrls: ['./property-details-component.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  property: Property | undefined;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) {}

  ngOnInit() {
    const propertyId = +this.route.snapshot.params['id']; // Get the ID from the URL
    this.property = this.propertyService.getPropertyById(propertyId);
  }
}
  