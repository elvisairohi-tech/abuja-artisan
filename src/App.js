import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Direct imports from src
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import FindArtisansPage from './FindArtisansPage';
import ArtisanProfilePage from './ArtisanProfilePage';
import JoinArtisanPage from './JoinArtisanPage';
import AboutContactPage from './AboutContactPage';
import { INITIAL_ARTISANS } from './artisansData';

function App() {
  const [artisans, setArtisans] = useState(INITIAL_ARTISANS);

  const handleRegisterArtisan = (newArtisan) => {
    setArtisans((prev) => [newArtisan, ...prev]);
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage artisans={artisans} />} />
          <Route path="/find-artisans" element={<FindArtisansPage artisans={artisans} />} />
          <Route path="/artisan/:id" element={<ArtisanProfilePage artisans={artisans} />} />
          <Route path="/join" element={<JoinArtisanPage onRegisterArtisan={handleRegisterArtisan} />} />
          <Route path="/about" element={<AboutContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;