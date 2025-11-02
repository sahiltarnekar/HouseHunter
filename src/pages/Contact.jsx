import React, { useState } from 'react';

const formInputStyle = {
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)',
  background: 'rgba(255, 255, 255, 0.2)',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  color: 'white',
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  transition: 'all 0.3s ease',
  borderRadius: '12px'
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyInterest: 'buying'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      propertyInterest: 'buying'
    });
  };

  return (
    <>
      {/* Enhanced Banner Section */}
      <div
        className="contact-banner text-white text-center position-relative"
        style={{
          background:
            'linear-gradient(135deg, rgba(0, 20, 60, 0.85), rgba(0, 48, 135, 0.80)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80") center/cover no-repeat fixed',
          minHeight: '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
            zIndex: 1
          }}
        ></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <span className="badge bg-primary bg-opacity-75 px-4 py-2 rounded-pill mb-3 d-inline-block" style={{ backdropFilter: 'blur(10px)' }}>
            Get In Touch
          </span>
          <h1 className="display-3 fw-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>Contact Us</h1>
          <p className="lead mb-0" style={{ fontSize: '1.3rem', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>
            We're here to help you with all your real estate needs
          </p>
        </div>
      </div>

      {/* Enhanced Contact Information */}
      <div className="container py-5">
        <div className="row g-4 mb-5">
          {/* Address */}
          <div className="col-md-4">
            <div 
              className="card h-100 border-0 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 123, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
            >
              <div className="card-body text-center p-5">
                <div
                  className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: '90px',
                    height: '90px',
                    background: 'linear-gradient(135deg, #007bff, #0056b3)',
                    borderRadius: '50%',
                    boxShadow: '0 10px 25px rgba(0, 123, 255, 0.3)'
                  }}
                >
                  <i className="bi bi-geo-alt-fill text-white" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h4 className="card-title mb-3 fw-bold" style={{ color: '#2c3e50' }}>Visit Us</h4>
                <p className="card-text mb-0" style={{ color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  123 Real Estate Avenue<br />
                  Business District<br />
                  <strong style={{ color: '#007bff' }}>New York, NY 10001</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-4">
            <div 
              className="card h-100 border-0 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 123, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
            >
              <div className="card-body text-center p-5">
                <div
                  className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: '90px',
                    height: '90px',
                    background: 'linear-gradient(135deg, #007bff, #0056b3)',
                    borderRadius: '50%',
                    boxShadow: '0 10px 25px rgba(0, 123, 255, 0.3)'
                  }}
                >
                  <i className="bi bi-telephone-fill text-white" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h4 className="card-title mb-3 fw-bold" style={{ color: '#2c3e50' }}>Call Us</h4>
                <p className="card-text mb-0" style={{ color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <a href="tel:+1234567890" className="text-decoration-none fw-bold" style={{ color: '#007bff', fontSize: '1.1rem' }}>
                    +1 (234) 567-890
                  </a>
                  <br />
                  <small className="text-muted">Mon - Fri: 9am - 6pm</small><br />
                  <small className="text-muted">Sat: 10am - 4pm</small>
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-4">
            <div 
              className="card h-100 border-0 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 123, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
            >
              <div className="card-body text-center p-5">
                <div
                  className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: '90px',
                    height: '90px',
                    background: 'linear-gradient(135deg, #007bff, #0056b3)',
                    borderRadius: '50%',
                    boxShadow: '0 10px 25px rgba(0, 123, 255, 0.3)'
                  }}
                >
                  <i className="bi bi-envelope-fill text-white" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h4 className="card-title mb-3 fw-bold" style={{ color: '#2c3e50' }}>Email Us</h4>
                <p className="card-text mb-0" style={{ color: '#6c757d', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <a href="mailto:info@househunter.com" className="text-decoration-none fw-bold d-block mb-2" style={{ color: '#007bff' }}>
                    info@househunter.com
                  </a>
                  <small className="text-muted">Support:{' '}</small>
                  <a href="mailto:support@househunter.com" className="text-decoration-none" style={{ color: '#007bff' }}>
                    support@househunter.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Form Section */}
        <div
          className="contact-form-section py-5 position-relative"
          style={{
            background:
              'linear-gradient(135deg, rgba(0, 20, 60, 0.92), rgba(0, 48, 135, 0.88)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80") center/cover no-repeat fixed',
            borderRadius: '30px',
            margin: '0 15px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            overflow: 'hidden'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              opacity: 0.2,
              zIndex: 1
            }}
          ></div>
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div
                  className="card shadow-lg border-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(25px)',
                    WebkitBackdropFilter: 'blur(25px)',
                    borderRadius: '25px',
                    border: '2px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                  }}
                >
                  <div className="card-body p-4 p-md-5">
                    <div className="text-center mb-5">
                      <span className="badge bg-primary bg-opacity-75 px-4 py-2 rounded-pill mb-3 d-inline-block" style={{ backdropFilter: 'blur(10px)' }}>
                        Send Message
                      </span>
                      <h3 className="text-white fw-bold mb-3" style={{ fontSize: '2.2rem' }}>Get In Touch</h3>
                      <p className="text-white-50 mb-0">Fill out the form below and we'll get back to you as soon as possible</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        {/* Input fields */}
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control bg-opacity-10 text-white border-0"
                              id="name"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              style={formInputStyle}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.25)';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                              }}
                            />
                            <label htmlFor="name" className="text-white" style={{ opacity: 0.9 }}>
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="email"
                              className="form-control bg-opacity-10 text-white border-0"
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              style={formInputStyle}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.25)';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                              }}
                            />
                            <label htmlFor="email" className="text-white" style={{ opacity: 0.9 }}>
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="tel"
                              className="form-control bg-opacity-10 text-white border-0"
                              id="phone"
                              name="phone"
                              placeholder="Your Phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              style={formInputStyle}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.25)';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                              }}
                            />
                            <label htmlFor="phone" className="text-white" style={{ opacity: 0.9 }}>
                              Your Phone
                            </label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-floating">
                            <select
                              className="form-select bg-opacity-10 text-white border-0"
                              id="propertyInterest"
                              name="propertyInterest"
                              value={formData.propertyInterest}
                              onChange={handleChange}
                              required
                              style={{ ...formInputStyle, color: 'white' }}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.25)';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                              }}
                            >
                              <option value="buying" style={{ background: '#2c3e50', color: 'white' }}>Buying Property</option>
                              <option value="selling" style={{ background: '#2c3e50', color: 'white' }}>Selling Property</option>
                              <option value="renting" style={{ background: '#2c3e50', color: 'white' }}>Renting Property</option>
                              <option value="other" style={{ background: '#2c3e50', color: 'white' }}>Other</option>
                            </select>
                            <label htmlFor="propertyInterest" className="text-white" style={{ opacity: 0.9 }}>
                              
                            </label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control bg-opacity-10 text-white border-0"
                              id="subject"
                              name="subject"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              style={formInputStyle}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.25)';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                              }}
                            />
                            <label htmlFor="subject" className="text-white" style={{ opacity: 0.9 }}>
                              Subject
                            </label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control bg-opacity-10 text-white border-0"
                              id="message"
                              name="message"
                              placeholder="Your Message"
                              style={{ height: '150px', ...formInputStyle }}
                              value={formData.message}
                              onChange={handleChange}
                              required
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.25)';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                              }}
                            ></textarea>
                            <label htmlFor="message" className="text-white" style={{ opacity: 0.9 }}>
                              Your Message
                            </label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              type="submit"
                              className="btn btn-lg w-100"
                              style={{
                                background: 'linear-gradient(135deg, #007bff, #0056b3)',
                                border: 'none',
                                padding: '18px 40px',
                                color: 'white',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: '700',
                                transition: 'all 0.3s ease',
                                borderRadius: '15px',
                                boxShadow: '0 10px 30px rgba(0, 123, 255, 0.4)',
                                fontSize: '1.1rem'
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
                              <i className="bi bi-send-fill me-2"></i>
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Section */}
        <div className="row mt-5 mb-4">
          <div className="col-12">
            <div className="text-center mb-4">
              <h3 className="fw-bold mb-2" style={{ color: '#2c3e50', fontSize: '2rem' }}>Find Us On Map</h3>
              <p className="text-muted">Visit our office location</p>
            </div>
            <div 
              className="card border-0 shadow-lg"
              style={{
                borderRadius: '25px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.15)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="card-body p-0">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436790643!2d-74.1444870625!3d40.697149349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1635697555540!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
