import dotenv from "dotenv";
import app from "./src/app";
dotenv.config();

app.listen(3000, () => {
  console.log(`server is Running at 3000`);
});
