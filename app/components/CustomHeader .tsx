import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you've installed react-native-vector-icons
import { COLORS, FONTFAMILY } from '../constants';

interface CustomHeaderProps{
    title:string;
    onBackPress:any;
}
const CustomHeader:React.FC<CustomHeaderProps> = ({ title, onBackPress }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
      <Icon name="arrow-back" size={24} color={COLORS.black} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between', 
    padding: 5,
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: FONTFAMILY.poppins_bold,
    position: 'absolute', // Added
    left: 0, // Added
    right: 0, // Added
    textAlign: 'center', // Added
    zIndex: -1
  },
});

export default CustomHeader;
