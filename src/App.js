import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import AddBookModal from './components/AddBookModal';
import { CardContainer } from './components/CardContainer';

function App() {
  const [display, setDisplay] = useState('none')
  const MODAL_DISPLAY = {
    display: display
  }

  const addBookClick = () => {
    setDisplay('flex')
  }

  return (
    <div className="App">
      <Header />
      <AddBookButton onClick={addBookClick}/>
      <AddBookModal style={MODAL_DISPLAY}/>
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;