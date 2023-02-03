const AddBookModal = ({ addBookModal, setTitle, addBook, toggleBookModal }) => {


  return ( addBookModal ? 
    <div className="modal-background">
      <div className="modal">
        <div className="close-modal-container">
          <button className="close-modal-btn" onClick={toggleBookModal}>&times;</button>
        </div>
        <form className="modal-form">
          <input 
            type="text" 
            className="title" 
            placeholder="Add a title" 
            aria-required="true"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="text" className="author" placeholder="Add an author" aria-required="true"/>
          <button className="submit-book-btn" onClick={addBook}>Submit</button>
        </form>
      </div>
    </div>
    : null
  )
}

export default AddBookModal