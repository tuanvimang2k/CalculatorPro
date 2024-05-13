import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeContext = createContext();

export const HomeProvider = props => {
    const { children } = props;
    const [password, setPassword] = useState(null);
    const [user, setUser] = useState(null);
    const [isOpenVideo, setIsOpenVideo] = useState(false);
    const [isOpenPhoto, setIsOpenPhoto] = useState(false);
    const [isOpenGallery, setIsOpenGallery] = useState(false);
    const logout = async () => {
        await AsyncStorage.removeItem('@password');
        await AsyncStorage.removeItem('@user');
        setPassword(null);
        setUser(null);
    };
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
    const savePassword = async newPassword => {
        try {
            await AsyncStorage.setItem('@password', newPassword);
            setPassword(newPassword);
        } catch (error) {
            console.log(error.message);
        }
    };
    const getUser = async () => {
        try {
            const storedIdUser = await AsyncStorage.getItem('@user');
            if (storedIdUser !== null) {
                setUser(storedIdUser);
            } else {
                // setIdUser('00000');
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    const saveUser = async newIdUser => {
        try {
            await AsyncStorage.setItem('@user', newIdUser);
            setUser(newIdUser);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getPassword();
        getUser();
    }, []);


    return (
        <HomeContext.Provider value={{
            password, savePassword,
            user, saveUser, logout,
            isOpenVideo, setIsOpenVideo,
            isOpenPhoto, setIsOpenPhoto,
            isOpenGallery, setIsOpenGallery
        }}>
            {children}
        </HomeContext.Provider>
    );
};
