import React from 'react';
import { ScrollView } from 'react-native';

import { TextContainer, Text, ScrollContainer } from './styles';

const ContentItemArray = [
  'AGENDA NERD',
  'ANIMES E MANGÁS',
  'CIÊNCIA E TECNOLOGIA',
  'CRÍTICAS',
  'DICAS DA REDAÇÃO',
  'ENTREVISTAS',
  'ESPORTS',
  'ETC',
  'EXPLICANDO',
  'FILMES',
  'GAMES',
  'HQS E LIVROS',
  'LISTA',
  'REVIEWS',
  'SÉRIES E TV',
];

const FlatItem: React.Fc = ({ item }) => (
  <TextContainer>
    <Text>{item}</Text>
  </TextContainer>
);

const ContentFilter: React.FC<Props> = ({ items }) => (
  <ScrollContainer>
    <ScrollView horizontal>
      {ContentItemArray.map((item) => (
        <TextContainer>
          <Text>{item}</Text>
        </TextContainer>
      ))}
    </ScrollView>
  </ScrollContainer>
);

export default ContentFilter;
