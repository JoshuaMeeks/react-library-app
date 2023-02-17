const AddBookModal = ({bookModal, toggleBookModal, handleSubmit, title, author, setTitle, setAuthor}) => {

  return (
    <div className={bookModal ? `modal-background` : `modal-background modal-display`}>
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
  )
}

export default AddBookModal