const fs = require("fs");

const data = fs.readFileSync("ALICE'S ADVENTURES IN WONDERLAND.txt","utf-8");
console.log(data); 


 console.log("This is the start of the file");
fs.readFile("ALICE'S ADVENTURES IN WONDERLAND.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is the end of the file"); 



 async  function main(){
console.log("This is the start of the file");
const data = await fs.promises.readFile("test.txt","utf-8");
console.log(data);
console.log("This is the end of the file");
}
main(); 


