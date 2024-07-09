import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
  )
}

export default StackNavigator;