const express = require('express')
const app = express()
require('dotenv').config()

const mongoconnect=require("./db")
mongoconnect();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://64aa5e52bcf4a17ab4b0befb--splendid-entremet-f800a9.netlify.app/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})