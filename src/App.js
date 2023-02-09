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
  const [addBookModal, setAddBookModal] = useState(false);

  const toggleBookModal = () => {
    setAddBookModal(state => !state);
  };

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
        addBookModal={addBookModal} 
        toggleBookModal={toggleBookModal}
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
      />
      <div className='card-container'>
        { library.map((book) => {
          const {id, img, title, author} = book;
          if (title && author) {
          return (
            <BookCard 
              key={id}
              img={img}
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