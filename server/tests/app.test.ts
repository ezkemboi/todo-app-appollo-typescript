import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";

chai.use(chaiHttp);

describe("App Test", () => {
  it("Run Home", async () => {
    const result = await chai.request(app).get("/");
    const { status, body } = result;
    expect(status).to.be.equal(200);
    expect(body.message).to.be.equal("Welcome To TODO App");
  })
})
