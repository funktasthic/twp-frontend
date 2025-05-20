import React from 'react'
import { View, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamsList } from '../../../app/AppStack';
import { Button } from '../../../shared/components/ui/Button';
import { HomeStyles } from './HomeStyles';

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
        <Button text={"Iniciar sesión"} onPress={() => navigation.navigate("Login")} />
        <Button text={"Registrarme"} onPress={() => console.log("Register")} />
      </View>
    </View>
  )
}

export default HomeScreen;