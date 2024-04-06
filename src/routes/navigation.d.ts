export declare global {
  namespace ReactNavigation {
    export interface RootParamList {
      Login: undefined;
      Configuracao: undefined;

      Home: undefined;
      Grupos: undefined;
      Item: { handle: number };
      ItemExcecoes: { handleItem: number; indexItem: number };
      ItemRevisao: undefined;
      Pagamento: undefined;
      ProcessoImpressao: { handlePed: number };
    }
  }
}
