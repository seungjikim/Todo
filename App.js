import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "b9c753b30eb240728ed2ff4197f1e49a";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: {temp},
        weather
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp
    });
    console.log(condition);
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      //promise를 반환함
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    }
    catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (<Loading/>) : (<Weather temp={Math.round(temp)} condition={condition}/>);
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
    color: "black"
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
