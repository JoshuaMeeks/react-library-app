const AddBookModal = ({ addBookModal, setAddBookModal}) => {

  return ( addBookModal ? 
    <div className="modal-background">
      <div className="modal">
        <div className="close-modal-container">
          <button className="close-modal-btn">&times;</button>
        </div>
        <form className="modal-form">
          <input type="text" className="title" placeholder="Add a title" aria-required="true"/>
          <input type="text" className="author" placeholder="Add an author" aria-required="true"/>
          <button className="submit-book-btn">Submit</button>
        </form>
      </div>
    </div>
    : null
  )
}

export default AddBookModal