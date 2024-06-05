import { FlashList } from "@shopify/flash-list";
import { dbo_Categoria } from "../../../database/dbo_Categoria";
import { MovimentacaoProps } from "../../../database/dbo_Movimentacao";
import { formatarParaMoeda } from "../../../utils/formatarParaMoeda";
import { Text } from "../../Text";
import {
  BoxTop,
  Container,
  ContentInfo,
  ContentValue,
  HeaderContainer,
  LayoutContainer,
} from "./styles";

type MovimentsDataProps = {
  data: MovimentacaoProps[];
};

const MovimentsList: React.FC<MovimentsDataProps> = ({ data }) => {
  const categoria = dbo_Categoria();

  function renderizar_layout({ item }: { item: MovimentacaoProps }) {
    const categoria_nome = categoria.buscar_pelo_handle(
      String(item.CategoriaHandle)
    );
    return (
      <>
        <LayoutContainer>
          <BoxTop>
            <Text size={14}>{categoria_nome.Nome}</Text>
          </BoxTop>
          <ContentInfo>
            <Text size={22}>{item.Descricao}</Text>
            <Text size={14}>
              {item.Tipo.toLowerCase()} lancada em: {item.Data}
            </Text>
          </ContentInfo>
          <ContentValue>
            <Text size={18}>{formatarParaMoeda(item.Valor)}</Text>
          </ContentValue>
        </LayoutContainer>
      </>
    );
  }

  return (
    <Container>
      <HeaderContainer>
        <Text size={22} style={{ fontWeight: "bold" }}>
          Últimos lançamentos
        </Text>
      </HeaderContainer>
      <FlashList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderizar_layout}
        estimatedItemSize={106}
      />
    </Container>
  );
};

export { MovimentsList };
