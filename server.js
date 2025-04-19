import app from "./app.js";
import { connectMongoDB } from "./config/mongo.config.js";
const PORT = 8080;
const startServer = async () => {
  // connect to mongoDB
  await connectMongoDB();
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
};

startServer();
