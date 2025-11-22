const express = require("express");
const app = express();

app.use(express.json());

const items = []
app.get("/",(request,response)=>{
    response.send("Hello from my server");
});



 app.post("/data",(request,response)=>{
    console.log(request.body);
    response.end();
});

app.listen(3000)



