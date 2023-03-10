import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import noImageCharacter from '../data/card-images/characters/random_none.png';
import rarityRare from '../data/card-images/items/rarity-2.png';

const testCharacter = {
  cardName: 'Wilson',
  cardDescription: 'Scientist',
  cardAttr1: '25',
  cardAttr2: '36',
  cardAttr3: '18',
  cardImage: 'URL',
  cardRare: 'raro',
  cardTrunfo: false,
  customCard: false,
};

describe('Card details', () => {
  it('Should render the card name', () => {
    render(<Card {...testCharacter} />);
    const name = screen.getByTestId('name-card');

    expect(name).toBeInTheDocument();
    expect(name.textContent).toBe('Wilson');
  });

  it('Should render the card description', () => {
    render(<Card {...testCharacter} />);
    const desc = screen.getByTestId('description-card');

    expect(desc).toBeInTheDocument();
    expect(desc.textContent).toBe('Scientist');
  });

  it('Should render the card attributes', () => {
    render(<Card {...testCharacter} />);
    const attr1 = screen.getByTestId('attr1-card');
    const attr2 = screen.getByTestId('attr2-card');
    const attr3 = screen.getByTestId('attr3-card');

    expect(attr1).toBeInTheDocument();
    expect(attr1.textContent).toBe('25');
    expect(attr2).toBeInTheDocument();
    expect(attr2.textContent).toBe('36');
    expect(attr3).toBeInTheDocument();
    expect(attr3.textContent).toBe('18');
  });

  it('Should render the card rarity', () => {
    render(<Card {...testCharacter} />);
    const rarityText = screen.getByTestId('rare-card');
    const rarityImg = screen.getByAltText(testCharacter.cardRare);

    expect(rarityText).toBeInTheDocument();
    expect(rarityImg).toBeInTheDocument();
    expect(rarityText.textContent).toBe(testCharacter.cardRare);
    expect(rarityImg).toHaveAttribute('src', rarityRare);
  });

  it('Should render a predefined card image after the page loads', () => {
    render(<Card { ...testCharacter } cardImage="" />);

    const predefinedImage = screen.getByAltText(/sem rosto/i);
    expect(predefinedImage).toBeInTheDocument();
    expect(predefinedImage).toHaveAttribute('src', noImageCharacter);
  });

  it('Should render the card image', () => {
    render(<Card {...testCharacter} />);
    const image = screen.getByTestId('image-card');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', testCharacter.name);
    expect(image).toHaveAttribute('src', testCharacter.cardImage);
  });

  it('Should not render the "card trunfo" message', () => {
    render(<Card {...testCharacter} />);
    const trunfo = screen.queryByTestId('trunfo-card');

    expect(trunfo).not.toBeInTheDocument();
  });

  it('Should render the "card trunfo" message if is a trunfo card', () => {
    render(<Card {...testCharacter} cardTrunfo={true} />);
    const trunfo = screen.getByTestId('trunfo-card');

    expect(trunfo).toBeInTheDocument();
    expect(trunfo.textContent).toBe('Super Trunfo');
  });
});
