import React, { useState } from 'react'
import { properties } from '../utils/data'
import PropertyCard from '../utils/PropertyCard'
import SearchFilter from '../utils/SearchFilter'

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties)

  const handleFilter = (filters) => {
    let filtered = [...properties]

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(property =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    // Filter by type
    if (filters.type) {
      filtered = filtered.filter(property =>
        property.type === filters.type
      )
    }

    // Filter by price range
    if (filters.minPrice) {
      filtered = filtered.filter(property =>
        parseInt(property.price.replace(/[^0-9]/g, '')) >= parseInt(filters.minPrice)
      )
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(property =>
        parseInt(property.price.replace(/[^0-9]/g, '')) <= parseInt(filters.maxPrice)
      )
    }

    setFilteredProperties(filtered)
  }

  return (
    <>
      <div className="property-banner text-white text-center py-5 mb-5" style={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3") center/cover no-repeat',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Discover Your Perfect Home</h1>
          <p className="lead mb-0">Browse through our extensive collection of premium properties</p>
        </div>
      </div>

      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="text-center mb-4">Find Your Dream Home</h2>
            <SearchFilter onFilter={handleFilter} />
          </div>
        </div>

      <div className="row">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-12 text-center">
            <h3>No properties found matching your criteria</h3>
            <p>Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Properties