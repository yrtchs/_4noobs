const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const messageRoute = require("./routes/messages");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Sever is running.");
  });
});

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Sever is working...");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/messages", messageRoute);
