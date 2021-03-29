import express from "express";

import { usersRoutes } from "./routes/users.routes";

import ui from 'swagger-ui-express'
import uiFile from './swagger.json'

const app = express();

app.use(express.json());

app.use("/api-docs", ui.serve, ui.setup(uiFile))
app.use("/users", usersRoutes);

export { app };
