import { yupResolver } from "@hookform/resolvers/yup";
import {} from "react";
import { useForm } from "react-hook-form";
import MyProfilePageUI from "./myprofile.presenter";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { RESET_USER_PASSWORD } from "./myprofile.queries";
import { useRouter } from "next/router";

export default function MyProfilePage() {
  const router = useRouter();

  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);

  const schema = yup.object().shape({
    password: yup.string().required("현재 비밀번호를 입력하세요."),
    newPassword: yup
      .string()
      .required("변경할 비밀번호를 입력하세요.")
      .min(8, "8자리 이상으로 입력해주세요.")
      .max(15, "15자리 이하로 입력해주세요.")
      .matches(
        /[!, @, #, $, %, ^, &, *, (, )]+/,
        "특수문자가 한개 이상 필요합니다"
      ),
    newPasswordConfirm: yup
      .string()
      .required("변경할 비밀번호를 입력하세요.")
      .min(8, "8자리 이상으로 입력해주세요.")
      .max(15, "15자리 이하로 입력해주세요.")
      .matches(
        /[!, @, #, $, %, ^, &, *, (, )]+/,
        "특수문자가 한개 이상 필요합니다"
      ),
  });

  const { handleSubmit, register, formState, reset } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    if (data.newPassword !== data.newPasswordConfirm) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    try {
      await resetUserPassword({
        variables: {
          password: data.newPasswordConfirm,
        },
      });
      alert("비밀번호가 변경되었습니다.");
      reset();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <MyProfilePageUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onSubmit={onSubmit}
      errors={formState.errors}
      isActive={formState.isValid}
    />
  );
}
