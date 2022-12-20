import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="game-header">
      <Link to="/"><h1>{'Cavaleiros\' Zodiaco'}</h1></Link>
    </header>
  );
}
