import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {
  Container, TextHeader, TextBunker, LeftHeader, RightHeader,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <LeftHeader>
      <AntDesign name="bars" size={28} color="white" />

      <TextHeader>
        <TextHeader>
          Nerd
          <TextBunker>
            Bunker
          </TextBunker>
        </TextHeader>
      </TextHeader>
    </LeftHeader>

    <RightHeader>
      <AntDesign name="search1" size={28} color="white" />
    </RightHeader>
  </Container>
);

export default Header;
