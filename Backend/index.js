import express from "express";
import cors from "cors"
import TorrentRoute from "./Routes/TorrentRoute.js";

const app = express();
const PORT = 8000;

app.use(cors({
  origin: '*', // Allow requests from any origin
  methods: 'GET,HEAD,POST,PUT,DELETE', // Allow specific HTTP methods
}));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", TorrentRoute);

app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
