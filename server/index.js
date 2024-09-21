const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('./controller/path/customerPath');

main().catch(error => console.log(error));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/customer-data').then(()=> console.log("DB connected"))
}

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", path);

// 


app.listen(8000, ()=> {
    console.log("Server Started");
});

