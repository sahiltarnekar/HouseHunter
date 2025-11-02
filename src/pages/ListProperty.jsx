import { useState, useEffect } from 'react';

const ListProperty = () => {
  const [formData, setFormData] = useState({
    // Basic Information
    title: '',
    description: '',
    propertyType: '',
    price: '',
    
    // Property Details
    bedrooms: '',
    bathrooms: '',
    area: '',
    yearBuilt: '',
    
    // Location
    address: '',
    city: '',
    state: '',
    zipCode: '',
    neighborhood: '',
    
    // Amenities
    amenities: {
      parking: false,
      pool: false,
      gym: false,
      garden: false,
      security: false,
      wifi: false,
      airConditioning: false,
      heating: false,
      fireplace: false,
      balcony: false
    },
    
    // Contact Information
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    
    // Images
    images: []
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedProperties, setSavedProperties] = useState([]);
  const [showSavedProperties, setShowSavedProperties] = useState(false);

  // Load saved properties from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('houseHunterProperties');
    if (saved) {
      try {
        setSavedProperties(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading saved properties:', error);
      }
    }
  }, []);

  // Save properties to localStorage whenever it changes
  useEffect(() => {
    if (savedProperties.length > 0) {
      localStorage.setItem('houseHunterProperties', JSON.stringify(savedProperties));
    }
  }, [savedProperties]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('amenities.')) {
      const amenityName = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        amenities: {
          ...prev.amenities,
          [amenityName]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls].slice(0, 10) // Limit to 10 images
    }));
  };

  // Remove image
  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // Form submission with localStorage
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create property object with unique ID
      const propertyData = {
        id: Date.now().toString(),
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'pending'
      };

      // Save to localStorage
      const existingProperties = JSON.parse(localStorage.getItem('houseHunterProperties') || '[]');
      const updatedProperties = [propertyData, ...existingProperties];
      localStorage.setItem('houseHunterProperties', JSON.stringify(updatedProperties));
      setSavedProperties(updatedProperties);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Property listed successfully! Your property has been saved.');
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        propertyType: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        yearBuilt: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        neighborhood: '',
        amenities: {
          parking: false,
          pool: false,
          gym: false,
          garden: false,
          security: false,
          wifi: false,
          airConditioning: false,
          heating: false,
          fireplace: false,
          balcony: false
        },
        ownerName: '',
        ownerEmail: '',
        ownerPhone: '',
        images: []
      });
      
      setCurrentStep(1);
      setShowSavedProperties(true);
      
    } catch (error) {
      alert('Error submitting property. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete property
  const deleteProperty = (id) => {
    const updated = savedProperties.filter(prop => prop.id !== id);
    setSavedProperties(updated);
    localStorage.setItem('houseHunterProperties', JSON.stringify(updated));
  };

  // Navigation between steps
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Get selected amenities count
  const selectedAmenitiesCount = Object.values(formData.amenities).filter(Boolean).length;

  return (
    <div 
      className="list-property-page"
      style={{
        background: `linear-gradient(135deg, rgba(0, 20, 60, 0.95), rgba(0, 48, 135, 0.92)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80') center/cover no-repeat fixed`,
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '50px'
      }}
    >
      {/* Pattern Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.2,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Enhanced Header */}
            <div className="text-center mb-5">
              <span className="badge bg-primary bg-opacity-75 px-4 py-2 rounded-pill mb-3 d-inline-block" style={{ backdropFilter: 'blur(10px)' }}>
                List Property
              </span>
              <h1 className="display-3 text-white fw-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>
                List Your Property
              </h1>
              <p className="lead text-white mb-4" style={{ fontSize: '1.2rem', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>
                Reach thousands of potential buyers and renters. Fill out the form below to get started.
              </p>
              {savedProperties.length > 0 && (
                <button
                  className="btn btn-light btn-lg mt-3"
                  onClick={() => setShowSavedProperties(!showSavedProperties)}
                >
                  <i className="bi bi-collection me-2"></i>
                  {showSavedProperties ? 'Hide' : 'Show'} Saved Properties ({savedProperties.length})
                </button>
              )}
            </div>

            {/* Enhanced Progress Bar */}
            <div 
              className="card mb-4 border-0 shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.25)'
              }}
            >
              <div className="card-body p-4">
                <div className="progress mb-3" style={{ height: '12px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)' }}>
                  <div 
                    className="progress-bar bg-primary" 
                    style={{ 
                      width: `${(currentStep / 5) * 100}%`,
                      transition: 'width 0.5s ease',
                      borderRadius: '10px'
                    }}
                  ></div>
                </div>
                <div className="row text-center">
                  {['Basic Info', 'Details', 'Location', 'Amenities', 'Contact'].map((step, index) => (
                    <div key={step} className="col">
                      <div className={`d-flex flex-column align-items-center ${currentStep > index + 1 ? 'text-success' : currentStep === index + 1 ? 'text-white fw-bold' : 'text-white-50'}`}>
                        <div 
                          className={`rounded-circle text-white d-flex align-items-center justify-content-center mb-2 shadow`}
                          style={{ 
                            width: '40px', 
                            height: '40px',
                            background: currentStep > index + 1 
                              ? 'linear-gradient(135deg, #28a745, #20c997)' 
                              : currentStep === index + 1 
                              ? 'linear-gradient(135deg, #007bff, #0056b3)' 
                              : 'rgba(255,255,255,0.3)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {currentStep > index + 1 ? '✓' : index + 1}
                        </div>
                        <small style={{ fontSize: '0.85rem' }}>{step}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Form Card */}
            <div 
              className="card shadow-lg border-0 mb-5"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(25px)',
                borderRadius: '25px',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
              }}
            >
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <div className="step-content">
                      <div className="text-center mb-4">
                        <h4 className="text-white fw-bold mb-2" style={{ fontSize: '2rem' }}>Basic Information</h4>
                        <p className="text-white-50">Tell us about your property</p>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="title" className="form-label text-white fw-bold">Property Title *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., Beautiful 3-Bedroom Apartment"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <label htmlFor="propertyType" className="form-label text-white fw-bold">Property Type *</label>
                          <select
                            className="form-select"
                            id="propertyType"
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleInputChange}
                            required
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          >
                            <option value="">Select Type</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                            <option value="Townhouse">Townhouse</option>
                            <option value="Penthouse">Penthouse</option>
                            <option value="Condo">Condo</option>
                            <option value="Single Family">Single Family Home</option>
                            <option value="Commercial">Commercial</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" className="form-label text-white fw-bold">Property Description *</label>
                        <textarea
                          className="form-control"
                          id="description"
                          name="description"
                          rows="4"
                          value={formData.description}
                          onChange={handleInputChange}
                          required
                          placeholder="Describe your property in detail..."
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '2px solid rgba(0, 123, 255, 0.3)',
                            borderRadius: '10px',
                            padding: '12px'
                          }}
                        ></textarea>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="price" className="form-label text-white fw-bold">Price ($) *</label>
                          <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., 350000"
                            min="0"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <label htmlFor="yearBuilt" className="form-label text-white fw-bold">Year Built</label>
                          <input
                            type="number"
                            className="form-control"
                            id="yearBuilt"
                            name="yearBuilt"
                            value={formData.yearBuilt}
                            onChange={handleInputChange}
                            placeholder="e.g., 2020"
                            min="1800"
                            max={new Date().getFullYear()}
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Property Details */}
                  {currentStep === 2 && (
                    <div className="step-content">
                      <div className="text-center mb-4">
                        <h4 className="text-white fw-bold mb-2" style={{ fontSize: '2rem' }}>Property Details</h4>
                        <p className="text-white-50">Specify the property specifications</p>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-3 mb-3">
                          <label htmlFor="bedrooms" className="form-label text-white fw-bold">Bedrooms *</label>
                          <select
                            className="form-select"
                            id="bedrooms"
                            name="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleInputChange}
                            required
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          >
                            <option value="">Select</option>
                            {[1,2,3,4,5,6,7,8].map(num => (
                              <option key={num} value={num}>{num} {num === 1 ? 'Bedroom' : 'Bedrooms'}</option>
                            ))}
                            <option value="9">9+ Bedrooms</option>
                          </select>
                        </div>
                        
                        <div className="col-md-3 mb-3">
                          <label htmlFor="bathrooms" className="form-label text-white fw-bold">Bathrooms *</label>
                          <select
                            className="form-select"
                            id="bathrooms"
                            name="bathrooms"
                            value={formData.bathrooms}
                            onChange={handleInputChange}
                            required
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          >
                            <option value="">Select</option>
                            {[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6].map(num => (
                              <option key={num} value={num}>{num} {num === 1 ? 'Bathroom' : 'Bathrooms'}</option>
                            ))}
                            <option value="7">7+ Bathrooms</option>
                          </select>
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <label htmlFor="area" className="form-label text-white fw-bold">Area (sq ft) *</label>
                          <input
                            type="number"
                            className="form-control"
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., 1200"
                            min="0"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Location */}
                  {currentStep === 3 && (
                    <div className="step-content">
                      <div className="text-center mb-4">
                        <h4 className="text-white fw-bold mb-2" style={{ fontSize: '2rem' }}>Location Details</h4>
                        <p className="text-white-50">Where is your property located?</p>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label text-white fw-bold">Full Address *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g., 123 Main Street"
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '2px solid rgba(0, 123, 255, 0.3)',
                            borderRadius: '10px',
                            padding: '12px'
                          }}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="city" className="form-label text-white fw-bold">City *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., New York"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <label htmlFor="state" className="form-label text-white fw-bold">State *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., NY"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <label htmlFor="zipCode" className="form-label text-white fw-bold">ZIP Code *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., 10001"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="neighborhood" className="form-label text-white fw-bold">Neighborhood/Area</label>
                        <input
                          type="text"
                          className="form-control"
                          id="neighborhood"
                          name="neighborhood"
                          value={formData.neighborhood}
                          onChange={handleInputChange}
                          placeholder="e.g., Downtown, Suburban, etc."
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '2px solid rgba(0, 123, 255, 0.3)',
                            borderRadius: '10px',
                            padding: '12px'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Amenities */}
                  {currentStep === 4 && (
                    <div className="step-content">
                      <div className="text-center mb-4">
                        <h4 className="text-white fw-bold mb-2" style={{ fontSize: '2rem' }}>Amenities & Features</h4>
                        <p className="text-white-50 mb-4">Select all that apply ({selectedAmenitiesCount} selected)</p>
                      </div>
                      
                      <div className="row">
                        {Object.entries(formData.amenities).map(([amenity, isChecked]) => (
                          <div key={amenity} className="col-md-6 mb-3">
                            <div 
                              className="form-check p-3 rounded"
                              style={{
                                background: isChecked ? 'rgba(0, 123, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                                border: `2px solid ${isChecked ? 'rgba(0, 123, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)'}`,
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                              }}
                              onClick={() => {
                                const event = {
                                  target: {
                                    name: `amenities.${amenity}`,
                                    checked: !isChecked
                                  }
                                };
                                handleInputChange(event);
                              }}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`amenity-${amenity}`}
                                name={`amenities.${amenity}`}
                                checked={isChecked}
                                onChange={handleInputChange}
                                style={{ cursor: 'pointer' }}
                              />
                              <label className="form-check-label text-white fw-bold ms-2" htmlFor={`amenity-${amenity}`} style={{ cursor: 'pointer' }}>
                                {amenity.replace(/([A-Z])/g, ' $1').trim()}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Contact & Images */}
                  {currentStep === 5 && (
                    <div className="step-content">
                      <div className="text-center mb-4">
                        <h4 className="text-white fw-bold mb-2" style={{ fontSize: '2rem' }}>Contact Information & Images</h4>
                        <p className="text-white-50">Your contact details and property photos</p>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="ownerName" className="form-label text-white fw-bold">Your Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="ownerName"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., John Doe"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <label htmlFor="ownerEmail" className="form-label text-white fw-bold">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="ownerEmail"
                            name="ownerEmail"
                            value={formData.ownerEmail}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., john@example.com"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <label htmlFor="ownerPhone" className="form-label text-white fw-bold">Phone *</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="ownerPhone"
                            name="ownerPhone"
                            value={formData.ownerPhone}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., +1 (555) 123-4567"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '2px solid rgba(0, 123, 255, 0.3)',
                              borderRadius: '10px',
                              padding: '12px'
                            }}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="propertyImages" className="form-label text-white fw-bold">Property Images</label>
                        <input
                          type="file"
                          className="form-control"
                          id="propertyImages"
                          multiple
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: '2px solid rgba(0, 123, 255, 0.3)',
                            borderRadius: '10px',
                            padding: '12px'
                          }}
                        />
                        <div className="form-text text-white-50 mt-2">
                          Upload high-quality images of your property (max 10 images)
                        </div>
                      </div>

                      {/* Image Preview */}
                      {formData.images.length > 0 && (
                        <div className="mb-3">
                          <label className="form-label text-white fw-bold">Image Previews</label>
                          <div className="row g-2">
                            {formData.images.map((image, index) => (
                              <div key={index} className="col-6 col-md-3 mb-2 position-relative">
                                <img 
                                  src={image} 
                                  alt={`Property ${index + 1}`}
                                  className="img-thumbnail rounded"
                                  style={{ 
                                    height: '120px', 
                                    width: '100%', 
                                    objectFit: 'cover',
                                    border: '2px solid rgba(255,255,255,0.3)'
                                  }}
                                />
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle"
                                  onClick={() => removeImage(index)}
                                  style={{ width: '30px', height: '30px', padding: 0 }}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="d-flex justify-content-between mt-5">
                    <button
                      type="button"
                      className="btn btn-light btn-lg px-4"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      style={{ borderRadius: '15px' }}
                    >
                      ← Previous
                    </button>
                    
                    {currentStep < 5 ? (
                      <button
                        type="button"
                        className="btn btn-primary btn-lg px-5"
                        onClick={nextStep}
                        style={{ 
                          borderRadius: '15px',
                          background: 'linear-gradient(135deg, #007bff, #0056b3)',
                          border: 'none',
                          boxShadow: '0 10px 25px rgba(0, 123, 255, 0.4)'
                        }}
                      >
                        Next →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-success btn-lg px-5"
                        disabled={isSubmitting}
                        style={{ 
                          borderRadius: '15px',
                          background: 'linear-gradient(135deg, #28a745, #20c997)',
                          border: 'none',
                          boxShadow: '0 10px 25px rgba(40, 167, 69, 0.4)'
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-check-circle me-2"></i>
                            Submit Property
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Saved Properties Display - Crazy Layout */}
            {showSavedProperties && savedProperties.length > 0 && (
              <div 
                className="card shadow-lg border-0 mb-5"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(25px)',
                  borderRadius: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.25)',
                  overflow: 'hidden'
                }}
              >
                <div className="card-body p-4 p-md-5">
                  <div className="text-center mb-5">
                    <h2 className="text-white fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
                      <i className="bi bi-collection-fill me-2"></i>
                      Your Saved Properties
                    </h2>
                    <p className="text-white-50">All your listed properties in one place</p>
                  </div>

                  {/* Crazy Grid Layout */}
                  <div className="row g-4">
                    {savedProperties.map((property, index) => (
                      <div 
                        key={property.id} 
                        className={index % 3 === 0 ? 'col-lg-6' : 'col-lg-3'}
                        style={{
                          animation: `fadeInUp 0.6s ease ${index * 0.1}s both`
                        }}
                      >
                        <div
                          className="card h-100 border-0 shadow-lg position-relative overflow-hidden"
                          style={{
                            background: index % 2 === 0 
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,248,255,0.95))'
                              : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,245,255,0.95))',
                            borderRadius: '20px',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            transform: 'perspective(1000px) rotateY(0deg)',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) translateY(-15px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,123,255,0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                          }}
                        >
                          {/* Badge */}
                          <div 
                            className="position-absolute top-0 end-0 m-3"
                            style={{ zIndex: 10 }}
                          >
                            <span 
                              className="badge px-3 py-2 rounded-pill"
                              style={{
                                background: 'linear-gradient(135deg, #007bff, #0056b3)',
                                fontSize: '0.85rem'
                              }}
                            >
                              #{index + 1}
                            </span>
                          </div>

                          {/* Image Section */}
                          {property.images && property.images.length > 0 ? (
                            <div 
                              className="position-relative"
                              style={{
                                height: index % 3 === 0 ? '250px' : '180px',
                                overflow: 'hidden'
                              }}
                            >
                              <img 
                                src={property.images[0]} 
                                alt={property.title}
                                className="w-100 h-100"
                                style={{
                                  objectFit: 'cover',
                                  transition: 'transform 0.5s ease'
                                }}
                              />
                              <div 
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1))'
                                }}
                              ></div>
                            </div>
                          ) : (
                            <div 
                              className="d-flex align-items-center justify-content-center"
                              style={{
                                height: index % 3 === 0 ? '250px' : '180px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                              }}
                            >
                              <i className="bi bi-house-door text-white" style={{ fontSize: '4rem', opacity: 0.5 }}></i>
                            </div>
                          )}

                          <div className="card-body p-4">
                            {/* Property Type Badge */}
                            <span 
                              className="badge mb-2 px-3 py-1 rounded-pill"
                              style={{
                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                color: 'white',
                                fontSize: '0.75rem'
                              }}
                            >
                              {property.propertyType || 'Property'}
                            </span>

                            {/* Title */}
                            <h5 className="fw-bold mb-2" style={{ color: '#2c3e50', minHeight: '3rem' }}>
                              {property.title}
                            </h5>

                            {/* Location */}
                            <p className="text-muted small mb-3">
                              <i className="bi bi-geo-alt-fill me-1 text-primary"></i>
                              {property.city && property.state ? `${property.city}, ${property.state}` : property.address}
                            </p>

                            {/* Details Grid */}
                            <div className="row g-2 mb-3">
                              {property.bedrooms && (
                                <div className="col-4 text-center p-2 rounded" style={{ background: 'rgba(0,123,255,0.1)' }}>
                                  <div className="fw-bold text-primary">{property.bedrooms}</div>
                                  <small className="text-muted">Bed</small>
                                </div>
                              )}
                              {property.bathrooms && (
                                <div className="col-4 text-center p-2 rounded" style={{ background: 'rgba(40,167,69,0.1)' }}>
                                  <div className="fw-bold text-success">{property.bathrooms}</div>
                                  <small className="text-muted">Bath</small>
                                </div>
                              )}
                              {property.area && (
                                <div className="col-4 text-center p-2 rounded" style={{ background: 'rgba(255,193,7,0.1)' }}>
                                  <div className="fw-bold text-warning">{property.area}</div>
                                  <small className="text-muted">Sqft</small>
                                </div>
                              )}
                            </div>

                            {/* Price */}
                            <div className="mb-3">
                              <h4 className="fw-bold mb-0" style={{ color: '#007bff' }}>
                                ${parseInt(property.price).toLocaleString()}
                              </h4>
                            </div>

                            {/* Amenities */}
                            {property.amenities && Object.values(property.amenities).some(Boolean) && (
                              <div className="mb-3">
                                <small className="text-muted d-block mb-2">Amenities:</small>
                                <div className="d-flex flex-wrap gap-1">
                                  {Object.entries(property.amenities)
                                    .filter(([_, value]) => value)
                                    .slice(0, 3)
                                    .map(([key, _]) => (
                                      <span 
                                        key={key}
                                        className="badge bg-primary bg-opacity-25 text-primary px-2 py-1"
                                        style={{ fontSize: '0.7rem' }}
                                      >
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                      </span>
                                    ))}
                                  {Object.values(property.amenities).filter(Boolean).length > 3 && (
                                    <span className="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1" style={{ fontSize: '0.7rem' }}>
                                      +{Object.values(property.amenities).filter(Boolean).length - 3}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Action Buttons */}
                            <div className="d-flex gap-2 mt-3">
                              <button
                                className="btn btn-sm btn-primary flex-fill rounded-pill"
                                style={{
                                  background: 'linear-gradient(135deg, #007bff, #0056b3)',
                                  border: 'none'
                                }}
                              >
                                <i className="bi bi-eye me-1"></i>
                                View
                              </button>
                              <button
                                className="btn btn-sm btn-danger rounded-pill"
                                onClick={() => {
                                  if (window.confirm('Are you sure you want to delete this property?')) {
                                    deleteProperty(property.id);
                                  }
                                }}
                                style={{ width: '40px', padding: 0 }}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>

                            {/* Submitted Date */}
                            <small className="text-muted d-block mt-2">
                              <i className="bi bi-clock me-1"></i>
                              {new Date(property.submittedAt).toLocaleDateString()}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Section */}
            <div 
              className="card border-0 shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.25)'
              }}
            >
              <div className="card-body text-center p-4">
                <h5 className="card-title text-white fw-bold mb-4" style={{ fontSize: '1.5rem' }}>
                  Why List with HouseHunter?
                </h5>
                <div className="row mt-3">
                  <div className="col-md-4 mb-3">
                    <div 
                      className="p-4 rounded"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <h6 className="text-white mb-3">🏠 Wide Reach</h6>
                      <p className="text-white-50 small mb-0">Get your property in front of thousands of potential buyers</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div 
                      className="p-4 rounded"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <h6 className="text-white mb-3">⚡ Quick Process</h6>
                      <p className="text-white-50 small mb-0">Your listing goes live within 24 hours of approval</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div 
                      className="p-4 rounded"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <h6 className="text-white mb-3">💼 Expert Support</h6>
                      <p className="text-white-50 small mb-0">Our team helps you get the best value for your property</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ListProperty;
