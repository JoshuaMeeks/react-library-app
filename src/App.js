import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { BookCard } from './components/BookCard';

const url = `http://openlibrary.org/search.json?q=`;

function App() {
  const [library, setLibrary] = useState([]);
  const [id, setID] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookModal, setBookModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [duplicateBookMessage, setDuplicateBookMessage] = useState(false);
  
  const toggleBookModal = () => {
    setBookModal(state => !state);
  };
  
 const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const duplicate = library.find(book => book.title === title);
      if (duplicate) {
        setDuplicateBookMessage(true);
        setTimeout(() => {
          setDuplicateBookMessage(false);
        }, 3000);
      } else {
        fetchBookData(title, author);
        setTitle('');
        setAuthor('');
        toggleBookModal(false);
      }
    }
  };
  
  const fetchBookData = async (title, author) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${title.replace(/ /g, '+')}`);
      const data = await response.json();
      const img = await `https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`
      const book = {id: data.docs[0].cover_i, img, title, author, readStatus: false};
      setLibrary((library) => {
        return [...library, book];
      })
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }

  const toggleReadStatus = (id, e) => {
    library.map(book => {
      if (book.id === id) {
        book.readStatus = !book.readStatus;
        book.readStatus ? e.target.className = 'read' : e.target.className = 'unread';
        book.readStatus ? e.target.textContent = 'Read' : e.target.textContent = 'Unread';
      } return null;
    })
  }

  const editBook = (id) => {
    library.map(book => {
      if (book.id === id) {
        setEditing(true);
        setID(book.id)
        setTitle(book.title);
        setAuthor(book.author);
        toggleBookModal();
      } return null;
    })
  }

  const editSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      library.map(book => {
        if (book.id === id) {
          book.title = title;
          book.author = author;
          setTitle('');
          setAuthor('');
          toggleBookModal();
          setEditing(false);
        } return null;
      })
    };
  }

  const removeBook = (id) => {
    setLibrary(library.filter(book => book.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddBookButton 
        toggleBookModal={toggleBookModal} 
      />
      <AddBookModal  
        setLibrary={setLibrary} 
        bookModal={bookModal} 
        toggleBookModal={toggleBookModal}
        handleSubmit={handleSubmit}
        editSubmit={editSubmit}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        editing={editing}
        setEditing={setEditing}
        duplicateBookMessage = {duplicateBookMessage}
      />
      <div className='card-container'>
        {loading ? 
          <div className='loader'>
          </div> 
          :
          library.map((book) => {
            return (
              <BookCard 
                book={book}
                loading={loading}
                toggleReadStatus={toggleReadStatus}
                editBook={editBook}
                removeBook={removeBook}
              />
            );
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;