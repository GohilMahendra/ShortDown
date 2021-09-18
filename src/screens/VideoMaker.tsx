import React, { useEffect, useRef, useState } from "react";


import { View, Text, PermissionsAndroid, Pressable, ImagePickerIOS } from "react-native";


import { RNCamera} from "react-native-camera";

import { launchImageLibrary } from "react-native-image-picker";

const VideoMaker = () => {





    const launch=async()=>
    {
        launchImageLibrary({ mediaType: 'video',
        //includeBase64: true,
         quality:1,
       
         videoQuality:'medium'
       
        },
         
           
           (response)=>{
             if(response.didCancel){
               console.log("cancel")
               //lert(<ImageBackground source={response.uri} style={{flex:1}}></ImageBackground>)
             }
            
          }
           )
    }

    const [front,setfront]=useState<boolean>(false);

    const camera=useRef(null)


    const getPermissions=async()=>
    {
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: "Cool Photo App Camera Permission",
                message:
                  "Cool Photo App needs access to your camera " +
                  "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("You can use the camera");
            } else {
              console.log("Camera permission denied");
            }
          } catch (err) {
            console.warn(err);
          }
    }

    useEffect
    (
        ()=>
        {
            getPermissions()

        },
        []
    )
    return (

        <View
        style={
            {
                flex:1
            }
        }
        >
         
          <Text>VIDEO MAKER</Text>

        <RNCamera
        ref={camera}
  
        type={front?'front':'back'}
        style={
            {
                flex:1
            }
        }
        videoStabilizationMode={'auto'}
        defaultVideoQuality={"1080p"}
   
        >

        </RNCamera>
          

          <View
          style={
              {
                  position:'absolute',
                  bottom:50
              }
          }
          >
              <Pressable
              onPress={()=>setfront(!front)}
              >
              <Text
              style={
                  {
                      color:"#fff"
                  }
              }
              >CAMERASIDE</Text>


          </Pressable>
            <Pressable>
                <Text
                
                onPress={()=>launch()}
                >Launch Lib</Text>
            </Pressable>
          </View>
        </View>
    )

}

export default VideoMaker