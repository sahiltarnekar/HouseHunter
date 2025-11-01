import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../utils/PropertyCard'
import TeamCard from '../utils/TeamCard'
import { testimonials, properties, teamMembers } from '../utils/data'


function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h1 className="display-4 fw-bold mb-4 text-uppercase">Find Your Dream Home</h1>
              <p className="lead mb-5">Discover the perfect property from our extensive collection of homes, apartments, and luxury estates.</p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="search-bar mb-5">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter location, property type, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-primary btn-lg" type="submit">
                    <i className="fa fa-search"></i> Search
                  </button>
                </div>
              </form>

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
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5 position-relative">
        <div className="contact-overlay"></div>
        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <span className="badge bg-primary px-3 py-2 rounded-pill mb-2">Contact Us</span>
              <h2 className="display-5 text-white fw-bold mb-4">Get In Touch With Us</h2>
              <p className="lead text-white-50 mb-4">Have a question about a property or need expert advice? We're here to help you find your perfect home!</p>
              <Link to="/contact" className="btn btn-primary btn-lg px-5 py-3">
                <i className="bi bi-envelope me-2"></i>Contact Us Now
              </Link>
              <div className="row mt-5 g-4 justify-content-center">
                <div className="col-md-4">
                  <div className="contact-highlight text-center">
                    <i className="bi bi-telephone display-6 text-primary mb-3"></i>
                    <h5 className="text-white">Call Us</h5>
                    <p className="text-white-50 mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-highlight text-center">
                    <i className="bi bi-envelope display-6 text-primary mb-3"></i>
                    <h5 className="text-white">Email Us</h5>
                    <p className="text-white-50 mb-0">info@househunter.com</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-highlight text-center">
                    <i className="bi bi-geo-alt display-6 text-primary mb-3"></i>
                    <h5 className="text-white">Visit Us</h5>
                    <p className="text-white-50 mb-0">123 Business Avenue, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home