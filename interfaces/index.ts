export interface PropertyProps {
  id: string;
  name: string;
  rating: number;
  address: {
    city: string;
    country: string;
  };
  image: string;
  description: string;
  category: string[];
  price: number;
  reviews: ReviewProps[];
  // Add these missing properties for the Card component
  offers: {
    bed: number;
    bath: number;
  };
  host: {
    name: string;
    avatar: string;
  };
}

export interface ReviewProps {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}