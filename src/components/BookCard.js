import { useEffect, useState } from "react";
const url = `http://openlibrary.org/search.json?q=`;

export const BookCard = ({ key, title, author, toggle, removeBook, readStatus, toggleReadStatus}) => {
  const [loading, setLoading] = useState(true);
  const [id, setID] = useState('')
  const [img, setImg] = useState('');
  const [book, setBook] = useState({id: '', img: '', title, author});

  const fetchBookData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${title.replace(/ /g, '+')}`);
      const data = await response.json();
      console.log(`https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`);
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchBookData();
  }, [])

  if (loading) {
    return (
      <div className="card-div">
        <div className="card-cover-container">
          <div className="book-cover-loading-img">
            <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' alt="book cover"/>
          </div>
        </div>
        <div className="card-info-container">
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </div>
        <div className="card-btn-container">
          <button className={readStatus ? `read` : `unread`} onClick={() => toggleReadStatus(id)}>Unread</button>
          <button className="edit-btn" onClick={() => console.log(key)}>Edit</button>
          <button className="remove-btn" onClick={() => removeBook()}>Remove</button>
        </div>
      </div>
    )
  } else {
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
          <button className={readStatus ? `read` : `unread`} onClick={() => toggleReadStatus(id)}>Unread</button>
          <button className="edit-btn" onClick={() => console.log(key)}>Edit</button>
          <button className="remove-btn" onClick={() => removeBook(id)}>Remove</button>
        </div>
      </div>
    );
  }
}