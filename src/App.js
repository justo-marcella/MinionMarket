import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Produtos from './components/Produtos/Produtos';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Banner/>
      <Produtos/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
