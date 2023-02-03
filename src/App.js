import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { CardContainer } from './components/CardContainer';

function App() {
  const [library, setLibrary] = useState([])

  const [addBookModal, setAddBookModal] = useState(false)

  const toggleBookModal = () => {
    setAddBookModal(prev => !prev)
  }

  return (
    <div className="App">
      <Header />
      <AddBookButton onClick={toggleBookModal} />
      <AddBookModal addBookModal={addBookModal} setAddBookModal={setAddBookModal} setLibrary={setLibrary} toggleBookModal={toggleBookModal}/>
      <CardContainer library={library}/>
      <Footer />
    </div>
  );
}

export default App;