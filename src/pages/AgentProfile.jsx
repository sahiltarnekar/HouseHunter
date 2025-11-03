import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { teamMembers, properties } from '../utils/data'

function AgentProfile() {
  const { id } = useParams()
  const numericId = Number(id)
  const agent = teamMembers.find((a) => Number(a.id) === numericId)

  if (!agent) {
    return (
      <div className="container py-5 mt-5 pt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-3">Agent not found</h2>
            <p className="text-muted mb-4">The agent you are looking for does not exist.</p>
            <Link to="/agents" className="btn btn-primary">Back to Agents</Link>
          </div>
        </div>
      </div>
    )
  }

  const handledCount = agent.properties || '—'
  const sampleListings = properties.slice(0, 3)

  return (
    <>
      {/* Banner */}
      <section
        className="position-relative"
        style={{
          backgroundImage: `url('${agent.image}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '300px'
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.55)' }}></div>
        <div className="container mt-5 pt-4 position-relative">
          <div className="row">
            <div className="col-12 text-white py-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2">
                  <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/agents" className="text-decoration-none text-white-50">Agents</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Profile</li>
                </ol>
              </nav>
              <h1 className="display-6 mb-1">{agent.name}</h1>
              <p className="mb-0 text-white-50">{agent.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Left: profile */}
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img src={agent.image} alt={agent.name} className="img-fluid h-100 w-100" style={{ objectFit: 'cover', minHeight: '230px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="h4 mb-1">{agent.name}</h2>
                    <p className="text-muted mb-3">{agent.role}</p>
                    <div className="d-flex flex-wrap gap-3 mb-3">
                      <span className="badge bg-light text-dark">Experience: {agent.experience}</span>
                      <span className="badge bg-light text-dark">Transactions: {handledCount}</span>
                    </div>
                    <p className="mb-0 text-muted">Dedicated real estate professional focused on exceptional client outcomes. {agent.name.split(' ')[0]} brings {agent.experience} of experience helping clients buy and sell across diverse markets.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="mb-3">About {agent.name.split(' ')[0]}</h5>
                <p className="mb-0 text-muted">{agent.name.split(' ')[0]} specializes in {agent.role.toLowerCase()} and provides market insights, pricing strategy, and skilled negotiation. Available for in-person and virtual consultations.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="mb-3">Featured Listings</h5>
                <div className="row g-3">
                  {sampleListings.map((p) => (
                    <div key={p.id} className="col-md-4">
                      <div className="card h-100">
                        <img src={p.image} alt={p.title} className="card-img-top" style={{ height: '120px', objectFit: 'cover' }} />
                        <div className="card-body p-2">
                          <h6 className="mb-1" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</h6>
                          <small className="text-muted d-block mb-1"><i className="fas fa-map-marker-alt me-1"></i>{p.location}</small>
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="text-primary fw-semibold">{p.price}</span>
                            <Link to={`/properties/${p.id}`} className="btn btn-sm btn-outline-primary">View</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact and socials */}
          <div className="col-lg-4">
            <div className="position-sticky" style={{ top: '110px' }}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="mb-3">Contact {agent.name.split(' ')[0]}</h5>
                  <div className="d-grid gap-2">
                    <a href={`tel:${agent.socials.phone}`} className="btn btn-outline-primary"><i className="bi bi-telephone me-2"></i>Call</a>
                    <a href={`mailto:${agent.socials.email}`} className="btn btn-outline-primary"><i className="bi bi-envelope me-2"></i>Email</a>
                    <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h6 className="mb-3">Social</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {Object.entries(agent.socials).map(([platform, link]) => {
                      if (platform === 'phone' || platform === 'email') return null
                      const iconMap = { facebook: 'facebook', twitter: 'twitter-x', instagram: 'instagram', linkedin: 'linkedin' }
                      return (
                        <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">
                          <i className={`bi bi-${iconMap[platform] || platform}`}></i> {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgentProfile

