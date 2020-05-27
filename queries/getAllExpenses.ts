import { gql } from "@apollo/client";

export const getBalanceSheetQuery = gql`
  {
    getAllExpenses {
        id
        name
        type
        amount
    }
}
`;
