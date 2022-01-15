import { MouseEvent } from "react";
import apis from "../../apis";
import { useAuth } from "../../context/auth";

export const PageLogin = () => {
  const { login } = useAuth();
  const aaa = (e: MouseEvent<HTMLElement>) => {
    // apis.register();
    login({ username: "aaa", password: "bbb" });
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
        <button onClick={aaa}>登录</button>
        <button onClick={aaa}>注册</button>
      </div>
    </div>
  );
};
