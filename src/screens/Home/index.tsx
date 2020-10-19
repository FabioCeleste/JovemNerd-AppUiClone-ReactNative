import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import HeaderOptions from '../../components/HeaderOptions';
import Main from '../../components/Main';

import mtg from '../../../assets/imgs/mtg.png';
import theboys from '../../../assets/imgs/theboys.png';
import theoffice from '../../../assets/imgs/theoffice.png';
import coding from '../../../assets/imgs/coding.png';
import digimon from '../../../assets/imgs/digimon.png';
import mafia from '../../../assets/imgs/mafia.png';
import country from '../../../assets/imgs/country.png';

import ContentItem from '../../@types/ContentItem';

const ContentItems: ContentItem[] = [
  {
    type: 'nerdcast',
    subTitle: 'Magic The gathering',
    img: mtg,
    index: 0,
    category: 'nerdcast',
  },
  {
    type: 'nerdcast',
    subTitle: 'The Office',
    img: theoffice,
    index: 1,
    category: 'nerdcast',
  },
  {
    type: 'nerdcast',
    subTitle: 'The Boys',
    img: theboys,
    index: 2,
    category: 'nerdcast',
  },
  {
    type: 'nerdcast',
    subTitle: 'Coding',
    img: coding,
    index: 3,
    category: 'nerdcast',
  },
  {
    type: 'Games',
    subTitle: 'Digimon Survive, novo RPG de estratégia da franquia, é adiado para 2021',
    img: digimon,
    index: 4,
    category: 'noticias',
  },
  {
    type: 'Filmes',
    subTitle: 'Por que a música Country Roads está em tantos filmes e jogos?',
    img: country,
    index: 4,
    category: 'especiais',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Digimon Survive, novo RPG de estratégia da franquia, é adiado para 2021',
    img: digimon,
    index: 4,
    category: 'noticias',
  },
  {
    type: 'Filmes',
    subTitle: 'Por que a música Country Roads está em tantos filmes e jogos?',
    img: country,
    index: 4,
    category: 'especiais',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Digimon Survive, novo RPG de estratégia da franquia, é adiado para 2021',
    img: digimon,
    index: 4,
    category: 'noticias',
  },
  {
    type: 'Filmes',
    subTitle: 'Por que a música Country Roads está em tantos filmes e jogos?',
    img: country,
    index: 4,
    category: 'especiais',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Digimon Survive, novo RPG de estratégia da franquia, é adiado para 2021',
    img: digimon,
    index: 4,
    category: 'noticias',
  },
  {
    type: 'Filmes',
    subTitle: 'Por que a música Country Roads está em tantos filmes e jogos?',
    img: country,
    index: 4,
    category: 'especiais',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Digimon Survive, novo RPG de estratégia da franquia, é adiado para 2021',
    img: digimon,
    index: 4,
    category: 'noticias',
  },
  {
    type: 'Filmes',
    subTitle: 'Por que a música Country Roads está em tantos filmes e jogos?',
    img: country,
    index: 4,
    category: 'especiais',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Digimon Survive, novo RPG de estratégia da franquia, é adiado para 2021',
    img: digimon,
    index: 4,
    category: 'noticias',
  },
  {
    type: 'Filmes',
    subTitle: 'Por que a música Country Roads está em tantos filmes e jogos?',
    img: country,
    index: 4,
    category: 'especiais',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Digimon Survive, novo RPG de estratégia da franquia, é adiado para 2021',
    img: digimon,
    index: 4,
    category: 'noticias',
  },
  {
    type: 'Filmes',
    subTitle: 'Por que a música Country Roads está em tantos filmes e jogos?',
    img: country,
    index: 4,
    category: 'especiais',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
  {
    type: 'Games',
    subTitle: 'Digimon Survive, novo RPG de estratégia da franquia, é adiado para 2021',
    img: digimon,
    index: 4,
    category: 'noticias',
  },
  {
    type: 'Filmes',
    subTitle: 'Por que a música Country Roads está em tantos filmes e jogos?',
    img: country,
    index: 4,
    category: 'especiais',
  },
  {
    type: 'Games',
    subTitle: 'Mafia: Definitive Edition | Review',
    img: mafia,
    index: 4,
    category: 'reviews',
  },
];

const Home: React.FC = () => (

  <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <Header />
    <HeaderOptions />
    <Main items={ContentItems} />
  </View>

);

export default Home;
