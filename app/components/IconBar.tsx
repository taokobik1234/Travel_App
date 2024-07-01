import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/AntDesign';
import { home } from '../constants/images';
import { SlideOutDown } from 'react-native-reanimated';
interface IconBarProps{
    name:string;
    color:string;
    size:number;
}
const IconBar:React.FC<IconBarProps> = ({name,color,size}) => {
  return (
    <View >
       <Icon name ={name} color={color}  size={size}/>
    </View>
  )
}

export default IconBar

const styles = StyleSheet.create({})