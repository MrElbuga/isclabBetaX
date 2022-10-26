import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View,Button,StyleSheet, ScrollView,TouchableOpacity, FlatList, SafeAreaView, Image, Modal } from 'react-native';

//import RespUi from './Devsource/components/respUi';
import estilo from './Devsource/estilo';
//Dados
import {pdfl,pdados,sortear} from './Devsource/Ddata/dados';
import RespUi from './Devsource/components/respUi';
import BtnIndex from './Devsource/components/btnIndex';
import ImgUi from './Devsource/components/imgUi';



export default function App() {
const [cnt, setCount] = useState(0);
const [idx, setIndex] = useState(0);

const [Tdados,setDados] = useState(sortear(pdfl));
const [Timg,setTimg] = useState(Tdados[idx].imgs);
const [finish,setFinish] = useState(false);
const [c_Ans,setCurAns] = useState('x');


//Teste
const [t_ponto,setVwponto]= useState(false);
const [t_provas,setVprovas]= useState(false);

const [pontos,setPontos]= useState(0);
//const Tdados = sortear();

// State to store count value
 
const incrementCount = () => {
  // Update state with incremented value
  setCount(cnt+1);
};


//Pontos

const contarP=()=>
{
  let valFinal=0;
   for (let i = 0; i < Tdados.length; i++) {
    const val = Tdados[i].valor;
    valFinal+=val;
    
   }

   setPontos(valFinal);
}

//Repetir

const repetir = ()=>
{
  setFinish(false);
  setCurAns(' ');
  setDados(sortear);
  setVwponto(false);
}

//Indice dos botoes
const bindex = (nr) => {
     // Update state with incremented value
    // console.log('aquikkk');

   
  setIndex(nr);
  setCurAns(Tdados[nr].currA);
  if(typeof (Tdados[nr].imgs)=='object'){
  setTimg(Tdados[nr].imgs);
  console.log('Objecto');
  }else
  {
    console.log('nada');
    setTimg([]);

  }
 // console.log(Tdados[nr].p);

};

const correc =()=>
{
    setFinish(!finish);
    //console.log("estado: "+finish);
}

const trocarR = (pr)=>
{
  if(finish==false){
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

}

  return (
    //<RespUi resp ={'G G Games'}/>
    
    <View style={estilo.container}>
    {  <StatusBar style="auto"/> }

      {/*<Text style = {estilo.texto}>Cnr games ,Light!</Text>*/}
      
      {/* Cima*/}
      <View style={{flex:1.8,width:'100%',backgroundColor: 'red',overflow:'hidden',top:'7%'}}>

                    {/* Menu Testes*/}
 
                    <Modal visible={t_provas}>
                        <View style={{flex:1}}>
                        <Text style={{paddingLeft:'10%',fontWeight:'bold',paddingTop:'10%',fontSize:20}}> Escolha Testes de Bd1</Text>
                          <Button title='Fechar' onPress={()=>{setVprovas(false);}}></Button>
                        <FlatList
                            horizontal={true}
                              data={ Tdados}
                              renderItem = {({item,index})=>
                               {
                                 return (
                                  <TouchableOpacity>
                                     <View style={{paddingTop: '10%',flex:1}}>
                                      <Text  style={estilo.provas}>Teste:{index}</Text>
                                      </View>
                                      </TouchableOpacity>
                                   )
                               }}
                            />
                        </View>
                    </Modal>
                       
                    {/* Menu pause*/}
                    <Modal visible={t_ponto}>
                      <View style={estilo.container}>
                        <Text>Pontos: {pontos}</Text>

                               <Button title= 'Ver Correccao' onPress={()=>{setVwponto(false);setFinish(true);}}/>
                               <Button title= 'Menu'  onPress={()=>{setVprovas(true);}}/>
                               <Button title= 'Repetir' onPress={()=>{repetir();}}/>

                               
                      </View>
                    </Modal>
                <ScrollView style={{backgroundColor:'pink',flex:1,paddingLeft:'0.1%',overflow:'scroll'}}>
                      <View style ={{height:'100%',backgroundColor:'lightblue',width:'100%'}}>
                          <Text style={[estilo.texto,{padding:'5%'}]}>
                                {Tdados[idx].prg} {Tdados[idx].valor } {c_Ans}
                          </Text>  
                             <Button title='Terminar' onPress={ ()=>{contarP();setVwponto(true) }}></Button>
                             <FlatList
                             horizontal={true}
                              data={ Timg}
                              renderItem={({item,index})=>
                                {
                                  return(
                                  <ImgUi i={item}/>
                                  );
                                }}
                              ></FlatList>
                              
                             
                             {/*<ScrollView horizontal={true}>          
                             <Image style={{aspectRatio:1,height:500,width:undefined,resizeMode:'stretch'}} source={require('./Devsource/imagem/digital.jpg')}/>
  </ScrollView> */}


                      </View> 
                </ScrollView>

      </View>
      {/* Baixo*/}
      <View style={{flex:0.8,alignItems:'center',width:"100%",backgroundColor: 'black'}}>
          
      <View style={{top:'5%',height:'73%',width:'97%'}}>
       <ScrollView style={{overflow:'hidden'}} >
     
      <RespUi cAns={ c_Ans } p={Tdados[idx].a} fns={finish} v={finish} e={()=>{trocarR(Tdados[idx].a)}}/>
      <RespUi cAns={ c_Ans } p={Tdados[idx].b} fns={finish} v={finish} e={()=>{trocarR(Tdados[idx].b)}}/>
      <RespUi cAns={ c_Ans } p={Tdados[idx].c} fns={finish} v={finish} e={()=>{trocarR(Tdados[idx].c)}}/>
      <RespUi cAns={ c_Ans } p={Tdados[idx].d} fns={finish} v={finish} e={()=>{trocarR(Tdados[idx].d)}}/>
      <RespUi cAns={ c_Ans } p={Tdados[idx].e} fns={finish} v={finish} e={()=>{trocarR(Tdados[idx].e)}}/>

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
              <BtnIndex e = {()=>{bindex(index)}} idx={idx} t={index} fns={finish} correc={Tdados[index]}/>
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