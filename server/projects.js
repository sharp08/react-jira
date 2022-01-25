const list = [
  {
    id: 1,
    name: "骑手管理",
    personId: 1,
    organization: "外卖组",
    created: new Date(),
  },
  {
    id: 2,
    name: "团购 APP",
    personId: 2,
    organization: "团购组",
    created: new Date(),
  },
  {
    id: 3,
    name: "物料管理系统",
    personId: 3,
    organization: "物料组",
    created: new Date(),
  },
];

module.exports = function (app) {
  app.get("/projects", (req, res) => {
    const { name, personId } = req.query;

    let r = [...list];
    if (name) {
      r = r.filter((item) =>
        item.name.includes(decodeURIComponent(req.query.name))
      );
    }
    if (personId) {
      r = r.filter((item) => item.personId === Number(personId));
    }

    res.json({
      code: 200,
      data: r,
    });
  });
};
