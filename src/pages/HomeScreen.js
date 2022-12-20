import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeAndResults.css';

function HomeScreen() {
  return (
    <main className="Home-Container">
      <h1>cavaleiros zodiaco</h1>
      <div className="Links-Container">
        <Link to="/game">Play</Link>
        <Link to="/Deck">Settings</Link>
      </div>
    </main>
  );
}

export default HomeScreen;
