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
        marginBottom: 180,
        marginTop: 60,
        width: "90%",
        gap: 20
    },
    inputGroup: {
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 20,
        gap: 5,
    },
    input: {
        marginTop: 10
    },
    textLogo: {
        width: 300,
        height: 300,
        top: 20
    }
});

export default LoginStyles;