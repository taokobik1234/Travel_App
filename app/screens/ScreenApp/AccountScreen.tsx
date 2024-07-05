import React, { useState,useEffect,useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS,FONTFAMILY } from '../../constants';
import { avatar } from '../../constants/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loadUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error reading value', e);
    return null;
  }
};
const AccountScreen = ({navigation}:any) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    profileImage: 'https://via.placeholder.com/150'
  });
  const options = [
    { icon: 'person', text: 'Personal Information' ,pressHandler : () =>{navigation.navigate('PersonalInfo')}},
    { icon: 'credit-card', text: 'Payment and cards',pressHandler : () =>{} },
    { icon: 'bookmark', text: 'Saved', pressHandler : () =>{}},
    { icon: 'history', text: 'Booking history' ,pressHandler : () =>{}},
    { icon: 'settings', text: 'Settings' ,pressHandler : () =>{}}
  ];

  useFocusEffect(
    useCallback(() => {
      loadUserData().then(data => {
        if (data) {
          setUserInfo(data);
        }
      });
    }, [])
  );
  return (
    <ScrollView style={styles.container}>
      <View style={{justifyContent:'center'}}>
      <Text style={{
        textAlign:'center',
        fontSize: 28,
        fontFamily: FONTFAMILY.poppins_semibold,
        color:COLORS.black,
        paddingLeft:30
    }}>
            Account
        </Text>
      </View>
      <View style={styles.header}>
        <Image
          source={{ uri: userInfo.profileImage }} // Replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>{userInfo.firstName} {userInfo.lastName}</Text>
      </View>
      <View style={styles.optionsList}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option} onPress={option.pressHandler}>
            <Icon name={option.icon} size={24} color="#333" />
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button} >
        <Icon name="logout" size={24} color="white" />
        <Text style={styles.buttonText}>End session</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color:COLORS.black
  },
  optionsList: {
    marginVertical: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionText: {
    marginLeft: 20,
    fontSize: 18,
    color:COLORS.black
  },
  button: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default AccountScreen;
