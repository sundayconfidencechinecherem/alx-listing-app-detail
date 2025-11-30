import Image from 'next/image';
import Link from 'next/link';
import { PropertyProps } from '@/interfaces';

interface CardProps {
  data: PropertyProps;
}

const Card: React.FC<CardProps> = ({ data }) => {
  // Safe defaults
  const offers = data.offers || { bed: 0, bath: 0 };
  const host = data.host || { name: 'Host', avatar: '/default-avatar.jpg' };

  return (
    <Link href={`/property/${encodeURIComponent(data.name)}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title and Rating */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg truncate">{data.name}</h3>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐</span>
              <span>{data.rating}</span>
            </div>
          </div>

          {/* Location */}
          <p className="text-gray-600 text-sm mb-3">
            {data.address.city}, {data.address.country}
          </p>

          {/* Offers - Beds & Baths */}
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <span>🛏️</span>
              <span>{offers.bed} bed{offers.bed !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🚿</span>
              <span>{offers.bath} bath{offers.bath !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Price and Host */}
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-lg">${data.price}</span>
              <span className="text-gray-600 text-sm">/night</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src={host.avatar}
                  alt={host.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;