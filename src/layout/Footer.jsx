import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-3">HouseHunter</h5>
            <p className="small">
              Your trusted partner in finding the perfect home. We make house hunting simple, efficient, and enjoyable.
            </p>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-white-50">Home</Link></li>
              <li><Link to="/properties" className="text-decoration-none text-white-50">Properties</Link></li>
              <li><Link to="/agents" className="text-decoration-none text-white-50">Agents</Link></li>
              <li><Link to="/aboutus" className="text-decoration-none text-white-50">About Us</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-white-50">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-white-50">Property Listing</a></li>
              <li><a href="#" className="text-decoration-none text-white-50">Property Management</a></li>
              <li><a href="#" className="text-decoration-none text-white-50">Real Estate Consulting</a></li>
              <li><a href="#" className="text-decoration-none text-white-50">Market Analysis</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-3">Contact</h5>
            <ul className="list-unstyled text-white-50">
              <li>📍 123 Real Estate Ave</li>
              <li>📱 (555) 123-4567</li>
              <li>✉️ info@househunter.com</li>
            </ul>
            <div className="mt-3">
              <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12">
            <hr className="bg-white" />
            <p className="text-center text-white-50 small mb-0">
              &copy; {new Date().getFullYear()} HouseHunter. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer