import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/commons/layout";
import { Global } from "@emotion/react";
import { globalstyles } from "../src/commons/styles/globalstyles";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { getAccessToken } from "../src/commons/libraries/getaccesstoken";
import { onError } from "@apollo/client/link/error";

// if (typeof window !== "undefined") {
//   firebase.initializeApp({
//     apiKey: "AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8",
//     authDomain: "codecamp-01.firebaseapp.com",
//     databaseURL: "https://codecamp-01.firevaseio.com",
//     projectId: "codecamp-01",
//     storageBucket: "codecamp-01.appspot.com",
//   });
// }

export const GlobalContext = createContext({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          //2. 발급받은 accessToken으로 방금 실패했던 query 재실행 하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    // uri: 'http://backend02.codebootcamp.co.kr/graphql',//백앤드 API가 있는 주소
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Layout>
          <Global styles={globalstyles} />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}
export default MyApp;
