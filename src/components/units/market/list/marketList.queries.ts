import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($page: Int, $isSoldout: Boolean, $search: String) {
    fetchUseditems(page: $page, isSoldout: $isSoldout, search: $search) {
      _id
      name
      contents
      price
      images
      pickedCount
      tags
      remarks
      seller {
        name
      }
    }
  }
`;

export const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      contents
      price
      images
      pickedCount
      tags
      remarks
    }
  }
`;
