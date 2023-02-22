import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { BookCard } from './components/BookCard';

const url = `http://openlibrary.org/search.json?q=`;

function App() {
  const [book, setBook] = useState({});
  const [library, setLibrary] = useState([]);
  const [id, setID] = useState();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookModal, setBookModal] = useState(false);
  const [readStatus, setReadStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const toggleBookModal = () => {
    setBookModal(state => !state);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {title, author};
      setLibrary((library) => {
        return [...library, book];
      })
      console.log(library)
      setTitle('');
      setAuthor('');
      toggleBookModal();
    };
  };

    const fetchBookData = async (title) => {
    setLoading(false);
    try {
      const response = await fetch(`${url}${title.replace(/ /g, '+')}`);
      const data = await response.json();

      
    } catch (error) {
      console.log(error)
    }
  }

  const toggleReadStatus = (id) => {
    setReadStatus(state => !state);
  };

  const removeBook = (id) => {
    setLibrary(library.filter(book => book.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <AddBookButton toggleBookModal={toggleBookModal} />
      <AddBookModal  
        setLibrary={setLibrary} 
        bookModal={bookModal} 
        toggleBookModal={toggleBookModal}
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
      />
      <div className='card-container'>
        {library.map((book, id) => {
          const {title, author} = book;
          if (title && author) {
          return (
            <BookCard 
              key={id}
              title={title} 
              author={author}
              removeBook={removeBook}
              library={library}
              setLibrary={setLibrary}
              readStatus={readStatus}
              toggleReadStatus={toggleReadStatus}
              loading={loading}
              setLoading={setLoading}
            />
          );
          } return null;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;