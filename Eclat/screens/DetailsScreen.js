import React from "react";
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import CustomDrawerButton from "../components/CustomDrawerButton";
import styles from "../styles";

const DetailsScreen = () => {
  const Logo = require('../assets/Logo.png');
  const SearchButton = require('../assets/search.png');

  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <CustomDrawerButton style={styles.customDrawerButton}/>
        <Image  source={Logo}/>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Image style={styles.headerIcon} source={SearchButton}/>
        </View>
      </View>
      <View>
        <Text>Dress Name</Text> 
        <Pressable>
          <Text>Export Button</Text>
        </Pressable>
      </View>
      <Text>description</Text>
      <Text>Price</Text>
    </View>
  )
}

export default DetailsScreen