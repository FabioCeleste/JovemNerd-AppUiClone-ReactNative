import React, { useState, useEffect, useRef } from 'react';

import { View, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import CarouselItem from '../../@types/CarouselItem';

import {
  ImageItem, CarouselView, Dot, DotContainer, ItemType, ItemSubTitle, TextContainer,
} from './styles';

interface Props {
  items: CarouselItem[]
}

const { width } = Dimensions.get('window');

const Carousel: React.FC<Props> = (props) => {
  const [activeItem, setActiveItem] = useState(0);
  const [lastSlide, setLastSlide] = useState(0);
  const [items, setItem] = useState<CarouselItem[]>([...props.items]);
  const scrollRef = useRef<ScrollView>();

  // useEffect(() => {
  //   items.push(props.items);
  // }, []);

  function changeActiveItem({ nativeEvent }) {
    const slide = nativeEvent.contentOffset.x;

    if (activeItem === 2) {
      const oldItems = [...items];
      setItem([...oldItems, ...props.items]);
    }

    if (slide > lastSlide) {
      if (activeItem < 3) {
        const newActiveItem = activeItem + 1;
        setActiveItem(newActiveItem);
      } else {
        setActiveItem(0);
      }
      setLastSlide(slide);
    }
    if (slide < lastSlide) {
      if (activeItem < 1) {
        setActiveItem(3);
      } else {
        const newItem = activeItem - 1;
        setActiveItem(newItem);
      }
      setLastSlide(slide);
    }
  }

  return (
    <View>
      <CarouselView
        pagingEnabled
        horizontal
        ref={scrollRef}
        onMomentumScrollEnd={changeActiveItem}
        myWidth={width}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item, i) => (
          <ImageItem key={i} myWidth={width} source={item.img}>
            <TextContainer>
              <ItemType>{item.type}</ItemType>
              <ItemSubTitle>{item.subTitle}</ItemSubTitle>
            </TextContainer>
            <LinearGradient
        // Background Linear Gradient
              colors={['transparent', 'transparent', 'transparent', 'transparent', '#000']}
              style={{
                position: 'absolute',
                left: -20,
                right: 0,
                bottom: 0,
                height: 200,
              }}
            />
          </ImageItem>
        ))}
      </CarouselView>

      <DotContainer>
        {props.items.map((item, i) => (
          <Dot key={i} active={activeItem} indice={item.index} />
        ))}
      </DotContainer>
    </View>
  );
};

const styles = StyleSheet.create({

  linearGradient: {
    width,
    height: 35,
  },
});

export default Carousel;
