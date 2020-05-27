import { gql } from "@apollo/client";

export const getAllIncomes = gql`
  {
    getAllIncomes {
        id
        name
        type
        amount
    }
}
`;
