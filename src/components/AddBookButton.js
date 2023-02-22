const AddBookButton = ({ toggleBookModal, setEditing }) => {


  return (
    <div className='button-container'>
      <button className='add-book-btn' onClick={toggleBookModal}>
        Add a book
      </button>
    </div>
  )
}

export default AddBookButton


