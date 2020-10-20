import React from 'react';
import { Text, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import drawerImage from '../../../assets/imgs/drawerimage.jpg';
import Home from '../../screens/Home';
import {
  DrawerItem, WhiteText, OrangeText, RedText, DrawerImage, DrawerImageText,
} from './styles';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <DrawerContentScrollView style={{ backgroundColor: '#000' }}>
      <DrawerImage source={drawerImage}>
        <DrawerImageText>O mundo pop vira piada no Jovem Nerd</DrawerImageText>
      </DrawerImage>

      <DrawerItem>
        <AntDesign name="rocket1" color="white" size={24} />
        <WhiteText>Nerd</WhiteText>
        <OrangeText>Bunker</OrangeText>
      </DrawerItem>

      <DrawerItem>
        <AntDesign name="caretright" color="white" size={24} />
        <WhiteText>Vídeos</WhiteText>
      </DrawerItem>

      <DrawerItem>
        <FontAwesome name="microphone" color="white" size={24} />
        <WhiteText>Nerd</WhiteText>
        <RedText>Cast</RedText>
      </DrawerItem>

      <DrawerItem>
        <FontAwesome name="shopping-cart" color="white" size={24} />
        <WhiteText>NerdStore</WhiteText>
      </DrawerItem>

      <DrawerItem>
        <FontAwesome name="cog" color="white" size={24} />
        <WhiteText>Ajuste</WhiteText>
      </DrawerItem>

    </DrawerContentScrollView>
  );
}

const RootNavigator = () => (
  <Drawer.Navigator drawerContent={() => <DrawerContent />}>
    <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
);

export default RootNavigator;
