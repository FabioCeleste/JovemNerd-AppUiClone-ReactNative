import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import {
  Container, Options, Option, BottomBar, ButtonOption,
} from './styles';

const HeaderOptions: React.FC = () => {
  const [active, setActive] = useState(0);

  const bottomBarPosition = useSharedValue(0);

  useEffect(() => {

  }, []);

  const bottomBarStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: bottomBarPosition.value }],
  }));

  function changeActiveMenus(index: number, borderPosition: number) {
    setActive(index);
    bottomBarPosition.value = withTiming(borderPosition, { duration: 500 });
  }

  return (
    <Container>
      <Options>
        <ButtonOption onPress={() => changeActiveMenus(0, 0)}>
          <Option active={active} index={0}>TODOS</Option>
        </ButtonOption>

        <ButtonOption onPress={() => changeActiveMenus(1, 100)}>
          <Option active={active} index={1}>TODOS</Option>
        </ButtonOption>

        <ButtonOption onPress={() => changeActiveMenus(2, 200)}>
          <Option active={active} index={2}>TODOS</Option>
        </ButtonOption>

        <ButtonOption onPress={() => changeActiveMenus(3, 300)}>
          <Option active={active} index={3}>TODOS</Option>
        </ButtonOption>

      </Options>

      <Animated.View style={[{ width: '25%', height: 3, backgroundColor: '#DC7F08' }, bottomBarStyle]} />
    </Container>
  );
};

export default HeaderOptions;
