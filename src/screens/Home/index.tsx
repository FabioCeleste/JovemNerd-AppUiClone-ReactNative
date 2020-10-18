import React from 'react';
import { View, StatusBar } from 'react-native';

import Header from '../../components/Header';
import HeaderOptions from '../../components/HeaderOptions';
import Carousel from '../../components/Carousel';

import mtg from '../../../assets/imgs/mtg.png';
import theboys from '../../../assets/imgs/theboys.png';
import theoffice from '../../../assets/imgs/theoffice.png';
import coding from '../../../assets/imgs/coding.png';
import CarouselItem from '../../@types/CarouselItem';

const CarouselItems: CarouselItem[] = [
  {
    type: 'nerdcast',
    subTitle: 'Magic The gathering',
    img: mtg,
    index: 0,
  },
  {
    type: 'nerdcast',
    subTitle: 'The Office',
    img: theoffice,
    index: 1,
  },
  {
    type: 'nerdcast',
    subTitle: 'The Boys',
    img: theboys,
    index: 2,
  },
  {
    type: 'nerdcast',
    subTitle: 'Coding',
    img: coding,
    index: 3,
  },
];

const Home: React.FC = () => (
  <View style={{ marginTop: StatusBar.currentHeight }}>
    <Header />
    <HeaderOptions />
    <Carousel items={CarouselItems} />
  </View>
);

export default Home;
