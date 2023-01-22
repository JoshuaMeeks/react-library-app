import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import AddBookButton from './components/AddBookButton';
import { CardContainer } from './components/CardContainer';

function App() {
  const handleClick = () => {
    console.log('test')
  }

  return (
    <div className="App">
      <Header />
      <AddBookButton onClick={handleClick}/>
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
