export const BookCard = ({ key, img, title, author, removeBook, toggle }) => {
  return (
    <div className="card-div">
      <div className="card-cover-container">
        <div className="book-cover-img">
          <img src={img} alt="book cover" />
        </div>
      </div>
      <div className="card-info-container">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
      </div>
      <div className="card-btn-container">
        <button className="unread" onClick={() => console.log(key)}>Unread</button>
        <button className="edit-btn" onClick={() => toggle()}>Edit</button>
        <button className="remove-btn" onClick={() => removeBook(key)}>Remove</button>
      </div>
    </div>
  );
}