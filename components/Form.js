import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default ({ setModalVisible }) => {
  return (
    <View>
      <Image
        source={require("../assets/back.png")}
        style={{
          position: "absolute",
          top: -40,
          width: Dimensions.get("screen").width,
        }}
      />

      <Text
        style={{
          fontSize: 40,
          color: "white",
          marginTop: 50,
          marginLeft: 40,
          fontWeight: "600",
        }}
      >
        Add Entry
      </Text>
      <Button
        onPress={() => setModalVisible(false)}
        title="Close"
        color="white"
      />

      <View style={style.mainCapsule}>
        <View>
          <Text>Type</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={Object.assign({ flex: 1 }, { ...style.center })}>
              <Text>Income</Text>
            </View>
            <View style={Object.assign({ flex: 1 }, { ...style.center })}>
              <Text>Expense</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Description</Text>
          <TextInput
            style={{
              backgroundColor: "lightgray",
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 10,
              fontSize: 18,
            }}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Amount</Text>
          <TextInput
            style={{
              backgroundColor: "lightgray",
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 10,
              fontSize: 18,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingHorizontal: 60,
            paddingVertical: 15,
            borderRadius: 50,
            color: "white",
            backgroundColor: "#1C9CE7",
            // width: 100,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "500",
              fontSize: 18,
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
};

const style = {
  mainCapsule: {
    elevate: 4,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
    marginHorizontal: 40,
    marginTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOpacity: 1.0,
    position: "relative",
  },
  runningTotal: {
    fontSize: 35,
  },
  addButton: {
    height: 50,
    width: 50,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19A1E9",
    fontSize: 40,
  },
  addButtonRight: {
    position: "absolute",
    height: "100%",
    paddingVertical: 20,
    right: 20,
    top: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    elevate: 4,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOpacity: 1.0,
  },
  singleTransaction: {
    padding: 20,
    marginHorizontal: 40,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "lightgray",
    marginTop: 5,
  },
};
