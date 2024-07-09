import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createContext, useState } from 'react';
import getImage from './utils/ImageLoader';
import StackNavigator from './Stack';
import Locations from './screens/LocationScreen';
import Jewel from './screens/Jewelery';
import Blogs from './screens/Blog';
import Electronics from './screens/Electronic';
import Clothing from './screens/Clothing';

const Drawer = createDrawerNavigator();
export const GalleryContext = createContext(null);

export default function App() {
  const Gallery = require('./data/galleryData.json');
  const ImageLoader = getImage();
  const [cart, setCart] = useState([]);
  const [disabled, setDisabled] = useState(true)

  return (
    <GalleryContext.Provider value={{Gallery, ImageLoader, cart, disabled, setCart, setDisabled, }}>       
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={"Store"}
          screenOptions={{
            headerShown: false
          }}
        >
          <Drawer.Screen 
            name="Store" 
            component={StackNavigator} 
            options={{
              drawerActiveTintColor: "#686868",
              drawerActiveBackgroundColor: "#E6DBD0", 
              drawerContentStyle: {
                backgroundColor: "#FFFFFF",
              },
            }}
          />
          <Drawer.Screen 
          name="Locations" 
          component={Locations} 
          options={{
            drawerActiveTintColor: "#686868",
              drawerActiveBackgroundColor: "#E6DBD0", 
              drawerContentStyle: {
                backgroundColor: "#FFFFFF",
              }
          }}/>
          <Drawer.Screen 
          name="Blog" 
          component={Blogs} 
          options={{
            drawerActiveTintColor: "#686868",
              drawerActiveBackgroundColor: "#E6DBD0", 
              drawerContentStyle: {
                backgroundColor: "#FFFFFF",
              }
          }}/>
          <Drawer.Screen 
          name="Jewelery" 
          component={Jewel} 
          options={{
            drawerActiveTintColor: "#686868",
              drawerActiveBackgroundColor: "#E6DBD0", 
              drawerContentStyle: {
                backgroundColor: "#FFFFFF",
              }
          }}/>
          <Drawer.Screen 
          name="Electronics" 
          component={Electronics} 
          options={{
            drawerActiveTintColor: "#686868",
              drawerActiveBackgroundColor: "#E6DBD0", 
              drawerContentStyle: {
                backgroundColor: "#FFFFFF",
              }
          }}/>
          <Drawer.Screen 
          name="Clothing" 
          component={Clothing} 
          options={{
            drawerActiveTintColor: "#686868",
              drawerActiveBackgroundColor: "#E6DBD0", 
              drawerContentStyle: {
                backgroundColor: "#FFFFFF",
              }
          }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </GalleryContext.Provider>
  );
}

