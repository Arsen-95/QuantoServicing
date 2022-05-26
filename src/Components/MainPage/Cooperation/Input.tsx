import { Input as ChakraInput } from "@chakra-ui/react";

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
      height="46px"
      width={["90%", "80%", "300px", "400px"]}
      border={
        formState?.errors?.[name]?.message
          ? "1.45682px solid red"
          : "1.45682px solid #494949"
      }
      borderColor={formState?.errors?.[name]?.message ? "red" : "#494949"}
      background="#23242B"
      placeholder={placeholder}
      onChange={onChange}
      _placeholder={{
        color: "#8C949D",
      }}
    />
  );
};
