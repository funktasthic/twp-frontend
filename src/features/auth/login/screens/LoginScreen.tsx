import React from 'react';
import LoginStyles from './login.styles';
import { View, Image } from 'react-native';
import { StackParamsList } from '../../../../app/AppStack';
import { StackScreenProps } from '@react-navigation/stack';
import { Input } from '../../../../shared/components/ui/Input';
import { Button } from '../../../../shared/components/ui/Button';

interface Props extends StackScreenProps<StackParamsList, "Login"> {}

const LoginScreen = ({navigation}: Props) => {

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.logoContainer}>
        <Image 
          source={require("../../../../assets/images/twp-text-logo-light.png")}
          style={LoginStyles.textLogo} 
        />
      </View>

      <View style={LoginStyles.inputGroup}>
        <Input
          label="Correo electrónico"
          keyboardType="email-address"
          placeholder="Ingresa tu correo"
        />
        <Input
          label="Contraseña"
          secureTextEntry
          placeholder="Ingresa tu contraseña"
          rightIcon={"eye"}
          style={LoginStyles.input}
        />
      </View>

      <View style={LoginStyles.buttonGroup}>
        <Button text="Ingresar" onPress={() => console.log("Login")} />
      </View>
    </View>
  );
};

export default LoginScreen;
