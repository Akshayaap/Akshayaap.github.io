import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products'
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Other from './pages/Other';
import Footer from './components/Footer';
import { Component } from 'react';
import html2canvas from 'html2canvas';

class App extends Component {



  render() {


    return (

      <div className="App">
        <Router>
          <header>
            <Navbar />

          </header>

          <div className="pages">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/other-sites" component={Other} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />

            </Switch>
          </div>
        </Router>
        <Footer />

      </div>


    );
  }
}
export default App;
