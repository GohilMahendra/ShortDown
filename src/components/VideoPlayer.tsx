
import React, { useEffect, useReducer, useRef, useState } from 'react';

import {
    Dimensions,
    Pressable,
    SafeAreaView,

    Text,
    View,
} from 'react-native';

import Video, { FilterType } from "react-native-video";
const {height,width}=Dimensions.get('screen')
const VideoPlayer = ({link}:string) => {

    
    const { height, width } = Dimensions.get('screen')
    const [paused, setpaused] = useState<boolean>(false)
    const [duration, setduration] = useState<Number>(0)
    const [seek, setseek] = useState<Number>(0)
    const [currunt, setcurrunt] = useState<Number>(0)
    const player = useRef(null)




    useEffect
        (
            () => {

                setcurrunt(seek)
            },
            [seek]
        )
    return (
        <View style={{ height:height,width:width}}>

            <View
                style={
                    {
                        flex: 1,
                    }
                }
            >
                <Video
                    filterEnable={true}
                    resizeMode={"cover"}
                    repeat={true}
                    ref={player}
                    source={
                        {
                            uri: link
                        }
                    }
                    paused={paused}

                 
                    volume={25}

                    seek={30}
                    onBuffer={(e) => { console.log(e), console.log("BUFFER") }}

                    onLoadStart={
                        ()=>console.log("started Load")
                    }
                    preventsDisplaySleepDuringVideoPlayback={true}
                    filter={FilterType.INVERT}
                    onError={(err) => console.log(err)}
                    onLoad={
                        (e) => { console.log(e), setduration(e.duration) }
                    }
                    onProgress={
                        (e) => {
                            { console.log(e.currentTime), setcurrunt(e.currentTime) }
                        }
                    }
                    style={
                        {
                            flex: 1,
                            backgroundColor: 'black'
                        }
                    }

                    playInBackground={false}
                >

                </Video>
                <View
                    style={
                        {
                            position: 'absolute',
                            top: '50%',
                            left: '45%',
                            backgroundColor: "#fff"
                        }
                    }
                >
                    <Pressable>
                        <Text
                            onPress={
                                () => setpaused(!paused)

                            }
                        >play</Text>
                    </Pressable>
                </View>
            </View>
            <View
                style={
                    {
                        position: "absolute",
                        bottom: 50
                    }
                }

            >

            </View>
            <Text>{currunt.toFixed(0)}</Text>
            <Text>{duration}</Text>



        </View>
    );
};

export default VideoPlayer;
