import { gql } from "@apollo/client";

export const getBalanceSheetQuery = gql`
  {
    getAllIncomes {
        id
        name
        type
        amount
    }
}
`;
