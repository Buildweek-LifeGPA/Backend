const request = require("supertest");
const User = require("../models/user-model");
const server = require("../../config/server"); 

describe("/register", () => {
    it("should return a 201  request status", async () => {
      const response = await request(server)
        .post("/api/users/register")
        .send({ username: "jjj", password: "ooo" });
        expect(response.status).toBe(201);
    })   
})  

describe("/register" , () => {
    it("returns status 500" , async () => {
        const response = await request(server) 
        .post("api/users/register")
        .send({username: "testing" , password: "ispain"})
        expect(response.status).toBe(500);
    })
}) 
describe("/Login" , () => {
    it("should return request status 200" , async () => {
        const tstResult = await request(server)
        .post("/api/users/login")
        .send({ username: "jjj", password: "ooo" })
       expect(tstResult.status).toBe(200);
    })
})  
describe("/Login" , () => { 
    it("returns status 500" , async() => {
        const response = await request(server) 
        .post("api/users/login")
        .send({username: "testing" , password: "ispain"})
        expect(response.status).toBe(500);
    })

})  
