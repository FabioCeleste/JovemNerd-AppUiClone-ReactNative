import React, { useEffect, useState, useRef } from 'react';
import {
  FlatList, View, ScrollView, Dimensions, Button,
} from 'react-native';

import ContentItem from '../../@types/ContentItem';
import {
  Container, ContentImage, Type, SubTitle, TextContainer,
} from './styles';

interface Props {
  items: ContentItem[]
  headerOptionsIndex: number;
  onChangeHeaderIndex: (newIndex: number) => void
}

interface ContentProps {
  item: ContentItem;
}

const { width } = Dimensions.get('window');

const ContentItems: React.FC<ContentProps> = ({ item }) => (
  <Container width={width}>
    <ContentImage source={item.img} />
    <TextContainer>
      <Type>{item.type}</Type>
      <SubTitle>{item.subTitle}</SubTitle>
    </TextContainer>
  </Container>
);

const ContentList: React.FC<Props> = ({ items, headerOptionsIndex, onChangeHeaderIndex }) => {
  const [lastSlide, setLastSlide] = useState(0);
  const scrollRef = useRef<ScrollView>();

  useEffect(() => {
    scrollRef.current?.scrollTo({
      animated: true,
      y: 0,
      x: headerOptionsIndex * width,
    });

    switch (headerOptionsIndex) {
      case 0: {
        setLastSlide(0);
        break;
      }
      case 1: {
        setLastSlide(1);
        break;
      }
      case 2: {
        setLastSlide(2);
        break;
      }
      case 3: {
        setLastSlide(3);
        break;
      }
      default:
    }
  }, [headerOptionsIndex]);

  function changeActiveItem({ nativeEvent }) {
    const slide = Math.ceil(nativeEvent.contentOffset.x / width);

    if (slide > lastSlide) {
      onChangeHeaderIndex(headerOptionsIndex + 1);
    }
    if (slide < lastSlide) {
      onChangeHeaderIndex(headerOptionsIndex - 1);
    }
    setLastSlide(slide);
  }

  return (
    <ScrollView horizontal onMomentumScrollEnd={changeActiveItem} ref={scrollRef} pagingEnabled>

      <FlatList data={items} keyExtractor={(item, i) => `${i}`} renderItem={(item) => <ContentItems {...item} />} />
      <FlatList
        data={items.filter((item) => item.category === 'noticias')}
        keyExtractor={(item, i) => `${i}`}
        renderItem={(item) => <ContentItems {...item} />}
      />
      <FlatList
        data={items.filter((item) => item.category === 'reviews')}
        keyExtractor={(item, i) => `${i}`}
        renderItem={(item) => <ContentItems {...item} />}
      />
      <FlatList
        data={items.filter((item) => item.category === 'especiais')}
        keyExtractor={(item, i) => `${i}`}
        renderItem={(item) => <ContentItems {...item} />}
      />
    </ScrollView>
  );
};

export default ContentList;
