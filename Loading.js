import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Loading() {
  return (
    <View style={styles.container}><Text>Getting the weather</Text></View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})