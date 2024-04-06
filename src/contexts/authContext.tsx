import { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { dbo_Usuario, UsuarioProps } from "../database/dbo_Usuario";

interface AuthContextProps {
  user: UsuarioProps | null;
  isAuthenticated: boolean;
  loadingAuth: boolean;

  cadastarUsuario: (dadosUsuario: UsuarioProps) => void;
  acessarApp: (email: string, senha: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: any) => {
  const { navigate } = useNavigation();

  const tabelaUsuarios = dbo_Usuario();

  const [user, setUser] = useState<UsuarioProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false);

  async function cadastarUsuario(dadosUsuario: UsuarioProps) {
    setLoadingAuth(true);
    await tabelaUsuarios.create(dadosUsuario).then(() => {
      navigate("Greeting");
    });
    setLoadingAuth(false);
  }

  function acessarApp(email: string, senha: string) {
    const retorno = tabelaUsuarios.searchByEmail(email);

    if (retorno?.Email === email && retorno?.Senha === senha) {
      setUser(retorno);
    } else {
      Alert.alert("Login", "Usuário ou senha inválidos!");
    }
  }

  function signOut() {
    Alert.alert("Sair", `Deseja realmente finalizar a aplicação?`, [
      {
        text: "Não",
        style: "cancel",
      },
      { text: "SIM", onPress: () => setUser(null) },
    ]);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loadingAuth,
        cadastarUsuario,
        acessarApp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
