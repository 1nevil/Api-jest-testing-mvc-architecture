const request = require("supertest");
const app = require("../index");

describe("GET /users", () => {
  test("It responds with an array of users", async () => {
    const response = await request(app).get("/users");
    // expect(response.body.length).toBe(7);
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /users", () => {
  test("It responds with an array of users", async () => {
    const newStudent = await request(app).post("/users").send({
      name: "nevil",
      email: "nevil@gmail.com",
    });
    expect(newStudent.statusCode).toBe(201);
  });
});

describe("Delete /users", () => {
  test("It responds with an array of users", async () => {
    const newStudent = await request(app).delete(
      "/users/" + "636b8802ebff744ac36505d8"
    );
    expect(newStudent.statusCode).toBe(200);
  });
});

test("/patch update user", async () => {
  const newStudent = await request(app)
    .patch("/users/" + "636b89442f1d279b57415bfd")
    .send({
      name: "raj",
      email: "raj@gmail.com",
    });
  expect(newStudent.statusCode).toBe(200);
});
