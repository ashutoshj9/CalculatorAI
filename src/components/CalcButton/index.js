import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import button from "./buttons.json";
import { Context } from "../../ContextApi/DataReducer";

const CalcButton = () => {
  const {KeyInput } = useContext(Context);
  const renderButtons = ({ item }) => {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => KeyInput(item.value, item.id)}>
        <Text style={styles.buttonTextStyle}>{item.value}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.ButtonContainer}>
      <FlatList
        data={button}
        key={"#"}
        keyExtractor={(item) => "#" + item.id}
        renderItem={renderButtons}
        numColumns={4}
      />
    </View>
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
  },
  buttonStyle: {
    flexGrow: 1,
    backgroundColor: "#000",
    paddingVertical: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: 0,
    // borderColor: "#fff",
    // borderWidth: 0.2
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 20
  },
});
