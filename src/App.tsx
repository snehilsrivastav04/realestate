import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Commercial from './pages/Commercial';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main className="pt-16 lg:pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/commercial" element={<Commercial />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;