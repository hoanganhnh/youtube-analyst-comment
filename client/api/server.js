const express = require("express");
const http = require("http");
const cors = require("cors");
const compression = require("compression");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
const server = http.createServer(app);
app.use(
  cors({
    origin: "*",
  })
);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const shouldCompress = (req, res) => {
//   // don't compress responses explicitly asking not
//   if (
//     req.headers["x-no-compression"] ||
//     res.getHeader("Content-Type") === "text/event-stream"
//   ) {
//     return false;
//   }

//   return compression.filter(req, res);
// };

// app.use(compression({ filter: shouldCompress }));

const client = new MongoClient(process.env.MONGO_URL);

const pipeline = [{ $project: { documentKey: false } }];

async function run() {
  try {
    await client.connect();
  } catch {
    // Ensures that the client will close when you error
    await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

const simulateAsyncPause = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

app.get("/stream", async (req, res) => {
  const collection = client.db("main").collection("live");
  const changeStream = collection.watch(pipeline);

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  changeStream.on("change", function (change) {
    const data = change["fullDocument"];

    res.write(JSON.stringify(data));
  });

  changeStream.on("close", () => {
    res.end();
  });
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`server listening on *:${PORT}`);
});
