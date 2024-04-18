import { PressableProps } from "react-native";
import { Button } from "./styles";
import { Text } from "../Text";

export type ButtonFilterProps = PressableProps & {
  title: string;
  isActive?: boolean;
  type: "RECEITA" | "DESPESA";
};

const ButtonFilter: React.FC<ButtonFilterProps> = ({
  title,
  isActive = false,
  type,
  ...rest
}) => {
  return (
    <Button isActive={isActive} type={type} {...rest}>
      <Text>{title}</Text>
    </Button>
  );
};

export { ButtonFilter };
