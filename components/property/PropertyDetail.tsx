import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import Image from "next/image";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      {/* Property Header */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">⭐ {property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="col-span-2 w-full h-96 relative rounded-lg overflow-hidden">
          <Image 
            src={property.image} 
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* You can add more images here if needed */}
      </div>

      {/* Main Content Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Info */}
        <div className="lg:col-span-2">
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
            <ul className="flex flex-wrap gap-3">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-100 px-4 py-2 rounded-lg border">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews Section */}
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;