import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Team from './pages/Team';
import Partners from './pages/Partners';
import Features from './pages/Features';
import MoralEd from './pages/MoralEd';
import Contact from './pages/Contact';
import ScopeSequence from './pages/ScopeSequence';
import ForSchools from './pages/ForSchools';
import FAQ from './pages/FAQ';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/features" element={<Features />} />
        <Route path="/scope-and-sequence" element={<ScopeSequence />} />
        <Route path="/for-schools" element={<ForSchools />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/moraled" element={<MoralEd />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
