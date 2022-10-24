import React, { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import estilo from "../estilo";

export default function RespUi({p,v,e,fns,idx,cAns})

{
    const [clicked,setclicked]= useState(false);
    function velar(){
      setclicked(!clicked);
        
    }
    if(p.f!=""){

   return (
    <TouchableOpacity onPress={()=> {e();velar();}}>
    <View style={[estilo.prCont,
    fns==false?
    p.f==cAns?{backgroundColor:'lightgreen'}:{backgroundColor:'white'}:
    p.val==0?{backgroundColor:'lightgreen'}:{backgroundColor:'red'}]}>
          
         <Text style={estilo.texto}>{p.f} </Text>
         </View>
       </TouchableOpacity> 

     )
   }else
   {
    return 
   }
}

