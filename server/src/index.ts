import ENV from "./env";
import express from "express";
import { authRouter } from "./routes/AuthRouter";
import { indexRouter } from "./routes/IndexRouter";

const app = express();

// app.get("/", function (req, res) {
//     res.send("Hello World");
// });

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(ENV.PORT);
console.log("Listening on ", ENV.PORT);
