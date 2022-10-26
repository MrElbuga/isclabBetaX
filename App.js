import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View,Button,StyleSheet, ScrollView,TouchableOpacity, FlatList, SafeAreaView, Image, Modal } from 'react-native';

//import RespUi from './Devsource/components/respUi';
import estilo from './Devsource/estilo';
//Dados
import {pdfl,pdados,sortear} from './Devsource/Ddata/dados';
import { todos } from './Devsource/Ddata/testes';
import RespUi from './Devsource/components/respUi';
import BtnIndex from './Devsource/components/btnIndex';
import ImgUi from './Devsource/components/imgUi'; 



export default function App() {
const [cnt, setCount] = useState(0);
const [idx, setIndex] = useState(0);
const [iteste,setTeste]= useState(0);


const [Tdados,setDados] = useState(sortear(todos[iteste]));
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
  setCurAns('');
  setDados(sortear(todos[iteste]));
  setVwponto(false);
  setVprovas(false);

}

//Indice dos botoes
const bindex = (nr) => {
     // Update state with incremented value
    // console.log('aquikkk');

   
  setIndex(nr);
  setCurAns(Tdados[nr].currA);
  if(typeof (Tdados[nr].imgs)=='object'){
  setTimg(Tdados[nr].imgs);
  //console.log('Objecto');
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
                          <Button title='Voltar' onPress={()=>{setVprovas(false);}}></Button>
                        <FlatList
                            horizontal={true}
                              data={ todos}
                              renderItem = {({item,index})=>
                               {
                                 return (
                                  <TouchableOpacity onPress={()=>{repetir() ;setTeste(index);}}>
                                     <View style={{paddingTop: '10%',flex:1}}>
                                      <Text  style={estilo.provas}>Teste:{index+1}</Text>
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
                        <Text>Seus valores: {pontos} de  {Tdados.length-1}: exame tomorrow!!!!</Text>

                               <Button title= 'Ver Correccao' onPress={()=>{setVwponto(false);setFinish(true);}}/>
                               <Button title= 'Escolher testes'  onPress={()=>{setVprovas(true);}}/>
                               <Button title= 'Repetir' onPress={()=>{repetir();}}/>

                               
                      </View>
                    </Modal>
                    
                    <View style={{ height: "89.6%" }}>
                  <ScrollView style={{backgroundColor:'pink',paddingLeft:2}}>
                     {/*<View style ={{flex:1,backgroundColor:'lightblue'}}>*/}
                          <Text style={estilo.texto}>
                          {Tdados[idx].prg}  Teste:{iteste}
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


                   








                    
                </ScrollView>
                </View>

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
       <View style={{height:'10%',width:'100%'}}></View>
        </ScrollView>
        </View>

        <View style={[estilo.prCont,{backgroundColor:'skyblue',height:"30%",top:'3%',
        paddingTop:'2%'}]}>
    
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