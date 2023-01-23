import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { CardContainer } from './components/CardContainer';

function App() {
  const [addBookModal, setAddBookModal] = useState(false)

  const addBookClick = () => {
    setAddBookModal(prev => !prev)
  }

  return (
    <div className="App">
      <Header />
      <AddBookButton onClick={addBookClick} />
      <AddBookModal addBookModal={addBookModal} setAddBookModal={setAddBookModal} />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;