import { gql } from "@apollo/client";

export const getAllExpenses = gql`
  {
    getAllExpenses {
        id
        name
        type
        amount
    }
}
`;
