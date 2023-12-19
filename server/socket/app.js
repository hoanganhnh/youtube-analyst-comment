const express = require("express");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.of("/api/socket").on("connection", (socket) => {
  console.log("socket.io: User connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("socket.io: User disconnected: ", socket.id);
  });
});

const client = new MongoClient(process.env.MONGO_URL);
const pipeline = [{ $project: { documentKey: false } }];
async function run() {
  try {
    console.log("connect db !");
    await client.connect();
  } catch {
    // Ensures that the client will close when you error
    await client.close();
  }
}

run().catch(console.dir);

const db = client.db("ptit");

const liveCollection = db.collection("comments");
const liveCollectionChangeStream = liveCollection.watch(pipeline);

liveCollectionChangeStream.on("change", (change) => {
  switch (change.operationType) {
    case "insert":
      const data = change["fullDocument"];
      console.log(data);

      io.of("/api/socket").emit("liveComment", data);
      break;

    case "delete":
      console.log("delete");
      break;
  }
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`server listening on *:${PORT}`);
});
