import "dotenv/config";
import app from "./src/app.js";
import ConnectDb from "./src/Db/db.js";

const startServer = async () => {
  try {
    await ConnectDb();

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
};

startServer();
