const express = require('express')
const app = express()
const axios = require('axios').default
const Firefly = require('./firefly-api-driver.js')

app.use(express.json())

let url;
let secret;
const instance = new Firefly("https://nlcssingapore.fireflycloud.asia");

async function getURL(){
    // Fetch school from code
    await Firefly.getHost("nlcssingapore")

    // Create instance
    url = instance.getAuthUrl
}
getURL();

app.get("/api", (req, res) => {
    res.send("You have connected to the backend")
})

app.get("/api/firefly/auth_url", (req, res) => {
    res.send(url);
})

app.post("/api/firefly/auth_secret", (req, res) => {
    const response = req.body // object that contains a .secret property with the secret
    secret = response.secret
    instance.getTasks(secret)
    console.log(secret)
    if (!response) {
        return res.status(400).send({ status: "failed" })
    }
    res.status(200).send({ status: "received" })
})

app.get("/api/firefly/auth_secret", (req, res) => {
    res.send(`${secret}`);
})

app.listen(8000, () => {
    console.log("Server started listening at http://localhost:8000")
})
