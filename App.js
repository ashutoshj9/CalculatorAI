import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/layouts/Main";
import { Provider } from "./src/ContextApi/DataReducer";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
