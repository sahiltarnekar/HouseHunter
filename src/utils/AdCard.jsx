export default function AdCard({ ad }) {
  if (!ad) return null

  const { title, subtitle, image, ctaText, ctaLink } = ad

  return (
    <div className="col-md-6 mb-4">
      <div className="ad-card card text-white overflow-hidden border-0">
        <div className="row g-0 align-items-center">
          <div className="col-5">
            <img src={image} className="img-fluid h-100 object-fit-cover" alt={title} />
          </div>
          <div className="col-7">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text small mb-3 text-info">{subtitle}</p>
              <a href={ctaLink} className="btn btn-outline-light btn-sm">{ctaText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}