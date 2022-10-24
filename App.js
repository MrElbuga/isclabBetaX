import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View,Button,StyleSheet, ScrollView,TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';

//import RespUi from './Devsource/components/respUi';
import estilo from './Devsource/estilo';
//Dados
import {sortear} from './Devsource/Ddata/dados';
import RespUi from './Devsource/components/respUi';
import BtnIndex from './Devsource/components/btnIndex';



export default function App() {
const [cnt, setCount] = useState(0);
const [idx, setIndex] = useState(0);

const [Tdados,setDados] = useState(sortear);
const [cor,setCor] = useState(false);
const [c_Ans,setCurAns] = useState('x');
//const Tdados = sortear();

// State to store count value
 
const incrementCount = () => {
  // Update state with incremented value
  setCount(cnt+1);
};

//Indice dos botoes
const bindex = (nr) => {
     // Update state with incremented value
    // console.log('aquikkk');

   
  setIndex(nr);
  setCurAns(Tdados[nr].currA);

};

const correc =()=>
{
    setCor(!cor);
    //console.log("estado: "+cor);
}

const trocarR = (pr)=>
{
  const nR = [...Tdados];
  nR[idx].setEscolha(pr.f);
  setCurAns(nR[idx].currA);
  //console.log(JSON.stringify (nR[idx]));

  if(pr.val==0)
  {
    nR[idx].setValor(nR[idx].valor=1);

  }else
  {
  nR[idx].setValor(nR[idx].valor=0);

  }

   setDados(nR);
}

  return (
    //<RespUi resp ={'G G Games'}/>
    
    <View style={estilo.container}>
    {  <StatusBar style="auto"/> }

      {/*<Text style = {estilo.texto}>Cnr games ,Light!</Text>*/}
      
      {/* Cima*/}
      <View style={{flex:1.8,width:'100%',backgroundColor: 'red',overflow:'hidden',top:'7%'}}>

                <ScrollView style={{backgroundColor:'pink',flex:1,paddingLeft:'0.1%',overflow:'scroll'}}>
                      <View style ={{height:'100%',backgroundColor:'lightblue',width:'100%'}}>
                          <Text style={[estilo.texto,{padding:'3%',height:'5%'}]}>
                                {Tdados[idx].prg} {Tdados[idx].valor } {c_Ans}
                          </Text>  
                             <Button title='resultado' onPress={correc }></Button>
                             <ScrollView horizontal={true}>          
                             <Image style={{aspectRatio:1,height:500,width:undefined,resizeMode:'stretch'}} source={require('./Devsource/imagem/PSK-1.jpg')}/>
                             </ScrollView>
                             
                             <ScrollView horizontal={true}>          
                             <Image style={{aspectRatio:1,height:500,width:undefined,resizeMode:'stretch'}} source={require('./Devsource/imagem/digital.jpg')}/>
                             </ScrollView>


                      </View> 
                </ScrollView>

      </View>
      {/* Baixo*/}
      <View style={{flex:0.8,alignItems:'center',width:"100%",backgroundColor: 'black'}}>
          
      <View style={{top:'5%',height:'73%',width:'97%'}}>
       <ScrollView style={{overflow:'hidden'}} >
     
      <RespUi cAns={ c_Ans } p={Tdados[idx].a} fns={cor} v={cor} e={()=>{trocarR(Tdados[idx].a)}}/>
      <RespUi cAns={ c_Ans } p={Tdados[idx].b} fns={cor} v={cor} e={()=>{trocarR(Tdados[idx].b)}}/>
      <RespUi cAns={ c_Ans } p={Tdados[idx].c} fns={cor} v={cor} e={()=>{trocarR(Tdados[idx].c)}}/>
      <RespUi cAns={ c_Ans } p={Tdados[idx].d} fns={cor} v={cor} e={()=>{trocarR(Tdados[idx].d)}}/>
      <RespUi cAns={ c_Ans } p={Tdados[idx].e} fns={cor} v={cor} e={()=>{trocarR(Tdados[idx].e)}}/>

        </ScrollView>
        </View>

        <View style={[estilo.prCont,{backgroundColor:'skyblue',height:"30%",top:'3%',
        paddingTop:'1.5%'}]}>
    
       <FlatList
       horizontal={true}
         data={ Tdados}
         renderItem = {({item,index})=>
          {
            return (
              <BtnIndex e = {()=>{bindex(index)}} idx={idx} t={index} fns={cor}/>
              )
          }}
       />
          
          </View>


      

      </View>

    </View>
  );
}

const es = StyleSheet.create(
  {
    btn:
    {
      width:'80%',
      
      
    }
  })