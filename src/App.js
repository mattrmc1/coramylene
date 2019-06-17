import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Booking from './components/contact/Booking';
import Inquiries from './components/contact/Inquiries';
import Store from './components/store/Store';
import FAQ from './components/FAQ';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navigation/>
      <main className="content">
        <Route exact path="/" component={Home}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/contact/booking" component={Booking}/>
        <Route exact path="/contact/inquiries" component={Inquiries}/>
        <Route exact path="/store" component={Store}/>
        <Route exact path="/faq" component={FAQ}/>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
