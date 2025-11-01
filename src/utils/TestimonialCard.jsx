export default function TestimonialCard({ testimonial }) {
  const { name, text } = testimonial;
  
  return (
    <div className="card testimonial-card p-4">
      <div className="card-body">
        <p className="mb-3">"{text}"</p>
        <footer className="blockquote-footer mb-0">
          {name}
        </footer>
      </div>
    </div>
  );
}