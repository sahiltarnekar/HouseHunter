import { teamMembers } from '../utils/data'

function Aboutus() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero position-relative py-5 mt-5 pt-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">About HouseHunter</span>
              <h1 className="display-4 fw-bold mb-4">We Help You Find Your Dream Home</h1>
              <p className="lead mb-4">
                Since 2010, HouseHunter has been at the forefront of transforming the real estate industry,
                making the home-buying process simpler, faster, and more enjoyable for everyone.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-6 col-md-3">
                  <div className="stat-card text-center p-3">
                    <h3 className="fw-bold text-primary mb-2">15+</h3>
                    <p className="mb-0">Years Experience</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-card text-center p-3">
                    <h3 className="fw-bold text-primary mb-2">2000+</h3>
                    <p className="mb-0">Properties Sold</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-card text-center p-3">
                    <h3 className="fw-bold text-primary mb-2">500+</h3>
                    <p className="mb-0">Happy Clients</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-card text-center p-3">
                    <h3 className="fw-bold text-primary mb-2">98%</h3>
                    <p className="mb-0">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="about-image-grid">
                <div className="row g-3">
                  <div className="col-6">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3" alt="Property 1" className="img-fluid rounded-3 shadow" />
                  </div>
                  <div className="col-6">
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3" alt="Property 2" className="img-fluid rounded-3 shadow" />
                  </div>
                  <div className="col-12">
                    <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3" alt="Property 3" className="img-fluid rounded-3 shadow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 text-center">
              <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">Our Values</span>
              <h2 className="fw-bold mb-4">What Sets Us Apart</h2>
              <p className="text-muted">
                Our commitment to excellence and customer satisfaction drives everything we do.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="value-card text-center p-4 rounded-3 bg-white shadow-sm h-100">
                <div className="value-img-wrapper rounded-circle mx-auto mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3" alt="Trust & Integrity" className="value-img" />
                </div>
                <h5 className="fw-bold mb-3">Trust & Integrity</h5>
                <p className="text-muted mb-0">
                  We build lasting relationships based on transparency and honesty.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="value-card text-center p-4 rounded-3 bg-white shadow-sm h-100">
                <div className="value-img-wrapper rounded-circle mx-auto mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3" alt="Market Expertise" className="value-img" />
                </div>
                <h5 className="fw-bold mb-3">Market Expertise</h5>
                <p className="text-muted mb-0">
                  Deep understanding of local markets and industry trends.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="value-card text-center p-4 rounded-3 bg-white shadow-sm h-100">
                <div className="value-img-wrapper rounded-circle mx-auto mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3" alt="Client-First Approach" className="value-img" />
                </div>
                <h5 className="fw-bold mb-3">Client-First Approach</h5>
                <p className="text-muted mb-0">
                  Your goals and satisfaction are our top priority.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="value-card text-center p-4 rounded-3 bg-white shadow-sm h-100">
                <div className="value-img-wrapper rounded-circle mx-auto mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3" alt="Innovation" className="value-img" />
                </div>
                <h5 className="fw-bold mb-3">Innovation</h5>
                <p className="text-muted mb-0">
                  Leveraging technology to improve your experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 text-center">
              <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">Our Team</span>
              <h2 className="fw-bold mb-4">Meet Our Expert Agents</h2>
              <p className="text-muted">
                Our dedicated team of professionals is here to help you find your perfect home.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-6 col-lg-4">
                <div className="team-card text-center p-4 rounded-3 bg-white shadow-sm">
                  <div className="card-img-wrapper mx-auto rounded-circle overflow-hidden mb-4">
                    <img src={member.image} alt={member.name} className="team-member-img" />
                  </div>
                  <h4 className="fw-bold mb-1">{member.name}</h4>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted small mb-3">
                    {member.experience} Experience • {member.properties}
                  </p>
                  <div className="social-links">
                    <a href={member.socials.linkedin} className="btn btn-light btn-sm me-2">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={member.socials.twitter} className="btn btn-light btn-sm me-2">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href={member.socials.instagram} className="btn btn-light btn-sm">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="timeline-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 text-center">
              <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">Our Journey</span>
              <h2 className="fw-bold mb-4">Company History</h2>
              <p className="text-muted">
                From humble beginnings to industry leadership, our journey has been remarkable.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-content shadow-sm">
                    <h5 className="fw-bold">2010</h5>
                    <p className="mb-0">Founded with a vision to transform real estate</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content shadow-sm">
                    <h5 className="fw-bold">2015</h5>
                    <p className="mb-0">Expanded to multiple cities across the country</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content shadow-sm">
                    <h5 className="fw-bold">2018</h5>
                    <p className="mb-0">Launched innovative property search platform</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content shadow-sm">
                    <h5 className="fw-bold">2020</h5>
                    <p className="mb-0">Introduced virtual home tours</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content shadow-sm">
                    <h5 className="fw-bold">2023</h5>
                    <p className="mb-0">Achieved industry leadership in customer satisfaction</p>
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

export default Aboutus
