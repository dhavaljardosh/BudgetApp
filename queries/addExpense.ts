import { gql } from "@apollo/client";

export const addExpenseMutation = ({ name, amount, type }) => gql`
  mutation {
    addExpense(input: { name: ${name}, amount: ${amount}, type: ${type} }) {
      id
      name
      amount
      type
    }
  }
`;
