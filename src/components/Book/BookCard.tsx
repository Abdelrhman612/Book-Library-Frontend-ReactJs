type BookCardProps = {
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
};

const BookCard = ({
  title,
  author,
  category,
  description,
  image,
}: BookCardProps) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
          <p className="card-text">
            <strong>التصنيف:</strong> {category}
          </p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
