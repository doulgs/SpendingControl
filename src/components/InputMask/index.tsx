import { TextInputProps } from "react-native";
import { Mask, MessageError } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  errorMessage?: string;
};

const InputMask: React.FC<Props> = ({ errorMessage, ...rest }) => {
  const { Colors } = useTheme();
  const colorText = errorMessage ? Colors.Error : Colors.Textcolor[300];
  return (
    <>
      {errorMessage && <MessageError>{errorMessage}</MessageError>}
      <Mask
        type={"money"}
        options={{
          precision: 2,
          separator: ",",
          delimiter: ".",
          unit: "R$",
          suffixUnit: "",
        }}
        placeholderTextColor={Colors.Gray[500]}
        {...rest}
      />
    </>
  );
};

export { InputMask };
