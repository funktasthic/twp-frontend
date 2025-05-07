import { StyleSheet } from "react-native";
import { AppColors } from "../../../shared/themes/AppTheme";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.background
    },
    logoContainer: {
        alignItems: "center"
    },
    buttonGroup: {
        width: "90%",
        marginBottom: 180,
        gap: 20
    },
    logo: {
        width: 180,
        height: 180,
        top: 40
    },
    textLogo: {
        width: 300,
        height: 300,
        top: 20
    }
});

export default HomeStyles;