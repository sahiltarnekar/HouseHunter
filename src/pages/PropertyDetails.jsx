import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { properties } from '../utils/data'

function PropertyDetails() {
  const { id } = useParams()
  const numericId = Number(id)
  const property = properties.find((p) => Number(p.id) === numericId)

  if (!property) {
    return (
      <div className="container py-5 mt-5 pt-4">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h2 className="mb-3">Property not found</h2>
            <p className="text-muted mb-4">The property you are looking for does not exist.</p>
            <Link to="/properties" className="btn btn-primary">Back to Properties</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Top Banner */}
      <section
        className="position-relative"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${property.image}) center/cover no-repeat`,
          minHeight: '300px'
        }}
      >
        <div className="container mt-5 pt-4">
          <div className="row">
            <div className="col-12 text-white py-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2">
                  <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/properties" className="text-decoration-none text-white-50">Properties</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Details</li>
                </ol>
              </nav>
              <h1 className="display-6 mb-2">{property.title}</h1>
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-primary">{property.status}</span>
                <span className="badge bg-secondary">{property.type}</span>
                <small className="text-white-50"><i className="fas fa-map-marker-alt me-2"></i>{property.location}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Left column */}
          <div className="col-lg-8">
            {/* Gallery */}
            <div className="card overflow-hidden mb-4">
              <img src={property.image} alt={property.title} className="w-100" style={{ objectFit: 'cover', maxHeight: '520px' }} />
            </div>

            {/* Description */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="mb-3">About this property</h5>
                <p className="text-muted mb-0">{property.description}</p>
              </div>
            </div>

            {/* Features */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="mb-3">Key Features</h5>
                <div className="d-flex flex-wrap gap-2">
                  {(property.features || []).map((feature, idx) => (
                    <span key={idx} className="badge bg-light text-dark px-3 py-2">
                      <i className="fas fa-check-circle text-success me-2"></i>{feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="mb-3">Details</h5>
                <div className="row g-3">
                  <div className="col-6 col-md-4">
                    <small className="text-muted d-block">Price</small>
                    <span className="fw-semibold">{property.price}</span>
                  </div>
                  <div className="col-6 col-md-4">
                    <small className="text-muted d-block">Type</small>
                    <span className="fw-semibold">{property.type}</span>
                  </div>
                  <div className="col-6 col-md-4">
                    <small className="text-muted d-block">Status</small>
                    <span className="fw-semibold">{property.status}</span>
                  </div>
                  <div className="col-12">
                    <small className="text-muted d-block">Specs</small>
                    <span className="fw-semibold">{property.details}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - sticky summary */}
          <div className="col-lg-4">
            <div className="position-sticky" style={{ top: '110px' }}>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="h4 mb-0">{property.price}</h3>
                    <span className="text-muted">{property.details}</span>
                  </div>
                  <div className="d-grid mt-3">
                    <Link to="/contact" className="btn btn-primary">Contact Agent</Link>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h6 className="mb-3">Location</h6>
                  <p className="mb-0 text-muted"><i className="fas fa-map-marker-alt me-2"></i>{property.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        <div className="row mt-5">
          <div className="col-12 d-flex align-items-center justify-content-between mb-3">
            <h5 className="mb-0">Related Properties</h5>
            <Link to="/properties" className="btn btn-outline-primary btn-sm">View all</Link>
          </div>
          {properties
            .filter((p) => p.id !== property.id && (p.type === property.type || p.location.split(',')[0] === property.location.split(',')[0]))
            .slice(0, 3)
            .map((p) => (
              <div className="col-md-4 mb-4" key={p.id}>
                <div className="card h-100">
                  <div className="position-relative">
                    <img src={p.image} alt={p.title} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                    <span className="badge bg-primary position-absolute top-0 end-0 m-2">{p.status}</span>
                  </div>
                  <div className="card-body">
                    <h6 className="mb-1">{p.title}</h6>
                    <small className="text-muted d-block mb-2"><i className="fas fa-map-marker-alt me-1"></i>{p.location}</small>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="fw-semibold text-primary">{p.price}</span>
                      <Link to={`/properties/${p.id}`} className="btn btn-sm btn-outline-primary">View</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default PropertyDetails
