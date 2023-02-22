const AddBookButton = ({ toggleBookModal, setEditing }) => {


  return (
    <div className='button-container'>
      <button className='add-book-btn' onClick={() => {
        toggleBookModal();
        setEditing(false);
      }}>
        Add a book
      </button>
    </div>
  )
}

export default AddBookButton


