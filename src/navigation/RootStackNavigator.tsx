import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import VideoScreen from "../screens/VideoScreen";
import VideoMaker from "../screens/VideoMaker";
const RootStackNavigator = () => {


    const RootStack = createStackNavigator()
    return (

        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="Login"
            >
                <RootStack.Screen


                    options={
                        {
                            headerShown: false
                        }
                    }
                    name={"Login"}
                    component={Login}
                />
                <RootStack.Screen


                    options={
                        {
                            headerShown: false
                        }
                    }
                    name={"SignUp"}
                    component={SignUp}
                />
                <RootStack.Screen


                    options={
                        {
                            headerShown: false
                        }
                    }
                    name={"VideoScreen"}
                    component={VideoScreen}
                ></RootStack.Screen>

                <RootStack.Screen


                    options={
                        {
                            headerShown: false
                        }
                    }
                    name={"VideoMaker"}
                    component={VideoMaker}
                ></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )

}

export default RootStackNavigator