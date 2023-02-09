import { useEffect, useState, useCallback } from "react";

export const BookCard = ({ key, title, author, toggle, removeBook, library, setLibrary}) => {
  const url = `http://openlibrary.org/search.json?q=${title.replace(/ /g, '+')}`;

  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState('')

  const fetchImage = useCallback(async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const img = await `https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`;
    setImg(img);
    setLoading(false);
  })
  
  useEffect(() => {
    fetchImage();
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
          <button className="unread" onClick={() => console.log(key)}>Unread</button>
          <button className="edit-btn" onClick={() => toggle()}>Edit</button>
          <button className="remove-btn" onClick={() => console.log(url)}>Remove</button>
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
        <button className="unread" onClick={() => console.log(key)}>Unread</button>
        <button className="edit-btn" onClick={() => toggle()}>Edit</button>
        <button className="remove-btn" onClick={() => removeBook(key)}>Remove</button>
      </div>
    </div>
  );}
}