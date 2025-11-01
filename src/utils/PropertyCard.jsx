import React from 'react'
import { Link } from 'react-router-dom'

const PropertyCard = ({ property }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <div className="position-relative">
          <img src={property.image} className="card-img-top" alt={property.title} style={{height: '250px', objectFit: 'cover'}} />
          <span className="badge bg-primary position-absolute top-0 end-0 m-3">
            {property.status}
          </span>
          <span className="badge bg-secondary position-absolute top-0 start-0 m-3">
            {property.type}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{property.title}</h5>
          <p className="card-text mb-2">
            <i className="fas fa-map-marker-alt me-2"></i> {property.location}
          </p>
          <p className="card-text fs-4 fw-bold text-primary mb-2">
            {property.price}
          </p>
          <p className="card-text text-muted small mb-3">{property.details}</p>
          <div className="border-top pt-3">
            <div className="row g-2 mb-3">
              {property.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="col-6">
                  <small className="text-muted">
                    <i className="fas fa-check-circle me-1 text-success"></i>
                    {feature}
                  </small>
                </div>
              ))}
            </div>
          </div>
          <Link to={`/property/${property.id}`} className="btn btn-primary w-100">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard