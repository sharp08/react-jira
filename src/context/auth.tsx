import { useState, useContext, ReactNode, createContext } from "react";

import apis from "../apis";

export interface AuthForm {
  username: string;
  password: string;
}

// 这里的泛型决定 AuthContext.Provider 中的 value 属性，Promise<T> 表示返回一个 Promise，其值为 T
const AuthContext = createContext<
  { login: (form: AuthForm) => Promise<void> } | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

// provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  const login = (form: AuthForm) =>
    apis.login(form).then((user) => {
      console.log(user);
    });

  return <AuthContext.Provider children={children} value={{ login }} />;
};

// hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在 AuthProvider 中使用");
  }
  return context;
};
