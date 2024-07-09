import React from "react";
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import CustomDrawerButton from "../components/CustomDrawerButton";
import styles from "../styles";
import getIcon from "../utils/IconLoader";
import Precautions from "../data/previewData.json"; // Assuming Precautions is imported correctly

const DetailsScreen = () => {
  const Logo = require('../assets/Logo.png');
  const SearchButton = require('../assets/search.png');
  const imageView = require('../assets/dress1.png');

  return (
    <View style={[styles.container, { paddingBottom: 20 }]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.homeHeader}>
          <CustomDrawerButton style={styles.customDrawerButton}/>
          <Image source={Logo}/>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Image style={styles.headerIcon} source={SearchButton}/>
          </View>
        </View>
        <View style={{ flex: 2, width: '100%', height: 480 }}>
          <Image style={{ width: 370, height: 480 }} source={imageView}/>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 }}>
            <Text style={{ fontSize: 20 }}>Dress Name</Text>
            <Pressable>
              <Image source={require('../assets/export.png')} />
            </Pressable>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={{ color: '#808080', fontSize: 22 }}>Description</Text>
            <Text style={[styles.itemPrice, { fontSize: 30 }]}>Price</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>MATERIALS</Text>
            <Text style={{ color: '#808080', fontSize: 22, paddingHorizontal: 25, paddingVertical: 20 }}>
              We work with monitoring programmes to ensure compliance
            </Text>
          </View>
          {Precautions.map((item) => (
            <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 10 }}>
              <Image source={getIcon(item.id)} style={{ width: 30, height: 30, marginRight: 10 }} />
              <Text style={{ color: '#808080', fontSize: 18 }}>{item.name}</Text>
            </View>
          ))}
        </View>
        {/* Adding some additional space at the bottom */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

export default DetailsScreen;
