const AddBookButton = ({ onClick }) => {


  return (
    <div className='button-container'>
      <button className='add-book-btn' onClick={ onClick }>Add a book</button>
    </div>
  )
}

export default AddBookButton


