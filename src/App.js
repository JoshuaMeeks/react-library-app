import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { BookCard } from './components/BookCard';


function App() {
  const [library, setLibrary] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const toggleBookModal = () => {
    setBookModal(state => !state);
  };
  const [bookModal, setBookModal] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {title, author};
      setLibrary((library) => {
        return [...library, book]
      })
      setTitle('');
      setAuthor('');
      toggleBookModal();
    };
  }

  const removeBook = (id) => {
    setLibrary(library.filter(book => book.id !== id));
  }

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
        {library.map((book) => {
          const {title, author} = book;
          if (title && author) {
          return (
            <BookCard 
              title={title} 
              author={author}
              removeBook={removeBook}
              library={library}
              setLibrary={setLibrary}
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