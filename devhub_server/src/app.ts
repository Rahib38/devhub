import cors from "cors";
import express, { Application, Request, Response } from "express";
import blogRouter from "./app/modules/blog/blog.routes";
import globalErrorHandler from "./app/middleware/globalErrorhandleing";
import notFound from "./shared/notFound";
import userRouter from "./app/modules/user/user.routes";
import { authRoutes } from "./app/modules/auth/auth.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",blogRouter);
app.use("/api",userRouter);
app.use("/api/auth",authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "DevHub Server..",
  });
});
app.use(globalErrorHandler);

app.use(notFound);

export default app;
