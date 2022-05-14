const express = require("express");
const app = express()
var fs = require('fs')

app.get('/', (req, res) => {
  res.send("Use this link for uptime")

})
app.get('/config', (req, res) => {
  res.json(fs.readFileSync("./config.json"))
})
app.listen(3000, () => {
  console.log("bot started")
})

const {mineboty} = require("mineboty")
mineboty();
