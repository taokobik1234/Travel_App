import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS,FONTFAMILY } from '../../constants';
import { home } from '../../constants/images';
const AccountScreen = () => {
  const options = [
    { icon: 'person', text: 'Personal Information' },
    { icon: 'credit-card', text: 'Payment and cards' },
    { icon: 'bookmark', text: 'Saved' },
    { icon: 'history', text: 'Booking history' },
    { icon: 'settings', text: 'Settings' }
  ];

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
          source={home} // Replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>Victoria Yoker</Text>
      </View>
      <View style={styles.optionsList}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <Icon name={option.icon} size={24} color="#333" />
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
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
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
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
