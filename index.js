import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import RequestModel from "./request-model.js";

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:392311@alexander-service.ij3kre5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database Error", err);
  });

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const doc = new RequestModel({
      name: req.body.name,
      phone: req.body.phone,
      haveWhatsApp: req.body.haveWhatsApp,
    });

    await doc.save();
    return res.json({
      message: "ok",
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
});
app.get("/", async (req, res) => {
  return res.json({
    message: "ok",
  });
});

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server started");
});
