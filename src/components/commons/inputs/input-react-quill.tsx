import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Quill = styled(ReactQuill)`
  height: 320px;
`;

export default function TextAreaQuill(props: any) {
  return (
    <Quill
      onChange={props.onChange}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
    />
  );
}
