import { AsyncStorage} from "react-native";

let token;

export const getToken = async () => {
    if (token) {
        return Promise.resolve(token);
    }
    token = await AsyncStorage.getItem('AUTH_TOKEN');
    return token;
};

export const signIn = newToken => {
    if (token) {
        return AsyncStorage.setItem('AUTH_TOKEN', newToken);
    }
    return null;
};

export const signOut = newToken => {
    token = undefined;
    return AsyncStorage.remove('AUTH_TOKEN');
};