import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Service from './components/Service';
import Cards from './components/Cards';
import HealthProviders from './components/HealthProviders';
import Apps from './components/Apps';
import Carousell from './components/Carousell';
import Artical from './components/Artical';
import Footer from './components/Footer';
import Healthcare from './components/Healthcare';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Healthcare />
          <Service />
          <Cards />
          <HealthProviders />
          <Apps />
          <Carousell />
          <Artical />
          <Footer />
        </>} />
        <Route path="/find-a-doctor" element={<>
          <Header />
          <Cards />
        </>} />
        <Route path="/apps" element={<>
          <Header />
          <Carousell />
        </>} />
        <Route path="/testimonials" element={<>
          <Header />
          <Artical />
        </>} />
        <Route path="/about-us" element={<>
          <Header />
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
}
export default App;