import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import LandingUI from "./landing.presenter";
import { FETCH_USER_LOGGED_IN } from "./landing.queries";


export interface IQueryData {
  query: DocumentNode | TypedDocumentNode<IQueryData, OperationVariables>, options?: QueryHookOptions<...> | undefined): QueryResult<...>
}

export default function Landing() {
  const { data } = useQuery<IQueryData>(FETCH_USER_LOGGED_IN);

  return (
    
    <LandingUI data={data} />
  );
}
