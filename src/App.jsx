import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import Menu from './components/Menu.jsx';
import Home from './pages/Home.jsx';
import Mission from './pages/Mission.jsx';
import Accommodation from './pages/Accommodation.jsx';
import Directions from './pages/Directions.jsx'
import Contact from './pages/Contact.jsx';
import Forms from './pages/Forms.jsx';
import Agenda from './pages/Agenda.jsx';
import Keynote from './pages/Keynote.jsx';
import ParticipantsList from './pages/ParticipantsList'
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import './i18n/i18n.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  return (
    <Router>
    <div>
      <Banner />
      <Menu />
      <LanguageSwitcher />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/participants" element={<ParticipantsList />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/keynote-speakers" element={<Keynote />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
};

export default App;
