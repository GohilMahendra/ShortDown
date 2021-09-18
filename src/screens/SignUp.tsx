import React, { useState } from "react";


import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {



    const navigation=useNavigation()

    const SignUp = () => {


      

        console.log(email+password)
        auth().createUserWithEmailAndPassword(email,password).then
        (
            (result)=>
            {
            auth().currentUser?.updateProfile(
                {displayName:userName}
            ).then(
                navigation.navigate('Login')
            ).catch(
                err=>console.log(err)
            )

            }
        ).catch(
            err=>console.log(err)
        )

    }
    const [userName, setuserName] = useState<string>("")
    const [password, setpassword] = useState<string>("")
    const [email, setemail] = useState<string>("")
    return (

        <View>
            <TextInput

                value={userName}
                onChangeText={text => setuserName(text )}
                style={
                    {
                        borderWidth: 1,
                        borderRadius: 30,
                        margin: 20
                    }
                }
            />
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
            onPress={
                ()=>SignUp()
            }
            >
                <Text>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={()=>navigation.navigate('Login')}
            >
                <Text>SIGN IN</Text>
            </TouchableOpacity>

        </View>
    )

}

export default SignUp