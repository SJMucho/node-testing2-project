const Cats = require("./cats-model");
const db = require("../../data/dbConfig");

// const gizmo = {name:"Gizmo"}
// const lucy = {name:"Lucy"}

beforeAll(async ()=>{
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async ()=>{
  await db("cats").truncate()
})

afterAll(async ()=>{
  await db.destroy()
})

it("correct env", ()=>{
  expect(process.env.DB_ENV).toBe("testing")
})
