//@ts-nocheck
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  padding: 80px 102px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 40px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const TextInput = styled.input`
  margin-top: 16px;
  padding-left: 16px;
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
`;

export const PriceWrapper = styled.div`
  padding-top: 40px;
`;

export const ProductExplanation = styled.textarea`
  width: 100%;
  height: 320px;
  border: 1px solid #bdbdbd;
  border-top: none;
  padding: 14px 16px;
  font-size: 16px;
  resize: none;
`;

export const PositionWrapper = styled.div`
  display: flex;
  padding-top: 40px;
`;

export const MapWrapper = styled.div``;

export const Map = styled.div`
  width: 384px;
  height: 252px;
  background-color: #bdbdbd;
  margin-top: 16px;
  z-index: 1;
`;

export const GpsAdressWrapper = styled.div`
  padding-left: 24px;
`;

export const GpsWrapper = styled.div``;

export const Lattitude = styled.button`
  margin-top: 16px;
  width: 108px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: white;
`;

export const Longitude = styled.button`
  margin-top: 16px;
  width: 108px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: white;
`;

export const Local = styled.img`
  margin-left: 21px;
  margin-right: 21px;
`;

export const AdressWrapper = styled.div`
  padding-top: 40px;
  width: 558px;
`;

export const ImageWrapper = styled.div`
  padding-top: 40px;
`;

export const RadioWrapper = styled.div`
  padding-top: 40px;
`;

export const Radio = styled.input`
  width: 20px;
  height: 20px;
  margin-top: 18px;
`;

export const Text02 = styled.span`
  padding-left: 10px;
  padding-right: 24px;
  font-size: 16px;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background-color: #bdbdbd;
  margin-top: 80px;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "")};
`;

export const EditButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background-color: #bdbdbd;
  margin-top: 80px;
  background-color: #ffd600;
  cursor: pointer;
`;

export const Error = styled.div`
  font-size: 12px;
  color: red;
  padding-left: 16px;
  padding-top: 5px;
`;

export const ExplanationTextArea = styled.textarea`
  width: 100%;
  height: 320px;
  border: 1px solid #bdbdbd;
  resize: none;
  padding-left: 16px;
  padding-top: 10px;
  font-size: 16px;
`;

export const AddressButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AddressSearchButton = styled.button`
  margin-left: 20px;
  border: 1px solid #bdbdbd;
  height: 30px;
  width: 90px;
  font-size: 14px;
  background-color: #ffd600;
`;
