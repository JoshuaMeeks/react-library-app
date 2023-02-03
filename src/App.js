import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { CardContainer } from './components/CardContainer';

function App() {
  const [library, setLibrary] = useState([
    { 
      title: '',
      author: ''
    }
])
  const [addBookModal, setAddBookModal] = useState(false)

  const toggleBookModal = () => {
    setAddBookModal(prev => !prev)
  }

  // const addBook = () => {

  // }

  return (
    <div className="App">
      <Header />
      <AddBookButton onClick={toggleBookModal} />
      <AddBookModal  setLibrary={setLibrary} addBookModal={addBookModal} toggleBookModal={toggleBookModal}/>
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;