import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Produtos from './components/Produtos/Produtos';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Banner/>
      <Produtos/>
      <Form/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
