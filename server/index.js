const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller.js')

app.get("/api/compliment", getCompliment)


const { getFortune, deleteFortune, createFortune, updateFortune } = require('./controller.js')

app.get("/api/fortunes", getFortune)
app.delete('/api/fortunes/', deleteFortune)
app.post('/api/fortunes', createFortune)
app.put('/api/fortunes/:index', updateFortune)


app.listen(4000, () => console.log("Server running on 4000"));
