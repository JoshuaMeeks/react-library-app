import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { CardContainer } from './components/CardContainer';
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
      const book = {title, author};
      setLibrary((library) => {
        return [...library, book]
      });
      setTitle('');
      setAuthor('');
      toggleBookModal();
    } else {
      console.log('failed');
    }
  };

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
      <CardContainer>
        {library.map((book) => {
          console.log('testing map')
        })}
      </CardContainer>
      <Footer />
    </div>
  );
}

export default App;