import { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, FILTERS } from '@/constants/index';
import Card from '@/components/common/Card';
import Pill from '@/components/common/Pill';

export default function Home() {
  // Initialize state with the sample data
  const [displayList, setDisplayList] = useState(PROPERTYLISTINGSAMPLE);
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Filter function
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    
    if (filter === 'All') {
      setDisplayList(PROPERTYLISTINGSAMPLE);
    } else {
      const filtered = PROPERTYLISTINGSAMPLE.filter(property => 
        property.category.some(cat => 
          cat.toLowerCase().includes(filter.toLowerCase())
        ) ||
        property.name.toLowerCase().includes(filter.toLowerCase()) ||
        property.address.city.toLowerCase().includes(filter.toLowerCase())
      );
      setDisplayList(filtered);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Stay</h1>
        <p className="text-gray-600">Discover amazing properties for your next vacation</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {FILTERS.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isActive={selectedFilter === filter}
            onClick={() => handleFilterClick(filter)}
          />
        ))}
      </div>

      {/* Property Cards with safety check */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayList && displayList.length > 0 ? (
          displayList.map((property) => (
            <Card key={property.id} data={property} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">No properties found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Showing {displayList?.length || 0} of {PROPERTYLISTINGSAMPLE.length} properties
        </p>
      </div>
    </div>
  );
}