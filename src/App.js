import './App.css';
import Banner from './components/Banner/Banner';
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
      
    </div>
  );
}

export default App;
