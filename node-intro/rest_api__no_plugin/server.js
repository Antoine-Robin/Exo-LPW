const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method == "GET") {
    const tasks = ["Task1", "Task2", "Task3", "Task4"];
    res.setHeader("Content-Type", "application.json");
    res.end(JSON.stringify({ tasks }));
  }

  if (req.method === "POST") {
    console.log("POST");
  }
});

server.listen(9999, () => {
  console.log("ça tourne");
});
