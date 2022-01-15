import { AuthForm } from "../context/auth";

class API {
  login(form: AuthForm) {
    return fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify(form),
    }).then((res) => {
      return form;
    });
  }

  register() {
    fetch("http://localhost:3333/get?a=1&b=2", {
      method: "GET",
    });
  }
}
export default new API();
