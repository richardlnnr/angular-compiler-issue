const proxy = [
  {
    context: "/static",
    target: "http://localhost:3000",
    pathRewrite: {
      "^/static": ""
    }
  }
];
module.exports = proxy;