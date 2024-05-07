import React,{useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeContext } from "../context/HomeProvider";
import SetPassword from "../screen/SetPassword";
import StackScreen from "../stack/StackScreen";
const AppNavigation = () => {
    const {password} = useContext(HomeContext);
    return (
        <NavigationContainer>
            {password ? <StackScreen /> : <SetPassword />}
        </NavigationContainer>
    );
};
export default AppNavigation;