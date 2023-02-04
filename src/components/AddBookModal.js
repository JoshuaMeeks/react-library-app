import { useState } from "react";

const AddBookModal = ({ addBookModal, toggleBookModal, }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [library, setLibrary] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {title, author};
      setLibrary((library) => {
        return [...library, book]
      });
      setTitle('');
      setAuthor('');
    } else {
      console.log('failed');
    }
  }


  return ( addBookModal ? 
    <div className="modal-background">
      <div className="modal">
        <div className="close-modal-container">
          <button className="close-modal-btn" onClick={toggleBookModal}>&times;</button>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input 
            type='text' 
            className='title' 
            placeholder='Add a title' 
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input 
            type="text" 
            className="author" 
            placeholder="Add an author" 
            id='author'
            name='authore'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="submit-book-btn">Submit</button>
        </form>
      </div>
    </div>
    : null
  )
}

export default AddBookModal