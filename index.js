
// (cd desktop) ( cd ..)

//  EXPRESS

// 1- npm init 
// 2- npm install express
// 3- touch index.js
// 4- npmjs/package/express , documentation,getting started,installing,hello world


const express=require("express");
const app=express();
// console.dir(app);



let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);

})  //server starts listening------to stop (ctrl+c)
// localhost:3000  ------on browser(make sure server start krky )===node index.js