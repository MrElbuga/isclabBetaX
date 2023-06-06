import React from "react";
import { StyleSheet, Dimensions, Platform, PixelRatio } from "react-native";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

//#fff

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }, txtNormal:
  {
    fontSize: 15,
    fontWeight: "bold"
  }, txtUnderlined:
  {
    fontSize: normalize(15),
    marginRight: 15,
    fontWeight: "bold",
    borderBottomWidth: 1.3,
    color: "gray"
  },
  texto: {
    color: "blue",
    fontSize: normalize(16),
    fontWeight: "00",
    padding: "5%",
  },
  provas: {
    backgroundColor: "cyan",
    borderRadius: 2,
    borderWidth: 1, elevation: 30.5,
    height: "50%",
    width: normalize(150),
    paddingBottom: "25%",
    marginLeft: 10,
    alignItems: 'center', justifyContent: 'center',

  },
  provasTxt: {
    fontWeight: "bold",
    fontSize: normalize(23),
    textAlign: 'center',
    borderBottomWidth: 1.3
  },
  filterButton: {
    fontWeight: "bold",
    fontSize: normalize(17),
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

    paddingLeft: 10,
    width: "100%",
  },
  btn: {
    backgroundColor: "green",
  },
});
