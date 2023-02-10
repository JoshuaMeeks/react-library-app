import { useEffect, useState } from "react";
const url = `http://openlibrary.org/search.json?q=`;

export const BookCard = ({ key, title, author, toggle, removeBook}) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState('')
  const [searchTerm, setSearchTerm] = useState('a')

  const fetchBookData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${title.replace(/ /g, '+')}`);
      const data = await response.json();
      setImg(`https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`);
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBookData();
  }, [searchTerm])
  
  //   setLoading(true);
  //   fetchImage();
  //   setLoading(false);
  // }, [title, loading])
  
  // return `https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`;
  // ${title.replace(/ /g, '+')}

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
          <button className="unread" onClick={() => console.log(key)}>Unread</button>
          <button className="edit-btn" onClick={() => toggle()}>Edit</button>
          <button className="remove-btn" onClick={() => removeBook(key)}>Remove</button>
        </div>
      </div>
    );
  }
}