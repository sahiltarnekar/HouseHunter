import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { teamMembers } from '../utils/data'
import defaultAgentImage from '../assets/images/p1.jpg'


function Agents() {
  const [searchTerm, setSearchTerm] = useState('')
  const [specialization, setSpecialization] = useState('')

  const filteredAgents = teamMembers.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialization = specialization === '' || agent.role.toLowerCase().includes(specialization.toLowerCase())
    return matchesSearch && matchesSpecialization
  })

  const specializations = [...new Set(teamMembers.map(agent => agent.role.split(' ')[0]))]

  return (
    <div>
      {/* Banner Section */}
      <div className="agent-banner text-white text-center py-5 mb-5" style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3") center/cover no-repeat',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Meet Our Expert Agents</h1>
          <p className="lead mb-0">Our team of dedicated professionals is here to help you find your perfect home</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Search agents by name or role..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select form-select-lg"
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                    >
                      <option value="">All Specializations</option>
                      {specializations.map((spec, index) => (
                        <option key={index} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="container mb-5">
        <div className="row">
          {filteredAgents.length > 0 ? (
            filteredAgents.map(agent => (
              <div key={agent.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card agent-card h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <img
                      src={agent.image || defaultAgentImage}
                      className="card-img-top"
                      alt={agent.name}
                      style={{height: '300px', objectFit: 'cover'}}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=Real+Estate+Agent';
                      }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                         style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'}}>
                      <div className="d-flex justify-content-between align-items-end">
                        <div>
                          <h5 className="mb-1">{agent.name}</h5>
                          <p className="mb-0 small">{agent.role}</p>
                        </div>
                        <div className="text-end">
                          <p className="mb-0 small">{agent.experience}</p>
                          <p className="mb-0 small">{agent.properties}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <i className="bi bi-telephone me-2"></i>
                        <a href={`tel:${agent.socials.phone}`} className="text-decoration-none">Call Agent</a>
                      </div>
                      <div>
                        <i className="bi bi-envelope me-2"></i>
                        <a href={`mailto:${agent.socials.email}`} className="text-decoration-none">Email</a>
                      </div>
                    </div>
                    <div className="social-links d-flex justify-content-center gap-2">
                      {Object.entries(agent.socials).map(([platform, link]) => {
                        if (platform === 'phone' || platform === 'email') return null;
                        const iconMap = {
                          facebook: 'facebook',
                          twitter: 'twitter-x',
                          instagram: 'instagram',
                          linkedin: 'linkedin'
                        };
                        return (
                          <a key={platform} href={link} className="btn btn-light btn-sm" target="_blank" rel="noopener noreferrer">
                            <i className={`bi bi-${iconMap[platform] || platform}`}></i>
                          </a>
                        );
                      })}
                    </div>
                    <Link to={`/agents/${agent.id}`} className="btn btn-primary w-100 mt-3">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <h3>No agents found</h3>
              <p>Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-muted mb-5">Get answers to common questions about working with our agents</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="agentFAQ">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    How do I choose the right agent for my needs?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#agentFAQ">
                  <div className="accordion-body">
                    Consider the agent's specialization, experience in your desired area, and past client reviews. Our search filters can help you find agents based on their expertise. You can also schedule a consultation to discuss your specific needs.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    What services do your agents provide?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#agentFAQ">
                  <div className="accordion-body">
                    Our agents provide comprehensive real estate services including property search, market analysis, negotiation, paperwork handling, and guidance throughout the buying or selling process. They also offer virtual tours and digital documentation services.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    How can I schedule a meeting with an agent?
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#agentFAQ">
                  <div className="accordion-body">
                    You can contact agents directly through their profile page using phone, email, or social media. Alternatively, you can use our contact form, and we'll match you with the most suitable agent based on your requirements.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    What areas do your agents serve?
                  </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#agentFAQ">
                  <div className="accordion-body">
                    Our agents serve various locations across major metropolitan areas and surrounding suburbs. Each agent has specific area expertise, which you can find in their profiles. We ensure local market knowledge for better service.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                    What makes HouseHunter agents different?
                  </button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#agentFAQ">
                  <div className="accordion-body">
                    Our agents undergo rigorous training, maintain high professional standards, and leverage cutting-edge technology. They're backed by our company's resources and committed to providing personalized service with integrity and expertise.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h2 className="mb-4">Want to Join Our Team?</h2>
              <p className="lead mb-4">
                We're always looking for talented real estate professionals to join our growing team.
                If you're passionate about real estate and helping people find their dream homes, we'd love to hear from you.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agents