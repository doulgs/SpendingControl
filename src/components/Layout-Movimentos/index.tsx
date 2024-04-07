import React from "react";
import { MovimentacaoProps } from "../../database/dbo_Movimentacao";

import { Container, Content, Title, SubTitle, Valor } from "./styles";
import { formatarParaMoeda } from "../../utils/formatarParaMoeda";
import { formatarData } from "../../utils/formatarData";
import { PressableProps } from "react-native";

interface Props extends PressableProps {
  data: MovimentacaoProps;
}

const LayoutMovimentos: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <Content>
        <Title>{data.Descricao}</Title>
        <SubTitle>vence em {formatarData(data.Data)}</SubTitle>
      </Content>
      <Valor>{formatarParaMoeda(data.Valor)}</Valor>
    </Container>
  );
};

export { LayoutMovimentos };
