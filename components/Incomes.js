import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { View } from "react-native";
import {
  Card,
  CardItem,
  Body,
  Text
} from "native-base";

import { getAllIncomes } from "../queries/getAllIncomes";

const Incomes = () => {
  const [incomes, setIncomes] = useState([
    { id: 1, name: "Rakesh", type: "human", amount: "1" }
  ]);
  const { loading, error, data } = useQuery(getAllIncomes);
  useEffect(() => {
    if (data) {
      setIncomes(data.getAllIncomes);
    }
  }, [data]);
  if (loading) {
    return <Text>Loading..</Text>;
  }
  if (error) {
    return <Text>Loading..</Text>;
  }

  return (
    <View>
      {incomes.map(income => {
        return (
              <Card key={income.id}>
                <CardItem header bordered>
                    <Text>Name: {income.name}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Type: {income.type}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Amount: $ {income.amount}</Text>
                  </Body>
                </CardItem>
              </Card>
        );
      })}
    </View>
  );
};

export default Incomes;