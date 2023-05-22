import react, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import estilo from "../estilo";

export default function FilterB({ ola, customBool, customCond, curVal }) {
  const [activo, setActivo] = useState(false);

  function geralDao() {
    console.log("Geral:" + activo);
  }
  //geralDao();
  function actualizar(vdd) {
    //console.log("antes:" + vdd);
    if (customBool == false) {
      setActivo(vdd);
    }
    else {
      if (customCond == curVal) {
        setActivo(true);
      } else {
        setActivo(false);

      }
    }
    // console.log("Dps:" + vdd);
  }

  return (
    <Pressable
      onPress={() => {
        actualizar(!activo);
        console.log("mist");
      }}
    >
      <Text
        style={[
          estilo.filterButton,
          activo
            ? { backgroundColor: "darkorange", color: "white" }
            : { backgroundColor: "#FFFFFF" },
        ]}
      >
        {ola}
      </Text>
    </Pressable>
  );
}
