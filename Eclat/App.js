import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createContext, useState, useEffect } from 'react';
import getImage from './utils/ImageLoader';
import StackNavigator from './Stack';
import Locations from './screens/LocationScreen';
import Jewel from './screens/Jewelery';
import Blogs from './screens/Blog';
import Electronics from './screens/Electronic';
import Clothing from './screens/Clothing';
import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();
export const GalleryContext = createContext(null);

export default function App() {
  const [Gallery, setGallery] = useState([]);
  const fetchProducts = async () => {
    try {
      const [womenResponse, menResponse] = await Promise.all([
        fetch('https://fakestoreapi.com/products/category/women\'s%20clothing?limit=6'), 
        fetch('https://fakestoreapi.com/products/category/men\'s%20clothing?limit=6')
      ]);

      if (!womenResponse.ok || !menResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const womenData = await womenResponse.json();
      const menData = await menResponse.json();
      
      setGallery([...womenData, ...menData]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const ImageLoader = getImage();
  const [cart, setCart] = useState([]);
  const [userName, setUserName] = useState("Eric Atsu");

  return (
    <GalleryContext.Provider value={{ Gallery, ImageLoader, cart, setCart, userName, setUserName }}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
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
