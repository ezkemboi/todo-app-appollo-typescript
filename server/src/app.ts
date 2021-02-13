import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome To TODO App"
  })
})

app.listen(5000, () => {
  console.log("Server running on PORT: 5000")
})

export default app;