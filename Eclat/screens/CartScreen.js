import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import styles from '../styles';
import CustomDrawerButton from '../components/OpenDrawerButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GalleryContext } from '../App';
import { ScrollView } from 'react-native-gesture-handler';

const Cart = () => {
  const SearchButton = require('../assets/search.png');
  const Logo = require('../assets/Logo.png');
  const deleteBtn = require('../assets/delete-button.png');
  const { cart, setCart } = useContext(GalleryContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  const removeFromCart = async (itemId) => {
    try {
      const currentCart = await AsyncStorage.getItem('cart') || '[]';
      const parsedCart = JSON.parse(currentCart);
      const newCart = parsedCart.filter((item) => item.id !== itemId);
      setCart(newCart);
      await AsyncStorage.setItem('cart', JSON.stringify(newCart));
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    setTotalPrice(total);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={[styles.homeHeader, { flexDirection: 'row' }]}>
          <Image source={Logo} style={styles.logo} />
          <Image source={SearchButton} style={[styles.headerIcon, { alignSelf: 'flex-end' }]} />
        </View>
        <View>
          <Text style={{ fontSize: 26, padding: 10, letterSpacing: 5, fontWeight: '300' }}>CHECKOUT</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingVertical: 20 }}>
            {cart.map((item) => (
              <View key={item.id} style={{ flexDirection: 'row', paddingBottom: 30, width: '100%', flex: 1 }}>
                <Image source={{ uri: item.image }} style={{ width: 120, height: 150 }} />
                <View style={{ justifyContent: 'center', gap: 10, paddingLeft: 15, width: '60%' }}>
                  <Text>{item.name}</Text>
                  <Text style={[styles.itemDescription, { flexWrap: 'wrap' }]}>{item.description}</Text>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                  <Pressable onPress={() => removeFromCart(item.id)}>
                    <Image style={{ alignSelf: 'flex-end' }} source={deleteBtn} />
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={{ flexDirection: 'row', gap: 80, paddingHorizontal: 20 }}>
          <Text style={styles.total}>EST. TOTAL</Text>
          <Text style={[styles.itemPrice, { marginLeft: 10, fontSize: 36 }]}>${totalPrice.toFixed(2)}</Text>
        </View>
      </View>
      <Pressable style={styles.checkoutButton}>
        <Image style={{width: 30, height: 30, tintColor: '#FFFFFF'}} source={require('../assets/shopping-bag.png')}/>
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </Pressable>
    </View>
  );
}

export default Cart;
