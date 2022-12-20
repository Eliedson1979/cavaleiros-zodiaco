import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>
        Projeto desenvolvido por
        {' '}
        <a
          href="https://www.linkedin.com/in/eliedson-gomes/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Eliedson Gomes
        </a>
        !
      </p>
      <p>
        Baseado nos Animes dos Cavaleiros dos Zodíaco
        <br />
      </p>
    </footer>
  );
}
