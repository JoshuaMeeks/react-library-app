import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { BookCard } from './components/BookCard';

function App() {
  const [library, setLibrary] = useState([
    { 
      title: '',
      author: ''
    }
  ]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [addBookModal, setAddBookModal] = useState(false);

  const toggleBookModal = () => {
    setAddBookModal(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {id: new Date().getTime().toString(), title, author};
      setLibrary((library) => {
        return [...library, book];
      });
      setTitle('');
      setAuthor('');
      toggleBookModal();
    } else {
      console.log('failed');
    }
  };

  const removeBook = (id) => {
    let newLibrary = library.filter((book) => book.id !== id);
    setLibrary(newLibrary);
  }

  const editBook = (id) => {
    console.log(id);
  }

  return (
    <div className="App">
      <Header />
      <AddBookButton onClick={toggleBookModal} />
      <AddBookModal  
        setLibrary={setLibrary} 
        addBookModal={addBookModal} 
        toggleBookModal={toggleBookModal}
        onSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
      />
      <div className='card-container'>
        { library.map((book) => {
          const {id, title, author} = book;
          if (title && author) {
          return (
            <BookCard 
              key={id} 
              id={id} 
              title={title} 
              author={author} 
              removeBook={removeBook}
              editBook={editBook}
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