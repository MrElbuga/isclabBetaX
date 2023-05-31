import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useCallback, useMemo } from "react";
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
  Image,
  Modal,
} from "react-native";

//import RespUi from './Devsource/components/respUi';
import estilo from "./Devsource/estilo";
//Dados
import { sortear } from "./Devsource/Ddata/dados";
import { todos, tnomes } from "./Devsource/Ddata/testes";
import RespUi from "./Devsource/components/respUi";
import BtnIndex from "./Devsource/components/btnIndex";
import ImgUi from "./Devsource/components/imgUi";
import FilterB from "./Devsource/components/filterB";

export default function App() {
  const [cnt, setCount] = useState(0);
  const [idx, setIndex] = useState(0);
  const [iteste, setTeste] = useState(0);

  const [iBindex, setIbindex] = useState(0);
  const [nometeste, setNomeTeste] = useState(tnomes[iteste].Numero);

  const [Tdados, setDados] = useState(sortear(todos[iteste]));
  const [Timg, setTimg] = useState(Tdados[idx].imgs);

  const [finish, setFinish] = useState(false);
  const [c_Ans, setCurAns] = useState("x");

  //Teste
  const [t_ponto, setVwponto] = useState(false);
  const [t_provas, setVprovas] = useState(false);

  const [pontos, setPontos] = useState(0);

  const [cur_nrP, setcur_nrP] = useState(0);
  const [cur_Org, setcur_Org] = useState(0);

  const [cur_temas, setcur_temas] = useState([]);

  const fil_Teste =
    ["A relação EMP-PROJ, com estas dependências funcionais, viola que forma normal?",
      "Denji",
      `9. Se uma tabela foi normalizada de modo que todos determinantes são chaves candidatas, então
        essa tabela está na:`,
      "Portuga", "matematica Discreta 120", "olemx", "DGD", "DGD1", "olemx", "DGD", "DGD1"
      , "olemx", "DGD", "DGD1", "Oshi"];

  //const Tdados = sortear();

  //Dados
  const [NrPerguntas, setNrPerg] = useState([5, 8, 10, 12]);
  const [OrgPerguntas, setOrgPerg] = useState(["Sequencial"
    , "aleatorio", "Batceba Mix"]);

  useEffect(() => {
    //console.log(`I:${iteste},Idx: ${idx}`);
    //console.log(Tdados.length);

    if (typeof Tdados[iBindex].imgs == "object") {
      setTimg(Tdados[iBindex].imgs);
    } else {
      //console.log('nada');
      setTimg([]);
    }
    console.log("Teste Nr: " + iteste);

    console.log("olem: " + iBindex);
  }, [Tdados]);

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
      today.getDate() >= 16 &&
      parseInt(today.getMonth() + 1) == 12 &&
      today.getFullYear() == "2022"
    ) {
      //  BackHandler.exitApp();
    }

    if (today.getFullYear() == "2023") {
      // BackHandler.exitApp();
    }
  };
  Ola();
  // State to store count value

  const incrementCount = () => {
    // Update state with incremented value
    setCount(cnt + 1);
  };

  //Pontos
  //console.log("Nome: "+nometeste);

  const contarP = () => {
    let valFinal = 0;
    for (let i = 0; i < Tdados.length; i++) {
      const val = Tdados[i].valor;
      valFinal += val;
    }

    setPontos(valFinal);
  };


  //Setar Organizacao

  function setarOrg(item) {
    setcur_Org(item);
  }
  //  Setar Nr de pergs

  function setarNrP(item) {
    setcur_nrP(item);
  }

  //Repetir

  const repetir = () => {
    setDados(sortear(todos[iteste]));

    bindex(0);
    setFinish(false);
    setCurAns("");
    setVwponto(false);
  };

  //Indice dos botoes
  const bindex = (nr) => {
    // Update state with incremented value
    console.log("aaaaa");
    setIbindex(nr);
    setIndex(nr);
    setCurAns(Tdados[nr].currA);
    //console.log("ola: " + nr);
    if (typeof Tdados[nr].imgs == "object") {
      setTimg(Tdados[nr].imgs);
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
        correc={Tdados[index]}
      />
    );
  };

  const nameUpdate = (nr) => {
    setNomeTeste(tnomes[nr].Numero);
  };

  const correc = () => {
    setFinish(!finish);
    //c onsole.log("estado: "+finish);
  };

  const novo = (i) => {
    setDados(sortear(todos[i]));

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
      const nR = [...Tdados];
      nR[idx].setEscolha(pr.f);
      setCurAns(nR[idx].currA);
      //console.log(JSON.stringify (nR[idx]));

      if (pr.val == 0) {
        nR[idx].setValor((nR[idx].valor = 1));
      } else {
        nR[idx].setValor((nR[idx].valor = 0));
      }
      setDados(nR);
    }
  };

  return (
    //<RespUi resp ={'G G Games'}/>

    <View style={estilo.container}>
      {<StatusBar style="dark" />}

      {/*<Text style = {estilo.texto}>Cnr games ,Light!</Text>*/}

      {/* Cima*/}
      <View
        style={{
          flex: 1.8,
          borderTopWidth: 5,
          width: "100%",
          backgroundColor: "red",
          overflow: "hidden",
          top: "3%",
        }}
      >
        {/* Menu Testes*/}

        <Modal visible={t_provas}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                paddingLeft: "10%",
                fontWeight: "bold",
                paddingTop: "10%",
                fontSize: 20,
              }}
            >
              {" "}
              Escolha o seu Teste 2{" "}
            </Text>
            <Button
              title="Voltar"
              onPress={() => {
                setVprovas(false);
              }}
            ></Button>
            <FlatList
              horizontal={true}
              data={todos}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setTeste(index);
                      nameUpdate(index);
                      //
                      novo(index);
                    }}
                  >
                    <View style={{ paddingTop: "15%", flex: 1 }}>
                      <View style={estilo.provas}>
                        <Text style={estilo.provasTxt}>
                          Teste:{tnomes[index].Numero}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </Modal>

        {/* Escolhas pause*/}
        <Modal visible={true} >
          <View style={[estilo.container, { borderTopLeftRadius: 2 }]}>
            {/* TelaCima pause*/}
            <TouchableOpacity style={[estilo.filterButton, {
              alignSelf: 'flex-start',
              height: 40, justifyContent: 'center', bottom: '7.1%', backgroundColor: 'red'
            }]}>
              <Text style={[estilo.txtNormal, { fontSize: 17 }]}>
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
                paddingTop: "3%", bottom: "3%",
                paddingBottom: "3%",
                height: '50%',
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
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingLeft: 15,
                  }}
                >
                  Escolha Temas
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setcur_temas("");
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
                  data={fil_Teste}
                  renderItem={
                    ({ item, index }) => {
                      return <FilterB ola={item} customBool={false} func={() => {




                        if (cur_temas.includes(item)) {

                          let nlista = [...cur_temas];

                          // nlista.push(...cur_temas);
                          nlista = nlista.filter((el, idx) => {
                            return el != item;
                          });
                          setcur_temas(nlista);
                          console.log(cur_temas);

                        } else {
                          let nlista = [...cur_temas, item];

                          //nlista.push(...cur_temas);
                          // nlista.push(item);
                          setcur_temas(nlista);

                        }

                        console.log(cur_temas);

                      }} />;
                    }}
                ></FlatList>


              </View>




            </View>
            {/* Fim Tela cima */}

            {/*  Tela Baixo */}
            {/* EAF5FE*/}
            <View
              style={StyleSheet.create({
                backgroundColor: "lightblue",
                width: "95%",
                flex: 0.6,
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

                <View >
                  {/* Baixo Numero de Perguntas*/}
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
                        fontSize: 20,
                        fontWeight: "bold",
                        paddingLeft: 15,
                      }}
                    >
                      ~ Nr de questoes
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        setcur_nrP("");
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
                        func={() => { setarNrP(item); }} />;

                    }}
                    ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                  ></FlatList>
                </View>


                {/* Baixo Tipo de organizacao*/}
                <View style={{ paddingBottom: '4%', width: '100%' }}>

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
                        fontSize: 20,
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
                        func={() => { setarOrg(item); }} />;
                    }}
                    ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                  ></FlatList>

                </View>

              </ScrollView>
            </View>
            <TouchableOpacity style={[estilo.filterButton, {
              alignSelf: 'flex-end',
              height: 50, justifyContent: 'center', top: '4.5%'
            }]}>
              <Text style={[estilo.txtNormal, { fontSize: 17 }]}>
                Prosseguir
              </Text>
            </TouchableOpacity>

          </View>
        </Modal>

        {/* Menu pause*/}
        <Modal visible={t_ponto}>
          <View style={[estilo.container, { borderTopLeftRadius: 2 }]}>
            <Text
              style={{
                bottom: "5%",
                fontSize: 15,
                borderBottomWidth: 2,
                fontWeight: "bold",
              }}
            >
              Seus valores: {pontos} de {Tdados.length - 1}: Ignore o visual!!!!
            </Text>

            <Button
              title="Ver Correccao"
              onPress={() => {
                setVwponto(false);
                setFinish(true);
              }}
            />
            <Button
              title="Escolher testes"
              onPress={() => {
                setVprovas(true);
              }}
            />
            <Button
              title="Repetir"
              onPress={() => {
                repetir();
              }}
            />
          </View>
        </Modal>

        <View style={{ height: "95.4%" }}>
          <Text
            style={[estilo.texto, { fontWeight: "900", alignSelf: "center" }]}
          >
            Teste 2 Ano: {nometeste}
          </Text>
          <ScrollView
            style={{
              borderTopWidth: 5,
              borderTopColor: "darkred",
              backgroundColor: "pink",
              paddingLeft: 2,
            }}
          >
            {/*<View style ={{flex:1,backgroundColor:'lightblue'}}>*/}
            <Text style={estilo.texto}>{Tdados[idx].prg}</Text>
            <Button
              title="Entregar!"
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
      <View View
        style={{
          flex: 0.8,
          alignItems: "center",
          width: "100%",
          backgroundColor: "black",
        }
        }
      >
        <View style={{ top: "5%", height: "73%", width: "97%" }}>
          <ScrollView style={{ overflow: "hidden" }}>
            <RespUi
              cAns={c_Ans}
              p={Tdados[idx].a}
              fns={finish}
              v={finish}
              e={() => {
                trocarR(Tdados[idx].a);
              }}
            />
            <RespUi
              cAns={c_Ans}
              p={Tdados[idx].b}
              fns={finish}
              v={finish}
              e={() => {
                trocarR(Tdados[idx].b);
              }}
            />
            <RespUi
              cAns={c_Ans}
              p={Tdados[idx].c}
              fns={finish}
              v={finish}
              e={() => {
                trocarR(Tdados[idx].c);
              }}
            />
            <RespUi
              cAns={c_Ans}
              p={Tdados[idx].d}
              fns={finish}
              v={finish}
              e={() => {
                trocarR(Tdados[idx].d);
              }}
            />
            <RespUi
              cAns={c_Ans}
              p={Tdados[idx].e}
              fns={finish}
              v={finish}
              e={() => {
                trocarR(Tdados[idx].e);
              }}
            />
            <View style={{ height: "10%", width: "100%" }}></View>
          </ScrollView>
        </View>

        <View
          style={[
            estilo.prCont,
            {
              backgroundColor: "skyblue",
              height: "30%",
              top: "3%",
              paddingTop: "2%",
            },
          ]}
        >
          <FlatList
            horizontal={true}
            data={Tdados}
            renderItem={renderRow}
            estimatedItemSize={40}
          />
        </View>
      </View >
    </View >
  );
}

const es = StyleSheet.create({
  btn: {
    width: "80%",
  },
});
