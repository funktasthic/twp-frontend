import React from 'react'
import HomeStyles from '../styles/home.styles';
import { View, Image } from 'react-native'
import { PrimaryButton } from '../../../shared/components/button/PrimaryButton';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamsList } from '../../../app/AppStack';

interface Props extends StackScreenProps<StackParamsList, "Home"> {}

const HomeScreen = ({navigation}: Props) => {
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
        <PrimaryButton text={"Iniciar sesión"} onPress={() => navigation.navigate("Login")} />
        <PrimaryButton text={"Registrarme"} onPress={() => console.log("Register")} />
      </View>
    </View>
  )
}

export default HomeScreen;