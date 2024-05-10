import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeContext = createContext();

export const HomeProvider = props => {
    const { children } = props;
    const [password, setPassword] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const getPassword = async () => {
        try {
            const storedPassword = await AsyncStorage.getItem('@password');
            if (storedPassword !== null) {
                setPassword(storedPassword);
            } else {
                // setPassword('00000');
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    const checkLogin = async () => {
        try {
            const isLogin = await AsyncStorage.getItem('@isLogin');
            if (isLogin !== null) {
                setIsLogin(isLogin);
            } else {
                setIsLogin(false);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        getPassword();
        checkLogin();
    
    }, []);
    const savePassword = async newPassword => {
        try {
            await AsyncStorage.setItem('@password', newPassword);
            setPassword(newPassword);
        } catch (error) {
            console.log(error.message);
        }
    };
    const SaveLogin = async (newIsLogin) => {
        try {
            await AsyncStorage.setItem('@isLogin', newIsLogin);
            setIsLogin(newIsLogin);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <HomeContext.Provider value={{ password, savePassword,isLogin,SaveLogin }}>
            {children}
        </HomeContext.Provider>
    );
};
