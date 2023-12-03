import request from "supertest";
import { app } from "../app";

it("responds with 200", async () => {
  await request(app)
    .get("/")
    .expect(200);
});