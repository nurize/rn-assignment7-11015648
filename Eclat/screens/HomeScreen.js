import { Text, View, Image, StatusBar, ImageBackground, Pressable, SafeAreaView } from 'react-native';
import styles from '../styles';
import OpenDrawerButton from '../components/OpenDrawerButton';
import { FlatList } from 'react-native-gesture-handler';
import getImage from '../utils/ImageLoader';
import { useState, useContext } from 'react';
import { GalleryContext } from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const Logo = require('../assets/Logo.png');
  const SearchButton = require('../assets/search.png');
  const ShoppingBag = require('../assets/shopping-bag.png');
  const ListView = require('../assets/Listview.png');
  const Filter = require('../assets/Filter.png');
  const { Gallery, setCart, cart } = useContext(GalleryContext);
  const addButton = require('../assets/add_circle.png');
  const navigation = useNavigation();

  const [numColumns, setNumColumns] = useState(2);

  const handlePress = (ItemId) => {
    navigation.navigate("Details", { id: ItemId });
  }

  const handleAddToCart = (item) => {
    const cartItem = {
      id: cart.length + 1,
      itemId: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
    };
    setCart((prevCart) => [...prevCart, cartItem]);
    storeCart();
    console.log(cart);
  }

  const storeCart = async () => {
    try {
      const cartJson = JSON.stringify(cart);
      await AsyncStorage.setItem('cart', cartJson);
    } catch (error) {
      console.error('Cart storage error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.homeHeader}>
        <OpenDrawerButton style={styles.customDrawerButton} />
        <Image source={Logo} />
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <Pressable>
            <Image style={styles.headerIcon} source={SearchButton} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Cart")}>
            <Image style={styles.headerIcon} source={ShoppingBag} />
          </Pressable>
        </View>
      </View>
      <View style={[
        styles.homeHeader,
        { columnGap: 45, marginRight: 20 }
      ]}>
        <Text style={{ fontSize: 26, padding: 10, letterSpacing: 5 }}>OUR STORY</Text>
        <View style={styles.subHeaderText}>
          <View style={styles.iconBackground}>
            <Image style={{ margin: 10, width: 30, height: 30, }} source={ListView} />
          </View>
          <View style={styles.iconBackground}>
            <Image style={[styles.headerIcon, { margin: 10 }]} source={Filter} />
          </View>
        </View>
      </View>
      <SafeAreaView style={{ width: '100%', flex: 1 }}>
        <FlatList
          data={Gallery}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          renderItem={({ item }) => {
            return (
              <View style={styles.galleryContainer}>
                <View style={styles.galleryItemContainer}>
                  <ImageBackground style={styles.galleryItem} source={{ uri: item.image }}>
                    <Pressable onPress={() => handleAddToCart(item)}>
                      <Image style={styles.addButton} source={addButton} />
                    </Pressable>
                  </ImageBackground>
                  <Pressable onPress={() => handlePress(item.id)}>
                    <Text style={styles.itemName}>{item.title}</Text>
                    <Text style={styles.itemDescription}>{item.category}</Text>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                  </Pressable>
                </View>
              </View>
            )
          }}
        />
      </SafeAreaView>
    </View>
  );
}

export default Home;
