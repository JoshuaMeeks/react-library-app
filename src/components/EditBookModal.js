
export const EditBookModal = ({ editBook, toggleEditModal, library, setLibrary, submitEdit }) => {

  return ( editBook ?
      <div className="edit-modal-background">
        <div className="edit-modal">
          <div className="close-edit-modal-container">
            <button className="close-edit-modal-btn" onClick={toggleEditModal}>&times;</button>
          </div>
          <form className="edit-modal-form">
            <input type="text" className="edit-title" />
            <input type="text" className="edit-author" />
            <button type="submit" className="edit-submit-book-btn" onClick={() => submitEdit()}>Edit</button>
          </form>
        </div>
      </div>
    : null
  )
}