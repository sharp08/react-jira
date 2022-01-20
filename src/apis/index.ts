import { AuthForm } from "../context/auth";
import { http } from "../utils/http";

class API {
  login(form: AuthForm) {
    return fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify(form),
    }).then((res) => {
      return form;
    });
  }

  register(form: AuthForm) {
    return http("http://localhost:3333/get", {
      data: { a: 1, b: 2 },
      token: "awefawefac",
    });
  }
}
export default new API();
