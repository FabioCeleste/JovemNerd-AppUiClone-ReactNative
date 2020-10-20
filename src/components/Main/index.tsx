import React from 'react';
import { ScrollView, View } from 'react-native';

import ContentItem from '../../@types/ContentItem';

import Carousel from '../Carousel';
import ContentFilter from '../ContentFilter';
import ContentList from '../ContentList';
// import { Container } from './styles';

interface Props {
  items: ContentItem[]
  headerOptionsIndex: number;
  onChangeHeaderIndex: (newIndex: number) => void
}

const Main: React.FC<Props> = ({ items, headerOptionsIndex, onChangeHeaderIndex }) => {
  const toCarousel: ContentItem[] = [];
  for (let i = 0; i < 4; i++) {
    toCarousel.push(items[i]);
  }

  return (
    <ScrollView stickyHeaderIndices={[1]} nestedScrollEnabled>
      <Carousel items={toCarousel} />
      <ContentFilter />
      <ContentList items={items} headerOptionsIndex={headerOptionsIndex} onChangeHeaderIndex={onChangeHeaderIndex} />
    </ScrollView>
  );
};

export default Main;
