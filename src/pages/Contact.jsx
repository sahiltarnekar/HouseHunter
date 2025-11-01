import React, { useState } from 'react';

const formInputStyle = {
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  background: 'rgba(255, 255, 255, 0.15)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: 'white',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  borderRadius: '10px'
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
      {/* Banner Section */}
      <div
        className="contact-banner text-white text-center py-5"
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3") center/cover no-repeat fixed',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
          <p className="lead mb-0">
            We're here to help you with all your real estate needs
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container py-5">
        <div className="row g-4 mb-5">
          {/* Address */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div
                  className="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3 mx-auto"
                  style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="bi bi-geo-alt fs-4"></i>
                </div>
                <h5 className="card-title mb-3">Visit Us</h5>
                <p className="card-text text-muted">
                  123 Real Estate Avenue<br />
                  Business District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div
                  className="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3 mx-auto"
                  style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="bi bi-telephone fs-4"></i>
                </div>
                <h5 className="card-title mb-3">Call Us</h5>
                <p className="card-text text-muted">
                  <a href="tel:+1234567890" className="text-decoration-none text-muted">
                    +1 (234) 567-890
                  </a>
                  <br />Mon - Fri: 9am - 6pm<br />Sat: 10am - 4pm
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div
                  className="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3 mx-auto"
                  style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="bi bi-envelope fs-4"></i>
                </div>
                <h5 className="card-title mb-3">Email Us</h5>
                <p className="card-text text-muted">
                  <a href="mailto:info@househunter.com" className="text-decoration-none text-muted">
                    info@househunter.com
                  </a>
                  <br />Support:{' '}
                  <a href="mailto:support@househunter.com" className="text-decoration-none text-muted">
                    support@househunter.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div
          className="contact-form-section py-5"
          style={{
            background:
              'linear-gradient(135deg, rgba(44,62,80,0.95), rgba(52,152,219,0.95)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3") center/cover no-repeat fixed',
            borderRadius: '30px',
            margin: '0 15px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div
                  className="card shadow-lg border-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.18)'
                  }}
                >
                  <div className="card-body p-4 p-md-5">
                    <h3 className="text-center mb-4 text-white fw-bold">Send Us a Message</h3>
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
                            />
                            <label htmlFor="name" className="text-white-50">
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
                            />
                            <label htmlFor="email" className="text-white-50">
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
                            />
                            <label htmlFor="phone" className="text-white-50">
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
                              style={formInputStyle}
                            >
                              <option value="buying">Buying Property</option>
                              <option value="selling">Selling Property</option>
                              <option value="renting">Renting Property</option>
                              <option value="other">Other</option>
                            </select>
                            <label htmlFor="propertyInterest" className="text-white-50">
                              I'm Interested In
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
                            />
                            <label htmlFor="subject" className="text-white-50">
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
                            ></textarea>
                            <label htmlFor="message" className="text-white-50">
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
                                background: 'linear-gradient(135deg, #00b4db, #0083b0)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                padding: '15px 30px',
                                color: 'white',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                              }}
                            >
                              <i className="bi bi-send me-2"></i>
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

        {/* Map Section */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436790643!2d-74.1444870625!3d40.697149349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1635697555540!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
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
