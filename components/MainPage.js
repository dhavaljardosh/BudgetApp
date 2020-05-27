import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { getBalanceSheetQuery } from "../queries/getBalanceSheet";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import AddButton from "./AddButton";
import { Container, Header, Content, Tab, Tabs } from "native-base";

import Expenses from "./Expenses.js";
import Incomes from "./Incomes.js";

export default () => {
  const [getBalanceSheet, { called, loading, data }] = useLazyQuery(
    getBalanceSheetQuery
  );
  // const { loading, error, data } = useLazyQuery(getBalanceSheetQuery, {
  //   pollInterval: 0,
  // });

  console.log(called, loading, data);

  useEffect(() => {
    getBalanceSheet();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
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
        Budget
      </Text>

      <View style={style.mainCapsule}>
        <View>
          <Text>Total</Text>
          <Text style={style.runningTotal}>{data && data.getBalanceSheet}</Text>
          <Text style={{ color: "red", marginTop: 5 }}>- $250 today</Text>
        </View>

        <View style={style.addButtonRight}>
          <AddButton refetch={getBalanceSheet} />

          {/* <View style={style.addButton}>
            <Text style={{ fontSize: 30, color: "white" }}>+</Text>
          </View> */}
        </View>
      </View>
      <View>
        <Text style={{ marginLeft: 40, marginTop: 20, fontSize: 18 }}>
          Recent Transaction
        </Text>
        <View>
          {new Array(4).fill("0").map((data, index) => {
            return <SingleItem key={index} />;
          })}
        </View>
        <Tabs>
          <Tab heading="Expenses">
            <Expenses />
          </Tab>
          <Tab heading="Income">
            <Incomes />
          </Tab>
        </Tabs>
      </View>
    </ScrollView>
  );
};

const SingleItem = () => {
  return (
    <View style={{ ...style.shadow, ...style.singleTransaction }}>
      <View style={{ flex: 1 }}>
        <View>
          <Text>Description</Text>
          <Text>Date and Time</Text>
        </View>
      </View>
      <View style={{ width: 70 }}>
        <View>
          <Text style={{ fontSize: 16 }}>$ 500</Text>
        </View>
      </View>
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
    top: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    elevation: 4,
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
};
