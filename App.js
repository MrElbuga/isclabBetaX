import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  BackHandler,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image, Platform,
  Modal, AppState
} from "react-native";

//import RespUi from './Devsource/components/respUi';
import estilo, { normalize } from "./Devsource/estilo";
//Dados
import { sortear } from "./Devsource/Ddata/dados";
import RespUi from "./Devsource/components/respUi";
import BtnIndex from "./Devsource/components/btnIndex";
import ImgUi from "./Devsource/components/imgUi";
import FilterB from "./Devsource/components/filterB";
//Sorter
import * as TScenter from "./Devsource/Ddata/TesteCenter";


export default function App() {
  const [cnt, setCount] = useState(0);
  const [idx, setIndex] = useState(0);
  const [iteste, setTesteI] = useState(0);

  const [iBindex, setIbindex] = useState(0);

  const [cur_cad, setcur_cad] = useState(TScenter.allCads[0]);

  const [Curr_Tdados, setCTDados] = useState(sortear(cur_cad.Teste2[iteste]));
  const [nometeste, setNomeTeste] = useState(cur_cad.T2Nomes[iteste].Numero);


  const [isTesting, setTesting] = useState(true);
  const [Timg, setTimg] = useState(Curr_Tdados[idx].imgs);

  const [finish, setFinish] = useState(false);
  const [c_Ans, setCurAns] = useState("x");

  //Teste
  const [tl_ponto, setVwponto] = useState(false);
  const [tl_provas, setVprovas] = useState(true);
  const [tl_Temas, setVTemas] = useState(false);
  const [custom_cad, setCustom_cad] = useState(false);

  const [pontos, setPontos] = useState(0);

  const [cur_nrP, setcur_nrP] = useState(0);
  const [cur_Org, setcur_Org] = useState(0);

  const materiaList = ["Teste1", "Teste2", "Mix"];
  const testViwList = ["Teste 1", "Teste 2"];
  const [testDispName, set_testDispName] = useState(testViwList[0]);


  const [cur_temas, setcur_temas] = useState([]);
  const [test_type, set_testType] = useState(testViwList[0]);
  const [cur_materia_type, set_cur_materiaType] = useState(materiaList[0]);



  const [isTsSuf, setTsSuf] = useState(false);
  const [isTssing, setTssing] = useState(false);
  const [isShowCad, setShowCad] = useState(true);

  const [curTestNomes, setCurTestNomes] = useState(cur_cad.T1nomes);

  const cadMenuString = isShowCad ? "a sua cadeira" : "o seu ";
  const studyArray = isShowCad ? TScenter.allCads : curTestNomes;
  const cadRef = useRef(null);
  const Bindex_Ref = useRef(null);
  //const Tdados = sortear();

  //Dados  
  const [custom_Teste, setCust_testes] = useState(TScenter.getTemas());

  const [NrPerguntas, setNrPerg] = useState([5, 8, 10, 12]);
  const [OrgPerguntas, setOrgPerg] = useState(["Sequencial"
    , "aleatorio", "Mix"]);

  const [cad_emAval, setcad_aval] = useState(cur_cad.Nome);
  const [orgCadeira, setOrgCadeira] = useState([...TScenter.allCads]);

  //Timmer
  const [seconds, setSeconds] = useState(0);
  const [counterI, setCounterI] = useState(0);

  useEffect(() => {
    //console.log(`I:${iteste},Idx: ${idx}`);
    //console.log(Tdados.length);

    if (typeof Curr_Tdados[iBindex].imgs == "object") {
      setTimg(Curr_Tdados[iBindex].imgs);
    } else {
      //console.log('nada');
      setTimg([]);
    }
    //console.log("Agora Ts: " + isTssing);
    //console.log("Teste Nr: " + iteste);

    //console.log("olem: " + iBindex);
  }, [Curr_Tdados]);

  useEffect(() => {

    //console.log("Curas!");
    sync_Materia();
    //TScenter.setCurTemas(cur_cad.Teste1);
    setCust_testes(TScenter.getTemas());

  }, [cur_cad]);

  useEffect(() => {

    // console.log("Curasx!");
    sync_Materia();

    setCust_testes(TScenter.getTemas());

  }, [cur_materia_type]);

  /*
  useEffect(() => {

    sync_Materia();
    //TScenter.setCurTemas(cur_cad.Teste1);
    setCust_testes(TScenter.getTemas());

  }, [cur_cad]);*/

  useEffect(() => {

    // console.log("vishhh!" + cur_cad.Teste1[0].length);
    ChangeCurTestNomes();


  }, [test_type, cur_cad]);





  ///Name checer
  useEffect(() => {

    // pergtrack();

    if (cur_cad.Teste1.length < 1) {

      if (cur_cad.Teste2.length > 0) {
        set_testDispName(testViwList[1] + ":");
      }
    } else {
      if (cur_cad.Teste2.length < 0) {
        set_testDispName(testViwList[0] + ":");
      }
    }

  });

  useEffect(() => {
    //console.log(`I:${iteste},Idx: ${idx}`);
    //console.log(Tdados.length);
    check_TsSufReq();
    //console.log("Im here: " + isTsSuf);
    //console.log("Teste Nr: " + iteste);

    //console.log("olem: " + iBindex);
  }, [cur_Org, cur_nrP, cur_temas]);

  const scrollToTop = (refi) => {
    if (refi.current) {
      refi.current.scrollToOffset({ offset: 0, animated: false });
    }
  };

  //console.log(TScenter.allCads[2].Teste2[1]);

  function trocarTeste(index) {
    set_testType(testViwList[index]);
  }


  function ChangeCurTestNomes() {

    switch (test_type) {
      case testViwList[0]:

        setCurTestNomes(cur_cad.T1nomes);

        break;
      case testViwList[1]:

        setCurTestNomes(cur_cad.T2Nomes);

        break;

    }


  }



  // [nometeste, iteste, idx, Timg, Tdados]);

  //Data

  const Ola = () => {
    var today = new Date();
    let date = "";
    date =
      today.getDate() +
      `/` +
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getFullYear();

    if (
      today.getDate() > 22 &&
      parseInt(today.getMonth() + 1) == 3 &&
      today.getFullYear() >= parseInt("2024")
    ) {
      setTesting(false);
      BackHandler.exitApp();
    } else {
      setTesting(true);

    }

    if (today.getFullYear() >= parseInt("2025")) {
      setTesting(false);
      console.log('Ecra activoYYY');
      BackHandler.exitApp();


    } else {
      setTesting(true);

    }
  };
  //Ola();

  //Status checker
  useEffect(() => {
    // Increment count whenever the app becomes active
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {

        Ola();
        setCount((prevCount) => prevCount + 1);
      }

      console.log("Status: " + cnt)
    };

    // Add event listener for app state changes
    AppState.addEventListener('change', handleAppStateChange);



  });

  // State to store count value

  const incrementCount = () => {
    // Update state with incremented value
    setCount(cnt + 1);
  };

  //Pontos
  //console.log("Nome: "+nometeste);

  const contarP = () => {
    let valFinal = 0;
    for (let i = 0; i < Curr_Tdados.length; i++) {
      const val = Curr_Tdados[i].valor;
      valFinal += val;
    }

    setPontos(valFinal);
  };


  //Setar Organizacao

  function cur_temFetcher(item) {
    let lisresu = [];
    let valresu = "";
    lisresu = cur_temas.filter(el => { return el == item });
    if (lisresu.length > 0) { valresu = lisresu[0]; }
    return valresu;
  }

  function check_TsSufReq() {
    let res = false;

    if (cur_temas.length > 0 && cur_nrP > 0 && cur_Org.length > 1) {
      res = true;
    }

    setTsSuf(res);


  }

  function pergtrack() {

    setTimeout(() => {


      Ola();
      /* setCounterI(counterI + 1);
       console.log(counterI);*/
    }, 50);

  }

  function setPergOrg(org) {

    switch (org.toLowerCase().trim()) {
      case OrgPerguntas[0].toLowerCase().trim():
        TScenter.setAlea(false);
        break;
      case OrgPerguntas[1].toLowerCase().trim():
        TScenter.setAlea(true);
        break;

      case OrgPerguntas[2].toLowerCase().trim():
        TScenter.setAlea(false);
        break;


    }



  }
  function setarOrg(item) {
    setcur_Org(item);
    setPergOrg(item);
  }

  function setarMateria(item) {
    set_cur_materiaType(item);
  }

  function sync_Materia() {
    switch (cur_materia_type) {
      case materiaList[0]:
        TScenter.setCurTemas(cur_cad.Teste1);

        break;
      case materiaList[1]:
        TScenter.setCurTemas(cur_cad.Teste2);

        break;
      case materiaList[2]:
        TScenter.setCurTemas([...cur_cad.Teste1, ...cur_cad.Teste2]);

        break;

    }
  }

  //  Setar Nr de pergs

  function setarNrP(item) {
    setcur_nrP(item);
    TScenter.setTama(item);
  }

  //Repetir

  const repetir = () => {
    if (isTssing == false) {
      setCTDados(sortear(Curr_Tdados));
    } else {
      setCTDados(sortear(Curr_Tdados));
    }

    bindex(0);
    setFinish(false);
    setCurAns("");

    setTimeout(() => {
      setVwponto(false);
    }, 10);


  };

  //Indice dos botoes
  const bindex = (nr) => {
    // Update state with incremented value
    setIbindex(nr);
    setIndex(nr);
    setCurAns(Curr_Tdados[nr].currA);
    //console.log("ola: " + nr);
    if (typeof Curr_Tdados[nr].imgs == "object") {
      setTimg(Curr_Tdados[nr].imgs);
    } else {
      //console.log('nada');
      setTimg([]);
    }
  };

  //kusko
  const renderRow = ({ item, index }) => {
    return (
      <BtnIndex
        e={() => {
          bindex(index);
        }}
        idx={idx}
        t={index}
        fns={finish}
        correc={Curr_Tdados[index]}
      />
    );
  };

  const nameUpdate = (nr, customData) => {

    if (customData == null) {
      console.log("standardXX");

      setNomeTeste(nr);
    } else {
      console.log("HasXX");

      setNomeTeste(customData);

    }
  };

  const correc = () => {
    setFinish(!finish);
    //c onsole.log("estado: "+finish);
  };

  const novo = (i, customData) => {

    if (customData == null || customData == undefined) {
      console.log("standard");


      switch (test_type) {
        case testViwList[0]:

          setCTDados(sortear(cur_cad.Teste1[i]));

          break;
        case testViwList[1]:

          setCTDados(sortear(cur_cad.Teste2[i]));

          break;

      }
      /*
            if (testDispName == testViwList[0]) {
              setCTDados(sortear(cur_cad.Teste1[i]));
      
            } else {
              setCTDados(sortear(cur_cad.Teste2[i]));
      
            }*/


    } else {
      //console.log("custo");
      setCTDados(customData);
    }


    bindex(0);

    setCurAns("");
    setTimeout(() => {
      setVprovas(false);
    }, 10);

    setFinish(false);
    setVwponto(false);
  };

  const trocarR = (pr) => {
    if (finish == false) {
      const nR = [...Curr_Tdados];
      nR[idx].setEscolha(pr.f);
      setCurAns(nR[idx].currA);
      //console.log(JSON.stringify (nR[idx]));

      if (pr.val == 0) {
        nR[idx].setValor((nR[idx].valor = 1));
      } else {
        nR[idx].setValor((nR[idx].valor = 0));
      }
      setCTDados(nR);
    }
  };




  return (
    //<RespUi resp ={'G G Games'}/>
    <View style={{ flex: 1 }}>
      {isTesting && <View style={estilo.container}>

        {/*<Text style = {estilo.texto}>Cnr games ,Light!</Text>*/}

        {/* Cima*/}
        <View
          style={{
            flex: 1,
            borderTopWidth: 5,
            width: "100%",
            backgroundColor: "red",
            overflow: "hidden",
            top: "0%", paddingTop: 1
          }}
        >
          {/* Menu Testes*/}

          <Modal visible={tl_provas}>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  paddingTop: "10%",
                  fontSize: normalize(18),
                  textAlign: 'center'
                }}
              >
                Escolha {cadMenuString} {test_type}
              </Text>
              <Button
                title="Voltar"
                onPress={() => {
                  setVprovas(false);
                }}
              ></Button>

              {!isShowCad &&
                <FlatList
                  horizontal={true}
                  style={{ borderColor: 'pink', borderWidth: 2, flexGrow: 0, backgroundColor: 'pink' }}
                  contentContainerStyle={{ height: 30 }}
                  data={testViwList}
                  renderItem={({ item, index }) => {
                    return (<TouchableOpacity style={[item == test_type ? { backgroundColor: 'red' } : { backgroundColor: 'black' }, {
                      borderWidth: 2, justifyContent: 'center',
                      alignItems: 'center', paddingHorizontal: 10, borderColor: 'pink'
                    }]} onPress={() => { trocarTeste(index); }} >
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        {item}
                      </Text>
                    </TouchableOpacity>);
                  }}
                />
              }

              <FlatList
                horizontal={true}
                data={studyArray}
                extraData={studyArray}
                ref={cadRef}
                ItemSeparatorComponent={() => <View style={{ width: normalize(5) }} />}

                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {

                        if (isShowCad == false) {
                          setTesteI(index);
                          nameUpdate(studyArray[index].Numero);
                          setTssing(false);
                          scrollToTop(Bindex_Ref);
                          set_testDispName(test_type + " :");
                          novo(index);
                        } else {
                          setTesteI(0);

                          setcur_cad(TScenter.allCads[index]);
                          TScenter.setTudox(TScenter.allCads[index]);
                          setShowCad(false);
                        }
                      }}
                    >
                      <View style={{ paddingTop: "15%", flex: 1 }}>
                        <View style={estilo.provas}>
                          {isShowCad == false &&
                            <Text style={estilo.provasTxt}>
                              {cur_cad.Nome}-{studyArray[index].Numero}
                            </Text>}

                          {isShowCad == true &&
                            <Text style={estilo.provasTxt}>
                              {studyArray[index].Nome}
                            </Text>}
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />

              {!isShowCad && curTestNomes.length < 1 && <View style={{
                position: 'absolute',
                top: '40%', width: '100%'
              }}>
                <Text style={{ fontSize: normalize(20), fontWeight: 'bold', textAlign: 'center' }}>
                  Yo! Sem Dados! Escolha outro Teste/ Cadeira!</Text>

              </View>}

              <Button

                title="Trocar Cadeira"
                onPress={() => {
                  scrollToTop(cadRef);
                  setShowCad(!isShowCad);
                }}
              ></Button>
            </View>
          </Modal>

          {/* Escolhas pause*/}
          <Modal visible={tl_Temas} >
            <View style={[estilo.container, { borderTopLeftRadius: 2 }]}>
              {/* TelaCima pause*/}
              <TouchableOpacity style={[estilo.filterButton, {
                alignSelf: 'flex-start',
                height: '6%', position: 'absolute', marginLeft: '1.2%', alignItems: 'center',
                justifyContent: 'center', top: '-0.5%', backgroundColor: 'red'
              }]}
                onPress={() => {
                  setVTemas(false);
                  setcur_Org("");
                  setcur_nrP(0);
                  setcur_temas([]);
                }}
              >
                <Text style={[estilo.txtNormal, { fontSize: normalize(17) }]}>
                  Voltar
                </Text>
              </TouchableOpacity>
              <View
                style={StyleSheet.create({
                  backgroundColor: "#EAF5FE",
                  width: "95%",
                  paddingLeft: `2%`,
                  paddingRight: `2%`,
                  flexDirection: "column",
                  marginTop: "15%",
                  paddingTop: "3%", bottom: "3%",
                  paddingBottom: "3%",
                  height: '46%',
                  borderRadius: 5, justifyContent: "flex-start",

                })}
              >

                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",

                    justifyContent: "space-between",
                    paddingBottom: "2%",
                  }}
                >

                  <Text
                    style={{
                      bottom: "1%",
                      fontSize: normalize(18),
                      fontWeight: "bold",
                      paddingLeft: 15,
                    }}
                  >
                    Escolha Temas
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setcur_temas([]);
                      setTsSuf(false);

                    }}
                  >

                    <Text
                      style={estilo.txtUnderlined}
                    >
                      Limpar
                    </Text>
                  </TouchableOpacity>

                </View>

                <View
                  style={{
                    width: "100%", flex: 1,
                    borderRadius: 50

                  }}
                >

                  <FlatList
                    style={{
                      borderRadius: 50

                    }}
                    overScrollMode="never"
                    showsVerticalScrollIndicator={true}
                    bounces={false}
                    columnWrapperStyle={{ flexWrap: 'wrap' }}
                    numColumns={4}
                    contentContainerStyle={{ paddingBottom: 2 }}
                    data={custom_Teste}
                    renderItem={
                      ({ item, index }) => {
                        return <FilterB ola={item} customBool={true} curVal={item}
                          customCond={
                            cur_temFetcher(item)
                          }
                          func={() => {

                            if (cur_temas.includes(item)) {

                              let nlista = [...cur_temas];

                              // nlista.push(...cur_temas);
                              nlista = nlista.filter((el, idx) => {
                                return el != item;
                              });
                              setcur_temas(nlista);
                              //console.log(cur_temas);

                            } else {
                              let nlista = [...cur_temas, item];

                              //nlista.push(...cur_temas);
                              // nlista.push(item);
                              setcur_temas(nlista);

                            }

                            check_TsSufReq();

                            //console.log(cur_temas);

                          }} />;
                      }}
                  ></FlatList>


                  {custom_Teste.length < 1 && <View style={{
                    position: 'absolute',
                    top: '40%', width: '100%'
                  }}>
                    <Text style={{ fontSize: normalize(20), fontWeight: 'bold', textAlign: 'center' }}>
                      Yo! Sem Temas! Escolha outro teste ou "Todos"  abaixo!</Text>

                  </View>}

                </View>




              </View>
              {/* Fim Tela cima */}

              {/*  Tela Baixo */}
              {/* EAF5FE*/}
              <View
                style={StyleSheet.create({
                  backgroundColor: "lightblue",
                  width: "95%",
                  flex: 0.7,
                  marginTop: 5,
                  paddingLeft: `2%`,
                  paddingRight: `2%`,
                  flexDirection: "column",
                  flexWrap: "wrap",
                  borderRadius: 5,
                  justifyContent: "flex-start",
                })}
              >


                <ScrollView
                  scrollEnabled={true}
                  showsVerticalScrollIndicator={true}

                  style={{ width: '100%' }}
                >

                  {/* Baixo Tipo de Materia*/}
                  {custom_cad && <View style={{ paddingBottom: '5%', borderBottomWidth: normalize(3), borderBottomColor: 'white', width: '100%' }}>

                    <View

                      style={{
                        flexDirection: "row",
                        paddingTop: "5%"
                        ,
                        width: "100%",
                        justifyContent: "space-between",
                        paddingBottom: "1%",
                      }}
                    >
                      <Text
                        style={{
                          bottom: "1%",
                          fontSize: normalize(18),
                          fontWeight: "bold",
                          textAlign: 'left',
                          paddingLeft: 15,
                        }}
                      >
                        Cadeira x
                      </Text>
                      {/*Tipo de organizacao*/}



                    </View>

                    <FlatList
                      data={TScenter.allCads}
                      style={{ width: '100%', paddingRight: 10 }}
                      contentContainerStyle={{ marginLeft: '5%', paddingBottom: '1%', paddingRight: 20 }}
                      horizontal={true}
                      renderItem={({ item, index }) => {
                        return <FilterB ola={item.Nome} customBool={true}
                          customCond={item.Nome}
                          curVal={cad_emAval}
                          func={() => {
                            //Add index aqui
                            setcad_aval(item.Nome);

                            check_TsSufReq();

                          }} />;
                      }}
                      ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                    ></FlatList>

                  </View>}

                  {/* Baixo Tipo de Materia*/}
                  <View style={{ paddingBottom: '5%', borderBottomWidth: normalize(3), borderBottomColor: 'white', width: '100%' }}>

                    <View

                      style={{
                        flexDirection: "row",
                        paddingTop: "5%"
                        ,
                        width: "100%",
                        justifyContent: "space-between",
                        paddingBottom: "1%",
                      }}
                    >
                      <Text
                        style={{
                          bottom: "1%",
                          fontSize: normalize(18),
                          fontWeight: "bold",
                          textAlign: 'left',
                          paddingLeft: 15,
                        }}
                      >
                        Fonte dos temas em avaliacao:
                      </Text>
                      {/*Tipo de organizacao*/}



                    </View>

                    <FlatList
                      data={materiaList}
                      style={{ width: '100%', paddingRight: 10 }}
                      contentContainerStyle={{ marginLeft: '5%', paddingBottom: '1%', paddingRight: 20 }}
                      horizontal={true}
                      renderItem={({ item, index }) => {
                        return <FilterB ola={item} customBool={true}
                          customCond={item}
                          curVal={cur_materia_type}
                          func={() => {
                            setcur_temas([]);

                            setarMateria(item);
                            check_TsSufReq();

                          }} />;
                      }}
                      ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                    ></FlatList>

                  </View>

                  {/* Baixo Numero de Perguntas*/}

                  <View style={{ borderBottomWidth: normalize(3), borderBottomColor: 'white' }}>
                    <View

                      style={{
                        flexDirection: "row",
                        paddingTop: "5%",
                        width: "100%",
                        justifyContent: "space-between",
                        paddingBottom: "1%",
                      }}
                    >
                      <Text
                        style={{
                          bottom: "1%",
                          fontSize: normalize(18),
                          fontWeight: "bold",
                          paddingLeft: 15,
                        }}
                      >
                        Nr de questoes (aprox...te)
                      </Text>

                      <TouchableOpacity
                        onPress={() => {
                          setcur_nrP(0);
                          check_TsSufReq();

                          console.log(cur_temas);
                        }}
                      >
                        <Text
                          style={estilo.txtUnderlined}
                        >
                          Limpar
                        </Text>
                      </TouchableOpacity>



                    </View>

                    <FlatList
                      data={NrPerguntas}
                      contentContainerStyle={{ marginLeft: '5%', paddingBottom: 10 }}
                      horizontal={true}
                      renderItem={({ item, index }) => {
                        return <FilterB ola={item} customBool={true}
                          customCond={item}
                          curVal={cur_nrP}
                          func={() => {
                            setarNrP(item);
                            check_TsSufReq();

                          }} />;

                      }}
                      ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                    ></FlatList>
                  </View>


                  {/* Baixo Tipo de organizacao*/}
                  <View style={{ paddingBottom: '5%', width: '100%' }}>

                    <View

                      style={{
                        flexDirection: "row",
                        paddingTop: "5%"
                        ,
                        width: "100%",
                        justifyContent: "space-between",
                        paddingBottom: "1%",
                      }}
                    >
                      <Text
                        style={{
                          bottom: "1%",
                          fontSize: normalize(18),
                          fontWeight: "bold",
                          textAlign: 'left',
                          paddingLeft: 15,
                        }}
                      >
                        Tipo de organizacao
                      </Text>
                      {/*Tipo de organizacao*/}
                      <TouchableOpacity
                        onPress={() => {
                          setcur_Org("");
                          check_TsSufReq();

                        }}
                      >
                        <Text
                          style={estilo.txtUnderlined}
                        >
                          Limpar
                        </Text>
                      </TouchableOpacity>



                    </View>

                    <FlatList
                      data={OrgPerguntas}
                      style={{ width: '100%', paddingRight: 10 }}
                      contentContainerStyle={{ marginLeft: '5%', paddingBottom: '1%', paddingRight: 20 }}
                      horizontal={true}
                      renderItem={({ item, index }) => {
                        return <FilterB ola={item} customBool={true}
                          customCond={item}
                          curVal={cur_Org}
                          func={() => {
                            setarOrg(item);

                            check_TsSufReq();

                          }} />;
                      }}
                      ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                    ></FlatList>

                  </View>

                </ScrollView>
              </View>
              <TouchableOpacity style={[estilo.filterButton, isTsSuf ? { display: 'flex' } : { display: 'none' },
              {
                alignSelf: 'flex-end',
                height: 40, justifyContent: 'center', top: '4.4%'
              }]} onPress=
                {() => {
                  try {

                    TScenter.setTemas(cur_temas);
                    //  console.log(cur_temas);
                    //setTesteI(index);
                    novo("index", TScenter.updateTest());

                    setTssing(true);
                    nameUpdate("", `Teste Random de ${TScenter.getTemaN(Curr_Tdados)}`);
                    set_testDispName("");

                    setTimeout(() => {
                      setVTemas(false);
                    }, 5);


                    //asasas

                  } catch (error) {
                    console.log(error);
                  }


                }}>
                <Text style={[estilo.txtNormal, { fontSize: 17 }]}>
                  Prosseguir
                </Text>
              </TouchableOpacity>

            </View>
          </Modal>

          {/* Menu pause*/}
          <Modal visible={tl_ponto}>
            <View style={[estilo.container, { borderTopLeftRadius: 2 }]}>
              <Text
                style={{
                  bottom: "5%",
                  fontSize: normalize(18),
                  borderBottomWidth: 2,
                  fontWeight: "bold",
                }}
              >
                Pontuacao: {pontos} de {Curr_Tdados.length - 1}
              </Text>

              <Button
                title="Ver  Correccao   "
                onPress={() => {

                  setTimeout(() => {
                    setVwponto(false);
                  }, 4);

                  setFinish(true);
                }}
              />
              <Button
                title="Escolher Testes"
                onPress={() => {
                  setVprovas(true);
                }}
              />
              <Button
                title="Rever por  Tema "
                onPress={() => {
                  setVTemas(true);
                  setcad_aval(cur_cad.Nome);
                }}
              />
              <Button
                title="       Repetir            "
                onPress={() => {
                  repetir();
                }}
              />

              <Text
                style={{
                  top: "90%",
                  fontSize: normalize(18),
                  position: 'absolute',
                  borderBottomWidth: 2,
                  fontWeight: "bold",
                }}
              >
                Ver Beta: 0.3

              </Text>
            </View>
          </Modal>

          <View style={{ flex: 1, bottom: 0 }}>
            <Text
              style={[estilo.texto, { fontWeight: "900", alignSelf: "center" }]}
            >
              {testDispName} {nometeste}
            </Text>
            <ScrollView
              style={{
                borderTopWidth: 5,
                borderTopColor: "darkred",
                backgroundColor: "pink",

              }}
              contentContainerStyle={{ paddingBottom: '10%' }}
            >
              {/*<View style ={{flex:1,backgroundColor:'lightblue'}}>*/}
              <Text style={estilo.texto}>{Curr_Tdados[idx].prg}</Text>
              <Button
                title="Terminar!"
                onPress={() => {
                  contarP();
                  setVwponto(true);
                }}
              ></Button>
              <FlatList
                horizontal={true}
                data={Timg}
                renderItem={({ item, index }) => {
                  return <ImgUi i={item} />;
                }}
              ></FlatList>

              {/*<ScrollView horizontal={true}>          
                       <Image style={{aspectRatio:1,height:500,width:undefined,resizeMode:'stretch'}} source={require('./Devsource/imagem/digital.jpg')}/>
     </ScrollView> */}
            </ScrollView>
          </View>
        </View >
        {/* Baixo*/}
        <View
          style={{
            height: '60%',
            alignItems: "center",
            width: "100%",
            backgroundColor: "black",
          }
          }
        >
          <View style={{ top: "5%", height: "80%", width: "97%" }}>
            <ScrollView style={{ overflow: "hidden" }}
              contentContainerStyle={{ paddingBottom: 50 }}>
              <RespUi
                cAns={c_Ans}
                p={Curr_Tdados[idx].a}
                fns={finish}
                v={finish}
                e={() => {
                  trocarR(Curr_Tdados[idx].a);
                }}
              />
              <RespUi
                cAns={c_Ans}
                p={Curr_Tdados[idx].b}
                fns={finish}
                v={finish}
                e={() => {
                  trocarR(Curr_Tdados[idx].b);
                }}
              />
              <RespUi
                cAns={c_Ans}
                p={Curr_Tdados[idx].c}
                fns={finish}
                v={finish}
                e={() => {
                  trocarR(Curr_Tdados[idx].c);
                }}
              />
              <RespUi
                cAns={c_Ans}
                p={Curr_Tdados[idx].d}
                fns={finish}
                v={finish}
                e={() => {
                  trocarR(Curr_Tdados[idx].d);
                }}
              />
              <RespUi
                cAns={c_Ans}
                p={Curr_Tdados[idx].e}
                fns={finish}
                v={finish}
                e={() => {
                  trocarR(Curr_Tdados[idx].e);
                }}
              />

              {/*<View style={{ height: 10, width: "100%" }}></View>*/}
            </ScrollView>
          </View>

          <View
            style={

              {
                backgroundColor: "skyblue",
                paddingLeft: '0.1%',
                flex: 1,
                width: '100%', borderTopWidth: 3
              }}
          >
            <FlatList

              style={{ width: '104%', paddingLeft: '1%', height: '100%' }}
              contentContainerStyle={{ height: '70%', alignSelf: 'center', paddingRight: '10%' }}
              ref={Bindex_Ref}
              horizontal={true}
              data={Curr_Tdados}
              renderItem={renderRow}
              estimatedItemSize={40}
            />
          </View>

        </View >
      </View >
      }
    </View>

  );
}

const es = StyleSheet.create({
  btn: {
    width: "80%",
  },
});
