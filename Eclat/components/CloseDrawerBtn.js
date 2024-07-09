import React from "react";
import { Pressable, Image } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const CloseDrawerBtn = () => {
  const navigation = useNavigation();
  const DrawerButton = require('../assets/close.png');

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  return (
    <Pressable style={{padding: 15, marginBottom: 20}} onPress={closeDrawer}>
      <Image style={{width: 25, height: 25, opacity: 0.6}} source={DrawerButton}/>
    </Pressable>
  )
}

export default CloseDrawerBtn;