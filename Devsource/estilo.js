import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "blue",
    fontSize: 15,
    fontWeight: "300",
    padding: "5%",
  },
  provas: {
    backgroundColor: "cyan",
    borderRadius: 2,
    borderWidth: 3,
    height: "50%",
    width: 130,
    paddingLeft: "15%",
    paddingTop: "100%",
  },
  provasTxt: {
    fontWeight: "bold",
    fontSize: 25,
  },
  filterButton: {
    fontWeight: "bold",
    fontSize: 17,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 3,
    borderRadius: 16,
    marginTop: 5,
    elevation: 2.5,
  },

  prCont: {
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 3,
    padding: 10,
    paddingLeft: 10,
    width: "100%",
  },
  btn: {
    backgroundColor: "green",
  },
});
