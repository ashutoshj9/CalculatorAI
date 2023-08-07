import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../../ContextApi/DataReducer";
import { useEffect } from "react";

const InputField = () => {
  const { state, CalcResult } = useContext(Context)

  useEffect(() => {
    CalcResult(state.previous, state.input)
  }, [state.input])

  return (
    <View style={styles.inputFieldContainer}>
      <TextInput
        value={state.input && state.input.match(/[0-9, "."]/g).join('')}
        style={styles.inputTextStyle}
        showSoftInputOnFocus={false}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputFieldContainer: {
    flexGrow: 0.4,
  },
  inputTextStyle: {
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 999,
    paddingHorizontal: "2%",
    fontSize: 50,
  },
});
