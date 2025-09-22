
// (cd desktop) ( cd ..)

//  EXPRESS

// 1- npm init 
// 2- npm install express
// 3- touch index.js
// 4- npmjs/package/express , documentation,getting started,installing,hello world


const express=require("express");
const app=express();
// console.dir(app);






// req send !!!!!!!!!!!!!
let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);

})  //server starts listening------to stop (ctrl+c)
// localhost:3000  ------on browser(make sure server start krky )===node index.js





// req recieve  !!!!!!!!!!!  at a time 1 path pr 1 he response
app.get("/",(req,res)=>{     //app.use just show localhost:3000
    console.log("req recieved");

//  on localhost:3000 
    res.send("This is a basic response");  
    // res.send({name:"apple",fruit:"yes"});
    // let code="<h1>Animals<h1>";
    // res.send(code); 

})

app.get("/apple",(req,res)=>{
    res.send("This is apple page");
})

app.get("/orange",(req,res)=>{
    res.send("This is orange page");
})
// Put this at the very bottom of your routes
app.use((req, res) => {
  res.status(404).send("This page does not exist");
});



