import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';


export default class extends React.Component {
  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    }
    catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }
  componentDidMount() {
  }
  render() {
    return <Loading/>
  }
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
