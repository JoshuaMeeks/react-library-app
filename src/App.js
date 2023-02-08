import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { BookCard } from './components/BookCard';
import { EditBookModal } from './components/EditBookModal';

function App() {
  const [library, setLibrary] = useState([{}]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [addBookModal, setAddBookModal] = useState(false);
  const [state, setState] = useState(false);

  const toggleBookModal = () => {
    setAddBookModal(state => !state);
  };

  const toggle = () => {
    setState(!state)
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (title && author) {
  //     setTitle('');
  //     setAuthor('');
  //     toggleBookModal();
  //     const res = fetch(`http://openlibrary.org/search.json?q=${title.replace(/ /g, '+')}`)
  //     .then(data => res.json())
  //     .then(img => `https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`)
  // };

  // ${title.replace(/ /g, '+')}

  useEffect(() => {
    const res = fetch(`http://openlibrary.org/search.json?q=harrypotterandthechamberofsecrets`)
    .then((res) => {data = JSON.parse(res)})
    .then((data) => {console.log(data.docs[0])})
  }, [])

  const removeBook = (id) => {
    let newLibrary = library.filter((book) => book.id !== id);
    setLibrary(newLibrary);
  }

  return (
    <div className="App">
      <Header />
      <AddBookButton toggleBookModal={toggleBookModal} />
      <AddBookModal  
        setLibrary={setLibrary} 
        addBookModal={addBookModal} 
        toggleBookModal={toggleBookModal}
        // handleSubmit={handleSubmit}
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
              toggle={toggle}
            />
          );
          } return null;
        })}
      </div>
      <EditBookModal 
        // editBook={editBook} 
        toggle={toggle}
        library={library}
        setLibrary={setLibrary}
      />
      <Footer />
    </div>
  );
}

export default App;