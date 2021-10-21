//@ts-nocheck
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const Wrapper = styled.div`
  padding: 60px 102px;
  margin: auto;
  width: 1200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const BoardTitle = styled.div`
  /* padding-top: 60px; */
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const TopWrapper = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
`;

export const WriterWrapper = styled.div``;
export const Text = styled.div`
  font-size: 16px;
`;
export const WriterInput = styled.input`
  margin-top: 16px;
  padding-left: 16px;
  width: 486px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;
export const PasswordWrapper = styled.div``;
export const PasswordInput = styled.input`
  margin-top: 16px;
  padding-left: 16px;
  width: 486px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;
export const TitleWrapper = styled.div`
  padding-top: 40px;
`;
export const Title = styled.input`
  margin-top: 16px;
  padding-left: 16px;
  width: 100%;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;
export const ContentsWrapper = styled.div`
  padding-top: 40px;
`;
export const Contents = styled.textarea`
  margin-top: 16px;
  padding-left: 16px;
  padding-top: 14px;
  width: 100%;
  height: 480px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  resize: none;
`;
export const AddressWrapper = styled.div`
  padding-top: 40px;
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 16px;
`;

export const ZipCode = styled.input`
  margin-right: 16px;
  width: 77px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  text-align: center;
  font-size: 16px;

  color: ${(props) => (props.address ? "" : "#bdbdbd")};
`;
export const SearchAddress = styled.button`
  background-color: black;
  width: 124px;
  height: 52px;
  color: white;
  font-size: 16px;
`;
export const Address = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-top: 16px;
  padding-left: 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.address ? "" : "#bdbdbd")};
`;
export const AddressDetail = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-top: 16px;
  padding-left: 16px;
  font-size: 16px;
`;
export const YoutubeWrapper = styled.div`
  padding-top: 40px;
`;
export const Youtube = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-top: 16px;
  margin-bottom: 40px;
  padding-left: 16px;
  font-size: 16px;
`;
export const UploadWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  padding-bottom: 40px;
`;
export const Upload = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RadioWrapper = styled.div``;

export const Radio = styled.input`
  margin-top: 22px;
`;
export const Text02 = styled.span`
  font-size: 16px;
  padding-right: 22px;
  padding-left: 10px;
`;

export const SubmitButtonWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "")};
`;

export const Error = styled.div`
  font-size: 12px;
  color: red;
  padding-left: 16px;
  padding-top: 10px;
`;
