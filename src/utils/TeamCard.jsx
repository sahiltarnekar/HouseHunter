import { Link } from 'react-router-dom'

export default function TeamCard({ member }) {
  const { name, role, image, experience, properties, socials } = member;
  
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card team-card border-0 text-center h-100">
        <div className="card-img-wrapper rounded-circle mx-auto mt-4 overflow-hidden">
          <img src={image} className="team-member-img" alt={name} />
        </div>
        <div className="card-body">
          <h5 className="card-title mb-1">{name}</h5>
          <p className="text-primary mb-3">{role}</p>
          <div className="d-flex justify-content-center gap-4 mb-3">
            <div className="text-center">
              <small className="d-block text-muted">Experience</small>
              <strong>{experience}</strong>
            </div>
            <div className="text-center">
              <small className="d-block text-muted">Properties</small>
              <strong>{properties}</strong>
            </div>
          </div>
          <div className="social-links mb-3">
            {Object.entries(socials).map(([platform, link]) => (
              platform !== 'phone' && platform !== 'email' && (
                <a key={platform} href={link} className="btn btn-light btn-sm me-2">
                  <i className={`bi bi-${platform}`}></i>
                </a>
              )
            ))}
          </div>
          <Link to={`/agents/${member.id}`} className="btn btn-primary">View Profile</Link>
        </div>
      </div>
    </div>
  );
}