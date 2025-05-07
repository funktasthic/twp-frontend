import React from 'react'
import LoginStyles from '../styles/login.styles';
import { View, Image } from 'react-native'
import { PrimaryButton } from '../../../../shared/components/button/PrimaryButton';
import { StackParamsList } from '../../../../app/AppStack';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<StackParamsList, "Login"> {}

const LoginScreen = () => {
  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.logoContainer}>
        <Image 
          source={require("../../../../assets/images/twp-text-logo-light.png")}
          style={LoginStyles.textLogo} />
      </View>
      <View style={LoginStyles.buttonGroup}>
        <PrimaryButton text={"Ingresar"} onPress={() => console.log("Login")} />
      </View>
    </View>
  )
}

export default LoginScreen;