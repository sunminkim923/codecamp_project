import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import router from "next/router";
import SignUpUI from "./signUp.presenter";
import { CREATE_USER } from "./signUp.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

const schema = yup.object().shape({
  name: yup.string().required("이름을 입력해주세요"),
  email: yup
    .string()
    .email("이메일 형식에 맞게 입력해주세요")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .min(8, "8자리 이상으로 입력해주세요")
    .max(15, "15자리 이하로 입력해주세요")
    .matches(
      /[!, @, #, $, %, ^, &, *, (, )]+/,
      "특수문자가 한개 이상 필요합니다"
    ),
  confirmPassword: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .oneOf([yup.ref("password"), null], "비밀번호를 확인해주세요"),
});

export default function SignUp() {
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // @ts-ignore
  async function onSubmit(data) {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });
      Modal.info({ content: "회원가입을 축하합니다." });
      router.push("/login");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  }
  return (
    <SignUpUI
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
}
