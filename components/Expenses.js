import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { View, ActivityIndicator } from "react-native";
import {
  Card,
  CardItem,
  Body,
  Text
} from "native-base";

import { getAllExpenses } from "../queries/getAllExpenses";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const { loading, error, data } = useQuery(getAllExpenses);
  useEffect(() => {
    if (data) {
      setExpenses(data.getAllExpenses);
    }
    console.log("loading from expenses : " + loading)
  }, [loading, error, data]);

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View>
      {expenses.map(expense => {
        return (
          <Card key={expense.id}>
          <CardItem header>
              <Text>Name: {expense.name}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Type: {expense.type}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Amount: $ {expense.amount}</Text>
            </Body>
          </CardItem>
        </Card>
        )
      })}
    </View>
  );
};

export default Expenses;
