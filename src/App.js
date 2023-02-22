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
  const [readStatus, setReadStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const toggleBookModal = () => {
    setBookModal(state => !state);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      fetchBookData(title);
      setTitle('');
      setAuthor('');
      toggleBookModal();
    };
  };
  
  const fetchBookData = async (title, author) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${title.replace(/ /g, '+')}`);
      const data = await response.json();
      const img = await `https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`
      const book = {id: data.docs[0].cover_i, img, title, author};
      setLibrary((library) => {
        return [...library, book];
      })
      console.log(library);
      
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
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
          return (
            <BookCard 
              id={id}
              book={book}
              removeBook={removeBook}
              library={library}
              setLibrary={setLibrary}
              readStatus={readStatus}
              toggleReadStatus={toggleReadStatus}
              loading={loading}
              setLoading={setLoading}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;