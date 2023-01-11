import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddBookButton } from './components/AddBookButton';

function App() {
  return (
    <div className="App">
      <Header />
      <AddBookButton />
      <Footer />
    </div>
  );
}

export default App;
