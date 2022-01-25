module.exports = function (app) {
  app.get("/users", (req, res) => {
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
  });
};
