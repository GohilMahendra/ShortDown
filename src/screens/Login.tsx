import React, { useEffect, useState } from "react";


import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import auth from "@react-native-firebase/auth";
import { importAttribute } from "@babel/types";

import { NavigationProp ,useNavigation} from "@react-navigation/native";
import SignUp from "./SignUp";
import { PureNativeButton } from "react-native-gesture-handler/lib/typescript/components/GestureButtons";

const Login = () => {


    const navigation=useNavigation()


    useEffect
    (

        ()=>
        {
        const subscription=auth().onAuthStateChanged
        (
            (user)=>
            {
                if(user)
                {
                    navigation.navigate('VideoMaker')
                }
            }
        )


        return ()=>subscription()
        }
        ,[]
    )

    const onSignIn=async()=>
    {
        if(password.length>=8 && email!="")
        {
           const user= await auth().signInWithEmailAndPassword(email,password)
        
           if(user)
           
           {
               navigation.navigate('VideoScreen')
           }
        
        }
    }


  
    const [password, setpassword] = useState<string>("")
    const [email, setemail] = useState<string>("")
    return (

        <View>
         
            <TextInput
                value={email}
                onChangeText={text => setemail( text)}
                style={
                    {
                        borderWidth: 1,
                        borderRadius: 30,
                        margin: 20
                    }
                }
            />
            <TextInput
                value={password}
                onChangeText={text => setpassword(text)}
                style={
                    {
                        borderWidth: 1,
                        borderRadius: 30,
                        margin: 20
                    }
                }
            />

            <TouchableOpacity
            onPress={()=>onSignIn()}
            >
                <Text>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate("SignUp")}
            >
                <Text>SIGN UP</Text>
            </TouchableOpacity>

        </View>
    )

}

export default Login