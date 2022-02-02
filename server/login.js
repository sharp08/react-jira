module.exports = function (app) {
  app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "abc" && password === "123") {
      res.json({
        code: 200,
        data: [
          {
            id: 1,
            name: "刘英",
          },
          {
            id: 2,
            name: "大脚",
          },
          {
            id: 3,
            name: "奥尔森",
          },
        ],
      });
    } else {
      return res.status(400).json({ message: "账号或密码错误" });
    }
  });
};
