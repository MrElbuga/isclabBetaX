import React, { memo } from "react";
import { Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import estilo from "../estilo";

function BtnIndex({ e, t, idx, fns, correc }) {
  //console.log("index rendered");
  return (
    <Pressable style={{ marginLeft: 6 }} onPress={e}>
      <Text
        style={[
          estilo.prCont,
          fns == true
            ? idx == t
              ? { backgroundColor: "yellow" }
              : correc.valor == 1
              ? { backgroundColor: "lightgreen" }
              : { backgroundColor: "red" }
            : //N acabou
            idx == t
            ? { backgroundColor: "lightgreen" }
            : correc.currA != " "
            ? { backgroundColor: "cyan" }
            : { backgroundColor: "white" },
          { height: "90%", textAlign: "justify", paddingLeft: 20 },
        ]}
      >
        {t + 1}
      </Text>
    </Pressable>
  );
}

export default BtnIndex;
