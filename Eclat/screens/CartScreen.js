import { Text, View, Image, FlatList, Pressable } from 'react-native';
import styles from '../styles';
import CustomDrawerButton from '../components/CustomDrawerButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useState } from 'react';
import { GalleryContext } from '../App';
import getImage from '../utils/ImageLoader';
import { ScrollView } from 'react-native-gesture-handler';

const Cart = () => {
  const SearchButton = require('../assets/search.png');
  const Logo = require('../assets/Logo.png');
  const deleteBtn = require('../assets/delete-button.png');
  const { cart, setCart } = useContext(GalleryContext);

  const removeFromCart = async (itemId, setCart) => {
    try {
      const currentCart = await AsyncStorage.getItem('cart') || '[]';
      const parsedCart =  JSON.parse(currentCart);
      const newCart = parsedCart.filter((item) => item.id !== itemId);
      setCart(newCart)
      await AsyncStorage.setItem('cart', JSON.stringify(newCart));
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.homeHeader, {flexDirection: 'row'}]}>
            <CustomDrawerButton style={styles.customDrawerButton}/>
            <Image source={Logo} style={[styles.logo]} />
            <Image source={SearchButton} style={[styles.headerIcon, {alignSelf: 'flex-end'}]} />
          </View>
          <View>
            <Text style={{fontSize: 26, padding: 10, letterSpacing: 5, fontWeight: '300'}}>CHECKOUT</Text>
          </View>
          <View style={{paddingVertical: 20,}}>
            <FlatList 
              data={cart}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <View style={
                    {
                      flexDirection: 'row', 
                      paddingBottom: 30, 
                      width: '100%', 
                      flex: 1,
                    }}>
                    <Image source={getImage(item.itemId)} />
                    <View style={
                      {
                        justifyContent: 'center', 
                        gap: 10, 
                        paddingHorizontal: 15, 
                        width: '50%',
                      }}>
                      <Text>{item.name}</Text>
                      <View style={
                        { 
                          flexWrap: 'wrap',
                        }}>
                        <Text style={
                          [
                            styles.itemDescription, 
                            {
                              flexWrap: 'wrap'
                          }]}>
                          {item.description}
                        </Text>
                      </View>
                      <Text style={styles.itemPrice}>{item.price}</Text>
                      <Pressable onPress={() => removeFromCart(item.id, setCart)}>
                        <Image style={{alignSelf: 'flex-end'}} source={deleteBtn} />
                      </Pressable>
                    </View>
                  </View>
                )
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Cart;


