import React, { memo } from "react";
import {SafeAreaView, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";



const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Logo />

    <Text style={styles.paragraph}>
      Welcome to Katch Fishing! 
    </Text>

    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginScreen")}>
      <Text style={styles.buttonText}>Login  </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      <Text style={styles.buttonText}>Sign Up  </Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#136cd1'
  },

  logo: {
    height: 200,
    width: 200
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    alignItems: 'center'
  },

  paragraph:{
    color: '#fff',
    fontSize: 18
  },

  button: {
    width:"80%",
    backgroundColor:"#2ff5a2",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },

  buttonText:{
    color: '#fff',
    fontSize: 16,
    //textBreakStrategy: 'simple',
    fontWeight: 'bold'

  }

}

export default memo(HomeScreen);
