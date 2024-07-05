import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary ,MediaType ,PhotoQuality} from 'react-native-image-picker';
import CustomHeader from '../../components/CustomHeader ';
import { COLORS } from '../../constants';
const options = {
  mediaType: 'photo' as MediaType,
  quality: 1 as PhotoQuality,
};

const loadUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error reading value', e);
    return null;
  }
};

const saveUserData = async (userInfo:any) => {
  try {
    const jsonValue = JSON.stringify(userInfo);
    await AsyncStorage.setItem('userData', jsonValue);
    console.log("Data saved",userInfo);
  } catch (e) {
    console.log('Error saving data', e);
  }
};

const PersonalInfoScreen = ({ navigation }:any) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    profileImage: 'https://via.placeholder.com/150'
  });

  useEffect(() => {
    loadUserData().then(data => {
      if (data) {
        setUserInfo(data);
      }
    });
  }, []);

  const updateProfileImage = () => {
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0 && response.assets[0].uri) {
        const source = { uri: response.assets[0].uri };
        setUserInfo(userInfo => ({ ...userInfo, profileImage: source.uri }));
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Personal Information" onBackPress={() => navigation.goBack()} />
      
      <View style={styles.header}>
        <ImageBackground
          source={{ uri: userInfo.profileImage }}
          style={styles.profileImage}
          imageStyle={{ borderRadius: 30 }}
        >
          <TouchableOpacity style={styles.cameraButton} onPress={updateProfileImage}>
            <Icon name="photo-camera" size={24} color="black" />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={userInfo.firstName}
          onChangeText={text => setUserInfo({ ...userInfo, firstName: text })}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={userInfo.lastName}
          onChangeText={text => setUserInfo({ ...userInfo, lastName: text })}
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={userInfo.phone}
          onChangeText={text => setUserInfo({ ...userInfo, phone: text })}
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={userInfo.email}
          onChangeText={text => setUserInfo({ ...userInfo, email: text })}
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => saveUserData(userInfo)}>
        <Text style={styles.saveButtonText}>Save changes</Text>
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
    position: 'relative',
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
  },
  inputContainer: {
    margin: 20,
  },
  label: {
    marginVertical: 10,
    color: '#333',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    color: 'black',
  },
  saveButton: {
    backgroundColor: COLORS.primaryOrangeHex, // Example color
    marginHorizontal: 50,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PersonalInfoScreen;
