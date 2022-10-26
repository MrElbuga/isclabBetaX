import React, { useState } from "react";
import { StyleSheet, ScrollView,Image,View } from "react-native";

export default function ImgUi({i})
{
    let [local,setLocal]= useState('../imagem/digital.jpg');
      
    return(
        //<ScrollView horizontal={true}>          
        <Image style={{backgroundColor:'black',flex:1,height:300,resizeMode:'stretch'}} source={`${i}`}/>
       // </ScrollView>
    );

}