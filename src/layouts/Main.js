import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CalcButton from "../components/CalcButton";
import InputField from "../components/InputField";
import ResultField from "../components/ResultField";

const Main = () => {
  return (
    <View style={styles.MainContainer}>
      <InputField />
      <ResultField />
      <View style={{ flexGrow: 1 }}>
        <CalcButton />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
