import saori from '../card-images/characters/saori_atena.png';
import seiya from '../card-images/characters/pegaso.png';
import shiryu from '../card-images/characters/dragao.png';
import ikki from '../card-images/characters/fenix.png';
import shun from '../card-images/characters/andromeda.png';
import hyoga from '../card-images/characters/cisne.png';
import aquarios from '../card-images/characters/aquarios.png';
import ares from '../card-images/characters/ares.png';
import cancer from '../card-images/characters/cancer.png';
import capricornio from '../card-images/characters/capricornio.png';
import escorpiao from '../card-images/characters/escorpiao.png';
import gemeos from '../card-images/characters/gemeos.png';
import leao from '../card-images/characters/leao.png';
import peixes from '../card-images/characters/peixes.png';
import libra from '../card-images/characters/libra.png';
import sargitario from '../card-images/characters/sargitario.png';
import touro from '../card-images/characters/touro.png';
import virgem from '../card-images/characters/virgem.png';

const defaultChars = [
  {
    cardName: 'Saori',
    cardDescription:
      `Saori Kido (Kido Saori) é a reencarnação
      da deusa Atena no século XX.`,
    cardAttr1: '41',
    cardAttr2: '31',
    cardAttr3: '29',
    cardImage: saori,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Seiya',
    cardDescription:
      `Seiya de Pégaso, simplesmente conhecido como Seiya,
      é um personagem fictício da série de mangá Saint Seiya criada por Masami Kurumada.`,
    cardAttr1: '41',
    cardAttr2: '31',
    cardAttr3: '29',
    cardImage: seiya,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Shiryu',
    cardDescription:
      `Dragon Shiryū é um personagem fictício do universo
      Saint Seiya criado por Masami Kurumada.`,
    cardAttr1: '28',
    cardAttr2: '72',
    cardAttr3: '31',
    cardImage: shiryu,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Ikki',
    cardDescription:
      `Ikki significa "Uma Luz", o que poderia se referir
      à luz criado pelo fogo.`,
    cardAttr1: '34',
    cardAttr2: '43',
    cardAttr3: '58',
    cardImage: ikki,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Shun',
    cardDescription:
      `Andromeda Shun é uma protagonista da franquia de
      mídia Saint Seiya,.`,
    cardAttr1: '64',
    cardAttr2: '22',
    cardAttr3: '61',
    cardImage: shun,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Hyoga',
    cardDescription:
      `Hyoga é um personagem principal da série de mangá
      Saint Seiya.`,
    cardAttr1: '42',
    cardAttr2: '74',
    cardAttr3: '21',
    cardImage: hyoga,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Aquario',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Aquário
      no Santuário.`,
    cardAttr1: '44',
    cardAttr2: '24',
    cardAttr3: '41',
    cardImage: aquarios,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Ares',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Ares
      no Santuário.`,
    cardAttr1: '31',
    cardAttr2: '38',
    cardAttr3: '39',
    cardImage: ares,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Cancer',
    cardDescription:
      `Cavaleiro de Ouro que protege
      a Casa de Cancer no Santuário.`,
    cardAttr1: '25',
    cardAttr2: '36',
    cardAttr3: '24',
    cardImage: cancer,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Capricornio',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Capricornio
      no Santuário.`,
    cardAttr1: '28',
    cardAttr2: '64',
    cardAttr3: '29',
    cardImage: capricornio,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Escorpiao',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Escorpiao
      no Santuário.`,
    cardAttr1: '43',
    cardAttr2: '31',
    cardAttr3: '39',
    cardImage: escorpiao,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Gemeos',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Gemeos
      no Santuário.`,
    cardAttr1: '37',
    cardAttr2: '69',
    cardAttr3: '38',
    cardImage: gemeos,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Leao',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Leao
      no Santuário.`,
    cardAttr1: '58',
    cardAttr2: '31',
    cardAttr3: '42',
    cardImage: leao,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Peixes',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Peixes
      no Santuário.`,
    cardAttr1: '67',
    cardAttr2: '29',
    cardAttr3: '64',
    cardImage: peixes,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Libra',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Libra
      no Santuário.`,
    cardAttr1: '46',
    cardAttr2: '21',
    cardAttr3: '39',
    cardImage: libra,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Sargitario',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Sargitario
      no Santuário.`,
    cardAttr1: '32',
    cardAttr2: '31',
    cardAttr3: '67',
    cardImage: sargitario,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Touro',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Touro
      no Santuário.`,
    cardAttr1: '61',
    cardAttr2: '43',
    cardAttr3: '54',
    cardImage: touro,
    cardRare: 'normal',
    cardTrunfo: false,
  },
  {
    cardName: 'Camus Virgem',
    cardDescription:
      `Cavaleiro de Ouro que protege a Casa de Virgem
      no Santuário.`,
    cardAttr1: '37',
    cardAttr2: '31',
    cardAttr3: '41',
    cardImage: virgem,
    cardRare: 'normal',
    cardTrunfo: false,
  },
];

export default defaultChars;
