import { View, Image, Text } from 'react-native'
import React from 'react'
import HomeStyles from '../styles/home.styles';
import { PrimaryButton } from '../../../shared/components/button/PrimaryButton';

const HomeScreen = () => {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.logoContainer}>
        <Image 
          source={require("../../../assets/images/twp-logo.png")}
          style={HomeStyles.logo} />
        <Image 
          source={require("../../../assets/images/twp-text-logo-dark.png")}
          style={HomeStyles.textLogo} />
      </View>
      <View style={HomeStyles.buttonGroup}>
        <PrimaryButton text={"Iniciar sesión"} onPress={() => console.log("Login")} />
        <PrimaryButton text={"Registrarme"} onPress={() => console.log("Register")} />
      </View>
    </View>
  )
}

export default HomeScreen;