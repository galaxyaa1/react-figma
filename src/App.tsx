import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Service from './Components/Service';
import Cards from './Components/Cards';
import HealthProviders from './Components/HealthProviders';
import MobileApps from './Components/MobileApps';
import Carousell from './Components/Carousell';
import Artical from './Components/Artical';
import Footer from './Components/Footer';
import Healthcare from './Components/Healthcare';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Healthcare />
              <Service />
              <Cards />
              <HealthProviders />
              <MobileApps />
              <Carousell />
              <Artical />
              <Footer />
            </>
          }
        />
        <Route
          path="/find-a-doctor"
          element={
            <>
              <Header />
              <Cards />
            </>
          }
        />
        <Route
          path="/apps"
          element={
            <>
              <Header />
              <Carousell />
            </>
          }
        />
        <Route
          path="/testimonials"
          element={
            <>
              <Header />
              <Artical />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
