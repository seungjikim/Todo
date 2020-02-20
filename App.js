import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}></View>
      <View style={styles.GreenView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 전체 화면을 가짐, 모든 화면 사용 가능, 레이아웃 조정을 쉽게 해줌 
    backgroundColor: '#fff', //바탕 화면
    alignItems: 'center', 
    justifyContent: 'center',
    //default는 flextDirectiron:"column"
  },
  text: {
    color: "white"
 //   width: "100%", "100px"는 작동 안함.
  },

  yellowView: {
    flex: 1,
    backgroundColor: "#FAED7D"
  },
  GreenView: {
    flex: 2,
    backgroundColor: "#CEF279"
  }
});
