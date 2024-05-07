import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeContext = createContext();

export const HomeProvider = props => {
    const { children } = props;
    const [password, setPassword] = useState(null);

    useEffect(() => {
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
        
        getPassword();
    
    }, []);
    const savePassword = async newPassword => {
        try {
            await AsyncStorage.setItem('@password', newPassword);
            setPassword(newPassword);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <HomeContext.Provider value={{ password, savePassword }}>
            {children}
        </HomeContext.Provider>
    );
};
