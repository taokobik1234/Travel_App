import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/ScreenApp/HomeScreen';
import TransportBookingScreen from '../screens/TransportBooking/TransportBookingScreen';
const Home = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Home.Navigator screenOptions={{ headerShown: false }}>
      <Home.Screen name="HomeScreen" component={HomeScreen} />
      <Home.Screen name="TransportBooking" component={TransportBookingScreen} />
    </Home.Navigator>
  );
}
