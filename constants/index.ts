import { PropertyProps } from '@/interfaces';

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: '1',
    name: 'Modern Beach House',
    rating: 4.8,
    address: {
      city: 'Miami',
      country: 'USA'
    },
   image: "/assets/image5.png",
    description: 'Beautiful modern beach house with ocean view. Perfect for family vacations with all amenities included.',
    category: ['WiFi', 'Pool', 'Air Conditioning', 'Kitchen', 'Parking', 'Beach View'],
    price: 150,
    offers: {
      bed: 3,
      bath: 2
    },
    host: {
      name: 'Sarah Johnson',
      avatar: '/assets/person.png',
    },
    reviews: [
      {
        id: '1',
        name: 'John Doe',
        avatar: '/assets/person.png',
        rating: 5,
        comment: 'Amazing place! Would definitely stay again.',
        date: '2024-01-15'
      },
      {
        id: '2',
        name: 'Jane Smith',
        avatar: '/assets/person.png',
        rating: 4,
        comment: 'Great location and very clean. The host was very responsive.',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '2', 
    name: 'Mountain Cabin',
    rating: 4.9,
    address: {
      city: 'Aspen',
      country: 'USA'
    },
    image: "/assets/image6.png",
    description: 'Cozy mountain cabin with fireplace and stunning mountain views.',
    category: ['Fireplace', 'Mountain View', 'Hot Tub', 'Kitchen', 'Hiking Trails'],
    price: 120,
    offers: {
      bed: 2,
      bath: 1
    },
    host: {
      name: 'Mike Wilson',
       avatar: '/assets/person.png',
    },
    reviews: [
      {
        id: '3',
        name: 'Mike Johnson',
        avatar: '/assets/person.png',
        rating: 5,
        comment: 'Perfect getaway! The views were breathtaking.',
        date: '2024-01-08'
      }
    ]
  }
];

export const FILTERS = [
  "All",
  "Beach",
  "Mountain", 
  "City",
  "Countryside",
  "Luxury",
  "Budget",
  "Family",
  "Romantic",
  "Pet Friendly"
];