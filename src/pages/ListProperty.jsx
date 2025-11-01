import { useState } from 'react';

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

  // Handle image upload (basic implementation)
  const handleImageChange = (e) => {
    // For now, we'll just store image URLs
    // In real app, you would upload files
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }));
  };

  // Remove image
  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send data to your backend
      console.log('Property Data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Property listed successfully! We will review your submission and contact you soon.');
      
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
      
    } catch (error) {
      alert('Error submitting property. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="list-property-page py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="househunter-primary mb-3">List Your Property with HouseHunter</h1>
              <p className="lead text-muted">
                Reach thousands of potential buyers and renters. Fill out the form below to get started.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="progress mb-3" style={{ height: '10px' }}>
                  <div 
                    className="progress-bar bg-warning" 
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="row text-center">
                  {['Basic Info', 'Details', 'Location', 'Amenities', 'Contact'].map((step, index) => (
                    <div key={step} className="col">
                      <div className={`d-flex flex-column align-items-center ${currentStep > index + 1 ? 'text-success' : currentStep === index + 1 ? 'text-warning fw-bold' : 'text-muted'}`}>
                        <div className={`rounded-circle ${currentStep > index + 1 ? 'bg-success' : currentStep === index + 1 ? 'bg-warning' : 'bg-secondary'} text-white d-flex align-items-center justify-content-center mb-2`} style={{ width: '30px', height: '30px' }}>
                          {currentStep > index + 1 ? '✓' : index + 1}
                        </div>
                        <small>{step}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card shadow">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <div className="step-content">
                      <h4 className="mb-4 househunter-primary">Basic Information</h4>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="title" className="form-label">Property Title *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., Beautiful 3-Bedroom Apartment"
                          />
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <label htmlFor="propertyType" className="form-label">Property Type *</label>
                          <select
                            className="form-select"
                            id="propertyType"
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleInputChange}
                            required
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
                        <label htmlFor="description" className="form-label">Property Description *</label>
                        <textarea
                          className="form-control"
                          id="description"
                          name="description"
                          rows="4"
                          value={formData.description}
                          onChange={handleInputChange}
                          required
                          placeholder="Describe your property in detail..."
                        ></textarea>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="price" className="form-label">Price ($) *</label>
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
                          />
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <label htmlFor="yearBuilt" className="form-label">Year Built</label>
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
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Property Details */}
                  {currentStep === 2 && (
                    <div className="step-content">
                      <h4 className="mb-4 househunter-primary">Property Details</h4>
                      
                      <div className="row">
                        <div className="col-md-3 mb-3">
                          <label htmlFor="bedrooms" className="form-label">Bedrooms *</label>
                          <select
                            className="form-select"
                            id="bedrooms"
                            name="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select</option>
                            {[1,2,3,4,5,6,7,8].map(num => (
                              <option key={num} value={num}>{num} {num === 1 ? 'Bedroom' : 'Bedrooms'}</option>
                            ))}
                            <option value="9">9+ Bedrooms</option>
                          </select>
                        </div>
                        
                        <div className="col-md-3 mb-3">
                          <label htmlFor="bathrooms" className="form-label">Bathrooms *</label>
                          <select
                            className="form-select"
                            id="bathrooms"
                            name="bathrooms"
                            value={formData.bathrooms}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select</option>
                            {[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6].map(num => (
                              <option key={num} value={num}>{num} {num === 1 ? 'Bathroom' : 'Bathrooms'}</option>
                            ))}
                            <option value="7">7+ Bathrooms</option>
                          </select>
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <label htmlFor="area" className="form-label">Area (sq ft) *</label>
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
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Location */}
                  {currentStep === 3 && (
                    <div className="step-content">
                      <h4 className="mb-4 househunter-primary">Location Details</h4>
                      
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">Full Address *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g., 123 Main Street"
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="city" className="form-label">City *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., New York"
                          />
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <label htmlFor="state" className="form-label">State *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., NY"
                          />
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <label htmlFor="zipCode" className="form-label">ZIP Code *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., 10001"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="neighborhood" className="form-label">Neighborhood/Area</label>
                        <input
                          type="text"
                          className="form-control"
                          id="neighborhood"
                          name="neighborhood"
                          value={formData.neighborhood}
                          onChange={handleInputChange}
                          placeholder="e.g., Downtown, Suburban, etc."
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Amenities */}
                  {currentStep === 4 && (
                    <div className="step-content">
                      <h4 className="mb-4 househunter-primary">Amenities & Features</h4>
                      <p className="text-muted mb-4">Select all that apply ({selectedAmenitiesCount} selected)</p>
                      
                      <div className="row">
                        {Object.entries(formData.amenities).map(([amenity, isChecked]) => (
                          <div key={amenity} className="col-md-6 mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`amenity-${amenity}`}
                                name={`amenities.${amenity}`}
                                checked={isChecked}
                                onChange={handleInputChange}
                              />
                              <label className="form-check-label text-capitalize" htmlFor={`amenity-${amenity}`}>
                                {amenity.replace(/([A-Z])/g, ' $1')}
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
                      <h4 className="mb-4 househunter-primary">Contact Information & Images</h4>
                      
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="ownerName" className="form-label">Your Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="ownerName"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., John Doe"
                          />
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <label htmlFor="ownerEmail" className="form-label">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="ownerEmail"
                            name="ownerEmail"
                            value={formData.ownerEmail}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., john@example.com"
                          />
                        </div>
                        
                        <div className="col-md-4 mb-3">
                          <label htmlFor="ownerPhone" className="form-label">Phone *</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="ownerPhone"
                            name="ownerPhone"
                            value={formData.ownerPhone}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g., +1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="propertyImages" className="form-label">Property Images</label>
                        <input
                          type="file"
                          className="form-control"
                          id="propertyImages"
                          multiple
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        <div className="form-text">
                          Upload high-quality images of your property (max 10 images)
                        </div>
                      </div>

                      {/* Image Preview */}
                      {formData.images.length > 0 && (
                        <div className="mb-3">
                          <label className="form-label">Image Previews</label>
                          <div className="row">
                            {formData.images.map((image, index) => (
                              <div key={index} className="col-6 col-md-3 mb-2 position-relative">
                                <img 
                                  src={image} 
                                  alt={`Property ${index + 1}`}
                                  className="img-thumbnail"
                                  style={{ height: '100px', width: '100%', objectFit: 'cover' }}
                                />
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm position-absolute top-0 end-0"
                                  onClick={() => removeImage(index)}
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
                  <div className="d-flex justify-content-between mt-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      ← Previous
                    </button>
                    
                    {currentStep < 5 ? (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={nextStep}
                      >
                        Next →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-success"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Submitting...
                          </>
                        ) : (
                          'Submit Property'
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="card mt-4">
              <div className="card-body text-center">
                <h5 className="card-title househunter-primary">Why List with HouseHunter?</h5>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <h6>🏠 Wide Reach</h6>
                    <p className="text-muted small">Get your property in front of thousands of potential buyers</p>
                  </div>
                  <div className="col-md-4">
                    <h6>⚡ Quick Process</h6>
                    <p className="text-muted small">Your listing goes live within 24 hours of approval</p>
                  </div>
                  <div className="col-md-4">
                    <h6>💼 Expert Support</h6>
                    <p className="text-muted small">Our team helps you get the best value for your property</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProperty;