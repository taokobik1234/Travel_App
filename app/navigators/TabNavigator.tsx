import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/ScreenApp/HomeScreen'
import BookingScreen from '../screens/ScreenApp/BookingScreen'
import NotificationScreen from '../screens/ScreenApp/NotificationScreen'
import AccountScreen from '../screens/ScreenApp/AccountScreen'

import CustomIcon from '../components/CustomIcon'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import IconBar from '../components/IconBar'
import { COLORS } from '../constants'
import { BlurView } from '@react-native-community/blur'

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator  
        screenOptions={{
            tabBarHideOnKeyboard:true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground:() =>(
                <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyle}/>
            )
            }}>
        <Tab.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
                tabBarIcon: ({focused,color,size}) =>(
                    <IconBar
                        name="home"
                        size ={25}
                        color={
                            focused? COLORS.blue: COLORS.white
                        }
                    />
                )
            }}></Tab.Screen>
        <Tab.Screen 
            name='Booking' 
            component={BookingScreen}
            options={{
                tabBarIcon: ({focused,color,size}) =>(
                    <SimpleLineIcons
                        name="map"
                        size ={25}
                        color={
                            focused? COLORS.blue: COLORS.white
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
                            focused? COLORS.blue: COLORS.white
                        }
                    />
                )
            }}
            ></Tab.Screen>
        <Tab.Screen 
            name='Account' 
            component={AccountScreen}
            options={{
                tabBarIcon: ({focused,color,size}) =>(
                    <SimpleLineIcons
                        name="user"
                        size ={25}
                        color={
                            focused? COLORS.blue: COLORS.white
                        }
                    />
                )
            }}></Tab.Screen>
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    tabBarStyle:{
        height: 80,
        position :'absolute',
        backgroundColor:COLORS.black,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor:'transparent',
    },
    BlurViewStyle:{
        position:'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right:0,
    }
})
export default TabNavigator