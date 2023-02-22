const AddBookModal = ({
  bookModal, 
  toggleBookModal, 
  handleSubmit, 
  title, 
  author, 
  setTitle, 
  setAuthor, 
  editing,
  setEditing,
  editSubmit}) => {

  return (
    <div className={bookModal ? `modal-background modal-display` : `modal-background`}>
      <div className="modal">
        <div className="close-modal-container">
          <button 
            className="close-modal-btn" 
            onClick={() => {
              if (editing) {
                setEditing(false);
                setTitle('');
                setAuthor('');
                toggleBookModal();
              } else {
                toggleBookModal();
              }
            }}>
            &times;
          </button>
        </div>
        <form className="modal-form" onSubmit={editing ? editSubmit : handleSubmit}>
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
            name='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="submit-book-btn">{editing ? 'Edit' : 'Submit'}</button>
        </form>
      </div>
    </div>
  )
}

export default AddBookModal