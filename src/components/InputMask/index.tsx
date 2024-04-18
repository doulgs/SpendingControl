import { TextInputProps } from "react-native";
import { Mask } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {};

const InputMask: React.FC<Props> = ({ ...rest }) => {
  const { Colors } = useTheme();
  return (
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
  );
};

export { InputMask };
