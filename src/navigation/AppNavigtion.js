import React,{useContext,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeContext } from "../context/HomeProvider";
import SetPassword from "../screen/SetPassword";
import StackScreen from "../stack/StackScreen";
import LoginAndRegisterStack from "../stack/LoginAndRegisterStack";
const AppNavigation = () => {
    const {password,user} = useContext(HomeContext);
    console.log("user",user);
    return (
        <NavigationContainer>
            {user == null ? <LoginAndRegisterStack /> : password ? <StackScreen /> : <SetPassword />}
        </NavigationContainer>
    );
};
export default AppNavigation;