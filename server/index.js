const express = require("express");
const morgan = require("morgan"); //  日志输出
const cors = require("cors"); // 处理跨域

const apiProjects = require("./projects");
const apiUsers = require("./users");

const app = express();
const PORT = 3333;

// 日志
app.use(morgan("dev"));

// 处理前端请求体
app.use(express.json()); //  json 方式
app.use(express.urlencoded()); //  表单方式
app.use(express.raw()); //  content-type: application/octet-stream
app.use(express.text()); //  content-type: text/plain

// 跨域白名单
const whitelist = ["*"];

// 跨域配置项
const corsConfig = {
  origin: function (origin, callback) {
    if (whitelist.includes("*")) {
      callback(null, true);
    } else if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsConfig));

apiProjects(app);
apiUsers(app);

app.listen(PORT, () => {
  console.log(`api 服务已启动 http://localhost:${PORT}`);
});

module.exports = app;
