const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("./server");

const gizmo = { name: "Gizmo" };
const sam = { name: "Lucy" };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db("cats").truncate();
});
afterAll(async () => {
  await db.destroy();
});

describe("server",()=>{
  describe("[GET] /cats", ()=>{
    it("responds with 200 status",async ()=>{
      const res = await request(server).get("cats")
      expect(res.status).toBe(200)
    })
  })
})
