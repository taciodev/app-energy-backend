import { FastifyInstance } from "fastify";
import { create } from "./create.controller";

export async function usersRoutes(app: FastifyInstance) {
    app.post("/", create)
}