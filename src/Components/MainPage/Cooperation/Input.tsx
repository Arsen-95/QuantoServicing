import { Input as ChakraInput } from "@chakra-ui/react";
import ReactInputMask from "react-input-mask";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  name: string;
  formState: any;
};

export const Input: React.FC<Props> = ({
  value,
  onChange,
  type,
  placeholder,
  name,
  formState,
}) => {
  return (
    <ChakraInput
      fontSize={["14px", "14px", "16px"]}
      value={value}
      type={type}
      borderRadius="0"
      width={["70%", "70%", "300px", "400px"]}
      border={
        formState?.errors?.[name]?.message
          ? "1.45682px solid red"
          : "1.45682px solid #494949"
      }
      borderColor={formState?.errors?.[name]?.message ? "red" : "#494949"}
      background="#FAFAFA"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export const InputMask: React.FC<Omit<Props, "placeholder" | "type">> = ({
  onChange,
  value,
  formState,
  name,
}) => {
  return (
    <ChakraInput
      as={ReactInputMask}
      mask="+\9\9\8\ (99) 999-99-99"
      placeholder="+998 (__) ___-__-__"
      value={value}
      onChange={onChange}
      borderRadius="0"
      width={["70%", "70%", "300px", "400px"]}
      border={
        formState?.errors?.[name]?.message
          ? "1.45682px solid red"
          : "1.45682px solid #494949"
      }
      borderColor={formState?.errors?.[name]?.message ? "red" : "#494949"}
      background="#FAFAFA"
    />
  );
};
