import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/ScreenApp/AccountScreen';
import PersonalInfoScreen from '../screens/ScreenApp/PersonalInfoScreen';
const AccountStack = createStackNavigator();

export default function AccountStackNavigator() {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="AccountScreen" component={AccountScreen} />
      <AccountStack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
    </AccountStack.Navigator>
  );
}
