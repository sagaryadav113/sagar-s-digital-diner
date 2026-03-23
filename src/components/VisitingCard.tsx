export default function VisitingCard() {
  const visitingCardImage = `${import.meta.env.BASE_URL}images/visiting-card.png`;

  return (
    <div className="animate-fade-up animate-float-soft" style={{ animationDelay: "0.45s" }}>
      {/* Business Card Image */}
      <img 
        src={visitingCardImage}
        alt="Sagar Yadav Business Card"
        className="card-hover-lift rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100" 
        style={{ aspectRatio: "3.35 / 2.17", width: "425px" }}
      />
    </div>
  );
}
