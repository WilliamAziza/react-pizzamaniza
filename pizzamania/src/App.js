import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import AboutPizza from './AboutPizza';
import PizzaTypes from './PizzaTypes';
import Footer from './footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <AboutPizza/>
     <PizzaTypes/>
     <Footer/>
    </div>
  );
}

export default App;
