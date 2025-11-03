import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../utils/PropertyCard'
import TeamCard from '../utils/TeamCard'
import { testimonials, properties, teamMembers } from '../utils/data'


function Home() {
  // No hero filters; simple call-to-action hero

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 col-xl-8 mx-auto text-center text-white px-3">
              <h1 className="fw-bold mb-3 text-uppercase fs-3 fs-md-2 fs-lg-1">Find Your Dream Home</h1>
              <p className="lead mb-4 fs-6 fs-md-5">Discover curated homes, apartments, and luxury estates in top locations.</p>
              <div className="d-flex justify-content-center mb-4">
                <Link to="/properties" className="btn btn-primary btn-lg px-4 py-2">
                  Browse Properties
                </Link>
              </div>
              {/* Quick Stats */}
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="stat-card p-4 rounded bg-white bg-opacity-10">
                    <i className="fa fa-home fa-2x mb-3 text-primary"></i>
                    <h3 className="fw-bold">1000+</h3>
                    <p className="mb-0">Properties Listed</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-card p-4 rounded bg-white bg-opacity-10">
                    <i className="fa fa-users fa-2x mb-3 text-primary"></i>
                    <h3 className="fw-bold">500+</h3>
                    <p className="mb-0">Happy Clients</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-card p-4 rounded bg-white bg-opacity-10">
                    <i className="fa fa-check-circle fa-2x mb-3 text-primary"></i>
                    <h3 className="fw-bold">100%</h3>
                    <p className="mb-0">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Properties Section */}
      <section className="featured-properties py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold">Featured Properties</h2>
              <p className="text-muted">Explore our hand-picked selection of premium properties</p>
            </div>
          
            {properties && properties.length > 0 ? (
              properties.slice(0, 3).map((p) => (
                <PropertyCard property={p} key={p.id} />
              ))
            ) : (
              <div className="col-12 text-center">
                <p className="text-muted">No properties available.</p>
              </div>
            )}
          </div>
          <div className="text-center mt-4">
            <Link to="/properties" className="btn btn-primary btn-lg">
              View All Properties
            </Link>
          </div>
        </div>
      </section>
      
       <section className="testimonial-section text-white py-5 position-relative">
      <div className="testimonial-overlay"></div>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold">We help you find the best home</h2>
            <p className="lead mt-3 text-white-50">
              Our experienced agents listen, advise, and guide you through every step — from search to keys. 
              Find a home that fits your life, not just your budget.
            </p>
            <div className="mt-4">
              <Link to="/properties" className="btn btn-primary btn-lg">
                Browse Properties
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              {testimonials.map((t) => (
                <div className="col-md-6" key={t.id}>
                  <div className="card bg-transparent border-light text-white mb-3 testimonial-card">
                    <div className="card-body">
                      <p className="mb-2">“{t.text}”</p>
                      <small className="fw-light">— {t.name}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h2 className="fw-bold">Meet Our Expert Team</h2>
        <p className="text-muted">Our professional agents are here to help you find your perfect home</p>
      </div>
      {teamMembers.slice(0, 3).map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section 
        className="contact-section py-5 position-relative"
        style={{
          background: `linear-gradient(135deg, rgba(0, 20, 60, 0.9), rgba(0, 48, 135, 0.85)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80') center/cover no-repeat fixed`,
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="contact-overlay"></div>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Header Section */}
              <div className="text-center mb-5">
                <span className="badge bg-primary bg-opacity-75 px-4 py-2 rounded-pill mb-3 d-inline-block" style={{ backdropFilter: 'blur(10px)' }}>
                  Contact Us
                </span>
                <h2 className="display-4 text-white fw-bold mb-3">Get In Touch With Us</h2>
                <p className="lead text-white mb-5" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                  Have a question about a property or need expert advice? We're here to help you find your perfect home!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <div 
                    className="contact-card h-100 text-center p-4"
                    style={{
                      background: 'rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 123, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div 
                      className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(0, 86, 179, 0.3))',
                        borderRadius: '50%',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      <i className="bi bi-telephone-fill text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <h4 className="text-white fw-bold mb-3">Call Us</h4>
                    <p className="text-white-50 mb-0" style={{ fontSize: '1.1rem' }}>+1 (555) 123-4567</p>
                    <small className="text-white-50 d-block mt-2">Mon - Fri: 9am - 6pm</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div 
                    className="contact-card h-100 text-center p-4"
                    style={{
                      background: 'rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 123, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div 
                      className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(0, 86, 179, 0.3))',
                        borderRadius: '50%',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      <i className="bi bi-envelope-fill text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <h4 className="text-white fw-bold mb-3">Email Us</h4>
                    <p className="text-white-50 mb-0" style={{ fontSize: '1.1rem' }}>info@househunter.com</p>
                    <small className="text-white-50 d-block mt-2">We reply within 24 hours</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div 
                    className="contact-card h-100 text-center p-4"
                    style={{
                      background: 'rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 123, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div 
                      className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(0, 86, 179, 0.3))',
                        borderRadius: '50%',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      <i className="bi bi-geo-alt-fill text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <h4 className="text-white fw-bold mb-3">Visit Us</h4>
                    <p className="text-white-50 mb-0" style={{ fontSize: '1.1rem' }}>123 Business Avenue</p>
                    <small className="text-white-50 d-block mt-2">New York, NY 10001</small>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link 
                  to="/contact" 
                  className="btn btn-primary btn-lg px-5 py-3 rounded-pill"
                  style={{
                    background: 'linear-gradient(135deg, #007bff, #0056b3)',
                    border: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    boxShadow: '0 10px 30px rgba(0, 123, 255, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 123, 255, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 123, 255, 0.4)';
                  }}
                >
                  <i className="bi bi-envelope me-2"></i>Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home