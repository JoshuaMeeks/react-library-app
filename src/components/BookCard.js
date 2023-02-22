
export const BookCard = ({book, removeBook, loading, readStatus, toggleReadStatus}) => {

  if (!loading) {
    const {id, img, title, author} = book
    return (
      <div className="card-div">
        <div className="card-cover-container">
          <div className="book-cover-img">
            <img src={img} alt="book cover"/>
          </div>
        </div>
        <div className="card-info-container">
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </div>
        <div className="card-btn-container">
          <button className={readStatus ? `read` : `unread`} onClick={() => toggleReadStatus(id)}>{readStatus ? `Read` : `Unread`}</button>
          <button className="edit-btn" onClick={() => console.log(id)}>Edit</button>
          <button className="remove-btn" onClick={() => removeBook(id)}>Remove</button>
        </div>
      </div>
    )
  }
}