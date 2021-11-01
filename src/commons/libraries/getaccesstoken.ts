import { gql } from "@apollo/client";
import { Modal } from "antd";
import { GraphQLClient } from "graphql-request";

const RESORE_ACCESSTOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

//1. refreshToken으로 새로운 accessToken발급 받기
//@ts-ignore
export const getAccessToken = async (setAccessToken) => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend02.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESORE_ACCESSTOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    //@ts-ignore
    Modal.error({content : error.message});
  }
};
