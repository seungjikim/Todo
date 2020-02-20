import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#544a7d", "#ffd452"],
    title: "Thunderstorm",
    subtitle: "Don't be too scared"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#1f4037", "#99f2c8"],
    title: "Drizzle",
    subtitle: "Annoying day"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#7f7fd5", "#86a8e7", "#91eae4"],
    title: "Raining",
    subtitle: "I hate Raining"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#005aa7", "#fffde4"],
    title: "Let's make a snow ball",
    subtitle: "Do you wanna build a snowman?"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#d3959b", "#bfe6ba"],
    title: "I love sunny days",
    subtitle: "Let's hang out!"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "awww...Nothing special"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
    subtitle: "Nooo!"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#636363", "#a2ab58"],
    title: "Dusty! Keep your Mask",
    subtitle: "Keep your Mask, hanging outside"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
};

export default function Weather({temp, condition}) {
    return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
         size={100}
         name={weatherOptions[condition].iconName}
         color="white"
         />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{...styles.halfTextContainer, ...styles.textContainer}}>
        <Text style={styles.today}>
          Today is..
        </Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
      </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 40,
    color: "white"
  },

  halfContainer: {
    paddingTop: 100,
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  },
  halfTextContainer: {
    paddingBottom: 100,
    flex: 1,
    paddingBottom: 50
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    marginBottom: 100
  },
  today: {
    color: "white",
    fontSize: 60,
    marginBottom: 10,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
})