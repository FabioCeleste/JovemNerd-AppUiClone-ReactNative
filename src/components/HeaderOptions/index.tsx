import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import {
  Container, Options, Option, BottomBar, ButtonOption,
} from './styles';

interface Props {
  headerOptionsIndex: number;
  onChangeHeaderIndex: (newIndex: number) => void
}

const HeaderOptions: React.FC<Props> = ({ headerOptionsIndex, onChangeHeaderIndex }) => {
  const bottomBarPosition = useSharedValue(0);

  const bottomBarStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: bottomBarPosition.value }],
  }));

  useEffect(() => {
    bottomBarPosition.value = withTiming(headerOptionsIndex * 100, { duration: 200 });
  }, [headerOptionsIndex]);

  return (
    <Container>
      <Options>
        <ButtonOption onPress={() => onChangeHeaderIndex(0)}>
          <Option active={headerOptionsIndex} index={0}>TODOS</Option>
        </ButtonOption>

        <ButtonOption onPress={() => onChangeHeaderIndex(1)}>
          <Option active={headerOptionsIndex} index={1}>NOTÍCIAS</Option>
        </ButtonOption>

        <ButtonOption onPress={() => onChangeHeaderIndex(2)}>
          <Option active={headerOptionsIndex} index={2}>REVIEWS</Option>
        </ButtonOption>

        <ButtonOption onPress={() => onChangeHeaderIndex(3)}>
          <Option active={headerOptionsIndex} index={3}>ESPECIAIS</Option>
        </ButtonOption>

      </Options>

      <Animated.View style={[{ width: '25%', height: 3, backgroundColor: '#DC7F08' }, bottomBarStyle]} />
    </Container>
  );
};

export default HeaderOptions;
