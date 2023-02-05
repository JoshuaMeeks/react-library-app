export const BookCard = ({title, author}) => {
  return (
    <div className="card-div">
      <div className="card-cover-container">
        <div className="book-cover-img">
          <img src="" alt="" />
        </div>
      </div>
      <div className="card-info-container">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
      </div>
      <div className="card-btn-container">
        <button className="edit-btn">Edit</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
}