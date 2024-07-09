import React from "react";
import { Pressable, Image } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const OpenDrawerButton = () => {
  const navigation = useNavigation();
  const DrawerButton = require('../assets/Menu.png');

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <Pressable onPress={openDrawer}>
      <Image style={{height: 40, width: 35}}source={DrawerButton}/>
    </Pressable>
  )
}

export default OpenDrawerButton;