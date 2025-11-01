import React, { useState } from 'react'

const SearchFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onFilter(filters)
  }

  const propertyTypes = [
    'House',
    'Apartment',
    'Villa',
    'Penthouse',
    'Cabin',
    'Townhouse',
    'Cottage',
    'Loft'
  ]

  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={filters.location}
                onChange={handleChange}
                placeholder="Enter location"
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Property Type</label>
              <select
                className="form-select"
                name="type"
                value={filters.type}
                onChange={handleChange}
              >
                <option value="">All Types</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Min Price</label>
              <select
                className="form-select"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
              >
                <option value="">No Min</option>
                <option value="300000">$300,000</option>
                <option value="500000">$500,000</option>
                <option value="700000">$700,000</option>
                <option value="1000000">$1,000,000</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Max Price</label>
              <select
                className="form-select"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
              >
                <option value="">No Max</option>
                <option value="500000">$500,000</option>
                <option value="700000">$700,000</option>
                <option value="1000000">$1,000,000</option>
                <option value="1500000">$1,500,000</option>
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Search Properties
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchFilter