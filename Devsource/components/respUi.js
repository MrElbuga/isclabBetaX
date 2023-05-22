import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import estilo from "../estilo";

export default function RespUi({ p, v, e, fns, idx, cAns }) {
  // console.log("rendered ----->Bts ");
  const [clicked, setclicked] = useState(false);
  function velar() {
    if (fns == true) {
      if (clicked == false) {
        //setclicked(!clicked);
      }
    } else {
      setclicked(!clicked);
    }
  }
  if (p.f != "" && p.f != " ") {
    return (
      <TouchableOpacity
        onPress={() => {
          e();
          velar();
        }}
      >
        <View
          style={[
            estilo.prCont,
            fns == false
              ? p.f == cAns
                ? {
                    backgroundColor: "lightgreen",
                    borderLeftWidth: 13,
                    borderLeftColor: "pink",
                  }
                : { backgroundColor: "white" }
              : //acabou
              p.f == cAns
              ? p.val == 0
                ? { backgroundColor: "lightgreen" }
                : { backgroundColor: "red" }
              : //Not clicked
              p.val == 0
              ? { backgroundColor: "lightgreen" }
              : { backgroundColor: "white" },
          ]}
        >
          <Text style={estilo.texto}>{p.f} </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return;
  }
}
