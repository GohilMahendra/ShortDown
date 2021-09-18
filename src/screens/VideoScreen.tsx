
import { DEFAULT_EXTENSIONS } from "@babel/core";
import React from "react";

import {

    Dimensions,
    View
  } from 'react-native';

  import {FlatList} from 'react-native-gesture-handler';
import VideoPlayer from "../components/VideoPlayer";
import { vidolinks } from "../data/Videolinks";


const {height,width}=Dimensions.get('screen')
const renderItem=({item,index})=>
{
    return(
        <View
        style={
            {
                flex:1
            }
        }
        
        >
            <VideoPlayer
            link={item}
            >

            </VideoPlayer>
        </View>
    )
}


  const VideoScreen=()=>
  {

    return(
        <View
        style={
            {
                flex:1
            }
        }
        >
            <FlatList
            data={vidolinks}
            style={
                {
                    height:height,
                    width:width
                }
            }
            snapToInterval={height}
            renderItem={renderItem}
            keyExtractor={(item:String)=>item.toString()}
            >
            </FlatList>            
            
        </View>
    )
  }
  export default VideoScreen