import React from "react";
import { render } from "react-dom";
import { Text ,TouchableOpacity,StyleSheet} from "react-native";
import estilo from "../estilo";

export default function BtnIndex({e,t,idx,fns})
{

    return (
        <TouchableOpacity style={{marginLeft:6}} onPress={e}>
        <Text style={[estilo.prCont,fns==true?
            idx==t?{backgroundColor:'yellow'}:{backgroundColor:'red'}:
            idx==t?{backgroundColor:'lightgreen'}:{backgroundColor:'white'},{height:'80%',paddingLeft:20}]}>
            {t}</Text>
        </TouchableOpacity>
    );
    
}