import React, { useState } from "react";
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
import { useMutation } from "@apollo/client";
import { addExpenseMutation } from "../queries/addExpense";

export default ({ setModalVisible, refetch }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const [addExpense, { data }] = useMutation(
    addExpenseMutation({ name, amount, type })
  );

  const addEntry = () => {
    addExpense();
    setModalVisible(false);
    setTimeout(() => refetch(), 1000);
  };

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

      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 25,
            color: "white",
            marginTop: 50,
            marginLeft: 40,
            fontWeight: "600",
          }}
        >
          Add Entry
        </Text>
        <View style={{ flex: 1, marginRight: 40 }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={{ color: "white", marginTop: 50, marginLeft: "auto" }}>
              <Text style={{ fontSize: 20, color: "white" }}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.mainCapsule}>
        <View>
          <Text>Type</Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 2,
              borderColor: "#19A1E9",
              borderRadius: 20,
              overflow: "hidden",
              marginTop: 5,
            }}
          >
            <View
              style={Object.assign(
                {
                  flex: 1,
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                },
                { ...style.center }
              )}
            >
              <Text>Income</Text>
            </View>
            <View
              style={Object.assign(
                {
                  flex: 1,
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                },
                { ...style.center }
              )}
            >
              <Text>Expense</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Description</Text>
          <TextInput
            placeholder="Add Description here"
            onChangeText={(text) => setName(text)}
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              borderBottomWidth: 2,
              borderBottomColor: "#1C9CE7",
              fontSize: 16,
            }}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Amount</Text>
          <TextInput
            placeholder="Amount"
            onChangeText={(text) => setAmount(text)}
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              borderBottomWidth: 2,
              borderBottomColor: "#1C9CE7",
              fontSize: 16,
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
          onPress={() => addEntry()}
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
    elevation: 4,
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
    backgroundColor: "#19A1E9",
    // marginTop: 5,
  },
};
