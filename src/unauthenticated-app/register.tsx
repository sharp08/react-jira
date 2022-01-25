import { MouseEvent } from "react";
import { useAuth } from "../context/auth";

export const RegisterScreen = () => {
  const { login, register, user } = useAuth();
  const aaa = (e: MouseEvent<HTMLElement>) => {
    // login({ username: "aaa", password: "bbb" });
    register({ username: "aaa", password: "bbb" });
  };

  return (
    <div style={{ margin: "0 auto", width: "500px" }}>
      <div>
        <span>用户名：</span>
        <input type="text" />
      </div>
      <div>
        <span>密码：</span>
        <input type="password" />
      </div>
      <div>
        <button onClick={aaa}>注册</button>
      </div>
    </div>
  );
};
