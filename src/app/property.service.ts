import { Injectable } from "@angular/core";

export interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
  imageUrl: string; // Main image
  details: string;
  additionalImages: string[]; // Array of additional images for the property
}

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      title: 'Luxury Villa',
      description: 'A beautiful villa in the hills',
      price: '$500,000',
      location: 'New York3',
      imageUrl: '/assets/image/pexels-photo-7018828.jpeg', // Main image URL
      
      details: 'This luxurious villa features 5 bedrooms, a swimming pool, and a panoramic view.',
      additionalImages: [
        '/assets/image/pexels-photo-8134847.jpeg',
        '/assets/image/pexels-photo-6039193.jpeg'
      ] // Additional images
    },
    {
      id: 2,
      title: 'Cozy Apartment',
      description: 'A cozy apartment in downtown',
      price: '$200,000',
      location: 'Los Angeles',
      imageUrl: '/assets/image/pexels-photo-6039193.jpeg', // Main image URL
      details: 'This charming apartment has 2 bedrooms and modern amenities.',
      additionalImages: [
        '/assets/image/pexels-photo-7031602.jpeg',
        '/assets/image/pexels-photo-7018828.jpeg'
      
      ] // Additional images 
    },
    {
      id: 1,
      title: 'Luxury Villa',
      description: 'A beautiful villa in the hills',
      price: '$500,000',
      location: 'New York',
      imageUrl: '/assets/image/pexels-photo-7018828.jpeg',
      details: 'This luxurious villa features 5 bedrooms, a swimming pool, and a panoramic view.',
      additionalImages: [
        '/assets/image/pexels-photo-8134847.jpeg',
        '/assets/image/pexels-photo-6039193.jpeg'
      ]
    },
    {
      id: 2,
      title: 'Modern Apartment',
      description: 'A stylish apartment in the city center',
      price: '$300,000',
      location: 'Los Angeles',
      imageUrl: '/assets/image/pexels-photo-1643383.jpeg',
      details: 'A contemporary apartment with 2 bedrooms, a balcony, and access to amenities.',
      additionalImages: [
        '/assets/image/pexels-photo-1643381.jpeg',
        '/assets/image/pexels-photo-1643384.jpeg'
      ]
    },
    {
      id: 3,
      title: 'Cozy Cottage',
      description: 'A charming cottage in the countryside',
      price: '$250,000',
      location: 'Vermont',
      imageUrl: '/assets/image/image34.jpeg',
      details: 'This cozy cottage includes 3 bedrooms, a fireplace, and a large garden.',
      additionalImages: [
        '/assets/image/pexels-photo-417058.jpeg',
        '/assets/image/pexels-photo-417059.jpeg'
      ]
    },
    {
      id: 4,
      title: 'Beachfront Bungalow',
      description: 'A beautiful bungalow by the beach',
      price: '$450,000',
      location: 'Miami',
      imageUrl: '/assets/image/image32.jpeg',
      details: 'This bungalow features 4 bedrooms, a private beach, and stunning ocean views.',
      additionalImages: [
        '/assets/image/pexels-photo-1454804.jpeg',
        '/assets/image/pexels-photo-1454805.jpeg'
      ]
    },
    {
      id: 5,
      title: 'Mountain Retreat',
      description: 'A tranquil retreat in the mountains',
      price: '$600,000',
      location: 'Denver',
      imageUrl: '/assets/image/image18.jpeg',
      details: 'This retreat offers 6 bedrooms, a hot tub, and breathtaking mountain views.',
      additionalImages: [
        '/assets/image/image02.jpeg',
        '/assets/image/image20.jpeg',

      ]
    }

  ];

  // Get all properties
  getProperties(): Property[] {
    return this.properties;
  }

  // Get a single property by ID
  getPropertyById(id: number): Property | undefined {
    return this.properties.find(property => property.id === id);
  }
}