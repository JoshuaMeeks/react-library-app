import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { BookCard } from './components/BookCard';

const url = `http://openlibrary.org/search.json?q=`;

function App() {
  const [library, setLibrary] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookModal, setBookModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false)

  
  const toggleBookModal = () => {
    setBookModal(state => !state);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      fetchBookData(title, author);
      setTitle('');
      setAuthor('');
      toggleBookModal();
    };
  };

  const editSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
    setTitle('');
    setAuthor('');
    toggleBookModal();
    console.log('passed');
  }
  
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
      }
    })
  }

  const editBook = (id) => {
    library.map(book => {
      if (book.id === id) {
        setEditing(true);
        toggleBookModal();
        console.log(book);
      }
    })
  }

  const removeBook = (id) => {
    setLibrary(library.filter(book => book.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddBookButton 
        toggleBookModal={toggleBookModal} 
        setEditing={setEditing}
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
      />
      <div className='card-container'>
        {library.map((book) => {
          return (
            <BookCard 
              book={book}
              loading={loading}
              toggleReadStatus={toggleReadStatus}
              editBook={editBook}
              removeBook={removeBook}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;