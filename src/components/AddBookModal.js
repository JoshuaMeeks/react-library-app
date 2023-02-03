const AddBookModal = ({ setLibrary, addBookModal, toggleBookModal, }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi');
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
          />
          <input 
            type="text" 
            className="author" 
            placeholder="Add an author" 
            id='author'
            name='authore'
          />
          <button className="submit-book-btn">Submit</button>
        </form>
      </div>
    </div>
    : null
  )
}

export default AddBookModal