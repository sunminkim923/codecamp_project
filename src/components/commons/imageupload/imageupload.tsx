//@ts-nocheck

import styled from "@emotion/styled";
import { useState } from "react";
import { useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Images = styled.img`
  width: 180px;
  height: 180px;

  /* border: 1px solid black; */
`;

const Button = styled.button`
  width: 180px;
  height: 180px;
  border: none;
  background-color: #bdbdbd;
`;

const FileInput = styled.input`
  display: none;
`;

export default function ImageUpload(props) {
  const [imageUrl, setImageUrl] = useState([]);
  const [fileUrls, setFileUrls] = useState([""]);
  // const [images, setImages ] = useState([""])

  const fileRef = useRef();
  // const uploadFile = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = (event) => {
    const file = event.target.files?.[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl((prev) => [...prev, data.target?.result]);
      // const newFileUrls = [...fileUrls];
      // newFileUrls[event.target.id] = file;
      // setFileUrls(newFileUrls);
      props.setImageFile((prev) => [...prev, file]);
    };
  };

  return (
    <Wrapper>
      {imageUrl.map((data) => (
        <Images src={data} key={data} />
      ))}

      <Button type="button" onClick={onClickUpload}>
        <div>upload</div>
        <div>+</div>
      </Button>

      <FileInput type="file" onChange={onChangeFile} ref={fileRef} />
    </Wrapper>
  );
}
