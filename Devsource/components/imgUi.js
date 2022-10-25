import React, { useState } from "react";
import { StyleSheet, ScrollView,Image,View } from "react-native";

export default function ImgUi({i})
{
    let [local,setLocal]= useState('../imagem/digital.jpg');
      console.log(i)
    return(
        //<ScrollView horizontal={true}>          
        <Image style={{aspectRatio:1,height:500,width:undefined,resizeMode:'stretch'}} source={`${i}`}/>
       // </ScrollView>
    );

}