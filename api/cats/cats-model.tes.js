const Cats = require("./cats-model.js");
const db = require("../../data/dbConfig");

const gizmo = { name: "Gizmo" };
const lucy = { name: "Lucy" };

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

it("correct env", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("Cats model", () => {
  describe("insert function", () => {
    it("adds new cat to db", async () => {
      let all;
      await Cats.insert(gizmo);
      all = await db("cats");
      expect(all).toHaveLength(1);

      await Cats.insert(lucy);
      all = await db("cats");
      expect(all).toHaveLength(2);
    });
  });
});
