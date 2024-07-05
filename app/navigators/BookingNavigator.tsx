import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from '../screens/ScreenApp/BookingScreen';
import TransportBookingScreen from '../screens/TransportBooking/TransportBookingScreen';
import FlightsScreen from '../screens/TransportBooking/FlightsScreen';
import FiltersScreen from '../screens/TransportBooking/FiltersScreen';
import SelectSeatsScreen from '../screens/TransportBooking/SelectSeatsScreen';
const BookingStack = createStackNavigator();

export default function BookingStackNavigator() {
  return (
    <BookingStack.Navigator screenOptions={{ headerShown: false }}>
      <BookingStack.Screen name="BookingHome" component={BookingScreen} />
      <BookingStack.Screen name="TransportBooking" component={TransportBookingScreen} />
      <BookingStack.Screen name="Flights" component={FlightsScreen} />
      <BookingStack.Screen name="Filters" component={FiltersScreen} />
      <BookingStack.Screen name="SelectSeats" component={SelectSeatsScreen} />
    </BookingStack.Navigator>
  );
}
