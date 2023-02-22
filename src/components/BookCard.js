export const BookCard = ({book, loading, removeBook, toggleReadStatus}) => {
  const {id, img, title, author, readStatus} = book

  if (!loading) {
    return (
      <div className="card-div">
        <div className="card-cover-container">
          <div className="book-cover-img">
            <img src={img} alt="cover"/>
          </div>
        </div>
        <div className="card-info-container">
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </div>
        <div className="card-btn-container">
          <button className={readStatus ? 'read' : 'unread'} onClick={(e) => toggleReadStatus(id, e)}>Unread</button>
          <button className="edit-btn" onClick={() => console.log(id)}>Edit</button>
          <button className="remove-btn" onClick={() => removeBook(id)}>Remove</button>
        </div>
      </div>
    )
  }
}