import React from "react";
import { render } from "react-dom";
import { Text ,TouchableOpacity,StyleSheet} from "react-native";
import estilo from "../estilo";

export default function BtnIndex({e,t,idx,fns,correc})
{

    return (
        <TouchableOpacity style={{marginLeft:6}} onPress={e}>
        <Text style={[estilo.prCont,
           fns==true?
            idx==t?{backgroundColor:'yellow'}:
            correc.valor==1?{backgroundColor:'lightgreen'}:{backgroundColor:'red'}:
            //N acabou
            idx==t?{backgroundColor:'lightgreen'}:
            correc.currA!=' '?{backgroundColor:'cyan'}:{backgroundColor:'white'}
            ,{height:'90%',textAlign:'justify',paddingLeft:20}]}>
            {t+1}</Text>
        </TouchableOpacity>
    );
    
}