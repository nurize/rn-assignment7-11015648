import React from "react";
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import CustomDrawerButton from "../components/OpenDrawerButton";
import styles from "../styles";
import getIcon from "../utils/IconLoader";
import Precautions from "../data/previewData.json";
import { useContext } from "react";
import { GalleryContext } from "../App";

const DetailsScreen = ({ route }) => {
  const { image, description, name, price, category } = route.params;
  const Logo = require('../assets/Logo.png');
  const SearchButton = require('../assets/search.png');
  const { Gallery } = useContext(GalleryContext);

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.container, { paddingBottom: 20 }]}>
          <View style={styles.homeHeader}>
            <CustomDrawerButton style={styles.customDrawerButton} />
            <Image source={Logo} />
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <Image style={styles.headerIcon} source={SearchButton} />
            </View>
          </View>
          <View style={{ flex: 2, width: '100%', height: 480 }}>
            <Image style={{ width: '100%', height: '100%' }} source={{ uri: image }} />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 }}>
              <Text style={{fontSize: 24, textTransform: 'uppercase'}}>{category}</Text>
              <Pressable>
                <Image source={require('../assets/export.png')} />
              </Pressable>
            </View>
            <View style={{ marginBottom: 30 }}>
              <Text style={{ fontSize: 22, color: '#808080' }}>{name}</Text>
              <Text style={[styles.itemPrice, { fontSize: 30, paddingVertical: 10 }]}>${price}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 24, letterSpacing: 4, }}>MATERIALS</Text>
              <Text style={{ color: '#808080', fontSize: 22, paddingHorizontal: 25, paddingVertical: 20 }}>
                We work with monitoring programmes to ensure compliance
              </Text>
              <Text style={{ color: '#808080', fontSize: 22 }}>{description}</Text>
            </View>
              {Precautions.map((item) => (
                <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 1, marginTop: 10 }}>
                  <Image source={getIcon(item.id)} style={{ width: 30, height: 30, marginRight: 10 }} />
                  <Text style={{ color: '#808080', fontSize: 20 }}>{item.name}</Text>
            </View>
            ))}
          </View>
          {/* Adding some additional space before the button */}
          <View style={{ height: 20 }} />
          <View>
            <Image style={{width: 30, height: 30, tintColor: '#FFFFFF'}} source={require('../assets/delivery-car.png')}/>
          </View>
        </View>
        <Pressable style={[styles.checkoutButton, {marginTop: 50}]}>
          <Image style={{width: 28, height: 28, tintColor: '#FFFFFF'}} source={require('../assets/plus.png')}/>
          <Text style={[styles.checkoutText, {fontSize: 18, marginRight: 80}]}>ADD TO BASKET</Text>
          <Image style={{width: 30, height: 30, tintColor: '#FFFFFF'}} source={require('../assets/heart.png')}/>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default DetailsScreen;
