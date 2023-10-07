// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Router from './Routes/Router';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router />
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
