import React from 'react';
import {
  FlatList, View, ScrollView, Dimensions,
} from 'react-native';
import ContentItem from '../../@types/ContentItem';

import {
  Container, ContentImage, Type, SubTitle, TextContainer,
} from './styles';

interface Props {
  items: ContentItem[]
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

const ContentList: React.FC<Props> = ({ items }) => (
  <ScrollView horizontal pagingEnabled style={{ height: '25%' }}>
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

export default ContentList;
