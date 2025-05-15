import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { TextInput } from "react-native-paper";
import { KeyboardTypeOptions } from "react-native";

interface Props {
  label?: string;
  value?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (content: string) => void;
}

export const Input = ({
  label,
  value,
  disabled,
  style,
  placeholder,
  error,
  secureTextEntry,
  keyboardType,
  onChangeText }: Props) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      disabled={disabled}
      placeholder={placeholder}
      style={[styles.text, style]}
      error={error}
      mode="outlined"
      outlineColor="#00BDFF"
      activeOutlineColor="white"
      placeholderTextColor="white"
      textColor="white"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    height: 56,
    backgroundColor: "#00BDFF",
  },
});