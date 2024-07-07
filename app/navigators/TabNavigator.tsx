import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator from './HomeNavigator'
import BookingStackNavigator from './BookingNavigator'
import NotificationScreen from '../screens/ScreenApp/NotificationScreen'
import AccountStackNavigator from './AccountNavigator'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CustomIcon from '../components/CustomIcon'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconBar from '../components/IconBar'
import { COLORS } from '../constants'
import { BlurView } from '@react-native-community/blur'

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator  
    screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { 
          display: getTabBarVisibility(route),
          height: 80,
          position: 'absolute',
          backgroundColor: COLORS.black,
          borderTopWidth: 0,
          elevation: 0,
          borderTopColor: 'transparent'
        }
    })}>
        <Tab.Screen 
            name='Home' 
            component={HomeNavigator}
            options={{
                tabBarIcon: ({focused,color,size}) =>(
                    <IconBar
                        name="home"
                        size ={25}
                        color={
                            focused? COLORS.primaryOrangeHex: COLORS.white
                        }
                    />
                )
            }}></Tab.Screen>
        <Tab.Screen 
            name='Booking' 
            component={BookingStackNavigator}
            options={{
                tabBarIcon: ({focused,color,size}) =>(
                    <Icon
                        name="ticket-confirmation-outline"
                        size ={25}
                        color={
                            focused? COLORS.primaryOrangeHex: COLORS.white
                        }
                    />
                )
            }}
            ></Tab.Screen>
        <Tab.Screen 
            name='Notification' 
            component={NotificationScreen}
            options={{
                tabBarIcon: ({focused,color,size}) =>(
                    <IconBar
                        name="bells"
                        size ={25}
                        color={
                            focused? COLORS.primaryOrangeHex: COLORS.white
                        }
                    />
                )
            }}
            ></Tab.Screen>
        <Tab.Screen 
            name='Account' 
            component={AccountStackNavigator}
            options={{
                tabBarIcon: ({focused,color,size}) =>(
                    <SimpleLineIcons
                        name="user"
                        size ={25}
                        color={
                            focused? COLORS.primaryOrangeHex: COLORS.white
                        }
                    />
                )
            }}></Tab.Screen>
    </Tab.Navigator>
  )
}

const getTabBarVisibility = (route:any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'DefaultScreen';
  
    // List of screens where the tab bar should be hidden
    const hideOnScreens = ['Flights','Filters','SelectSeats','BoardingPass'];
    if (hideOnScreens.includes(routeName)) {
      return 'none';  // Hide tab bar
    }
    return 'flex';  // Show tab bar
  };
  

const styles = StyleSheet.create({
    // tabBarStyle:{
    //     display:getTabBarVisibility(route),
    //     height: 80,
    //     position :'absolute',
    //     backgroundColor:COLORS.black,
    //     borderTopWidth: 0,
    //     elevation: 0,
    //     borderTopColor:'transparent',
    // },
    BlurViewStyle:{
        position:'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right:0,
    }
})
export default TabNavigator