import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AppColors } from "../../themes/AppTheme";

interface Props {
  text: string;
  loading?: boolean;
  icon?: string;
  disabled?: boolean;
  onPress: () => void;
}

export const PrimaryButton = ({text, loading, disabled, icon, onPress}: Props) => {
  return (
    <Button
      style={styles.button}
      contentStyle={styles.content}
      labelStyle={styles.label}
      mode="contained"
      onPress={onPress}
      loading={loading}
      icon={icon}
      disabled={disabled}
      buttonColor={AppColors.primary}
    >
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
      width: "100%",
      height: 60,
      borderRadius: 30,
      justifyContent: "center"
  },
  content:{
      margin: 4
  },
  label:{
      color: "white",
      fontWeight: "bold",
      fontSize: 18,
      padding: 2,
  },
});