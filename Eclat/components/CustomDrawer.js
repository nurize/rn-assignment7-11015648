import { Text, View, } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import CloseDrawerBtn from './CloseDrawerBtn';
import { useContext } from 'react';
import { GalleryContext } from '../App';
import styles from '../styles';

const CustomDrawer = props => {
  const { userName } = useContext(GalleryContext);
  return (
    <DrawerContentScrollView {...props}>
      <CloseDrawerBtn />
      <View style={{paddingBottom: 30}}>      
        <Text style={styles.drawerUserNm}>{userName}</Text>
        <View style={styles.drawerLine}></View>
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
