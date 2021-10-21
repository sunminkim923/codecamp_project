import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Register from "../../../../../src/components/units/market/write/marketWrite.container";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        address
        addressDetail
      }
    }
  }
`;

export default function EditPage() {
  const isEdit = true;
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  

  return <Register isEdit={isEdit} data={data} />;
}
