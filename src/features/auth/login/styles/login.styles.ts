import { StyleSheet } from "react-native";
import { AppColors } from "../../../../shared/themes/AppTheme";

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: AppColors.background
    },
    logoContainer: {
        marginTop: 40,
        alignItems: "center"
    },
    buttonGroup: {
        width: "90%",
        marginBottom: 180,
        gap: 20
    },
    textLogo: {
        width: 300,
        height: 300,
        top: 20
    }
});

export default LoginStyles;