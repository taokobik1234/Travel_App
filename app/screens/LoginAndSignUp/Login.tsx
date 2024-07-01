import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { COLORS } from "../../constants";
  import { fonts } from "../../constants/fonts";
  
  import Ionicons from "react-native-vector-icons/Ionicons";
  import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
  import { useNavigation } from "@react-navigation/native";
  
  const LoginScreen = ({navigation}: any) => {
    // const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);
  
    // console.log(navigation);
    const handleSignup = () => {
    //    navigation.navigate("SIGNUP");
    };

    const handleLogin =() => {
        navigation.navigate("TabNavigator",{screen: "Home"});
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Hey,</Text>
          <Text style={styles.headingText}>Welcome</Text>
          <Text style={styles.headingText}>Back</Text>
        </View>
        {/* form  */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            {/* <Ionicons name={"mail-outline"} size={30} color={COLORS.secondary} /> */}
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor={COLORS.secondary}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            {/* <SimpleLineIcons name={"lock"} size={30} color={COLORS.secondary} /> */}
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={COLORS.secondary}
              secureTextEntry={secureEntery}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureEntery((prev) => !prev);
              }}
            >
              <SimpleLineIcons name={"eye"} size={20} color={COLORS.secondary} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.continueText}>or continue with</Text>
          <TouchableOpacity style={styles.googleButtonContainer}>
            <Text style={{color: COLORS.black,
                    fontSize: 20,
                    fontFamily: fonts.SemiBold,
                    textAlign: "center",
                    padding: 10,}}>Sign Up</Text>
            
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <Text style={styles.accountText}>Don’t have an account?</Text>
            <TouchableOpacity onPress={handleSignup}>
              <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      padding: 20,
    },
    backButtonWrapper: {
      height: 40,
      width: 40,
      backgroundColor: COLORS.gray,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer: {
      marginVertical: 20,
    },
    headingText: {
      fontSize: 32,
      color: COLORS.primary,
      fontFamily: fonts.SemiBold,
    },
    formContainer: {
      marginTop: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: COLORS.secondary,
      borderRadius: 100,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      padding: 2,
      marginVertical: 10,
    },
    textInput: {
      flex: 1,
      paddingHorizontal: 10,
      fontFamily: fonts.Bold,
      color: COLORS.black
    },
    forgotPasswordText: {
      textAlign: "right",
      color: COLORS.primary,
      fontFamily: fonts.SemiBold,
      marginVertical: 10,
    },
    loginButtonWrapper: {
      backgroundColor: COLORS.primary,
      borderRadius: 100,
      marginTop: 20,
    },
    loginText: {
      color: COLORS.white,
      fontSize: 20,
      fontFamily: fonts.SemiBold,
      textAlign: "center",
      padding: 10,
    },
    continueText: {
      textAlign: "center",
      marginVertical: 20,
      fontSize: 14,
      fontFamily: fonts.Regular,
      color: COLORS.primary,
    },
    googleButtonContainer: {
    //   flexDirection: "row",
      borderWidth: 2,
      borderColor: COLORS.primary,
      borderRadius: 100,
    //   justifyContent: "center",
      alignItems: "center",
    //   padding: 10,
    //   gap: 10,
    },
    googleImage: {
      height: 20,
      width: 20,
    },
    googleText: {
      fontSize: 20,
      fontFamily: fonts.SemiBold,
    },
    footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
      gap: 5,
    },
    accountText: {
      color: COLORS.primary,
      fontFamily: fonts.Regular,
    },
    signupText: {
      color: COLORS.primary,
      fontFamily: fonts.Bold,
    },
  });