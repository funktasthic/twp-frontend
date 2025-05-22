import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorage = () => {
    // Save token
    const save = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log("ERROR to local storage ", error);
        }
    }
    // Get token
    const getItem = (key: string) => {
        try {
            const item = AsyncStorage.getItem(key);
            return item;
        } catch (error) {
            console.log("ERROR to local storage ", error);
        }
    }
    // Remove token
    const removeItem = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log("ERROR to local storage ", error);
        }
    }

    return {
        save,
        getItem,
        removeItem
    }
}