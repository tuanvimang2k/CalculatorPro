import React,{useContext,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeContext } from "../context/HomeProvider";
import SetPassword from "../screen/SetPassword";
import StackScreen from "../stack/StackScreen";
import { getUserById } from "../service/user";
import LoginAndRegisterStack from "../stack/LoginAndRegisterStack";
const AppNavigation = () => {
    const {password,user} = useContext(HomeContext);
    // useEffect(() => {
    //     getUserById('663dbf3eb4c9c1c2c283f9e4').then(response => {
    //         console.log(response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }, []);
    console.log("user",user);
    return (
        <NavigationContainer>
            {user == null ? <LoginAndRegisterStack /> : password ? <StackScreen /> : <SetPassword />}
        </NavigationContainer>
    );
};
export default AppNavigation;