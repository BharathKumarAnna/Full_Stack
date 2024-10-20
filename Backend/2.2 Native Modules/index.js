const fs = require("fs");

// fs.writeFile("newmessage.txt","hey!!! node", (err)=> {
//     if (err) throw err;
//     console.log("saved!!!");
// });

fs.readFile('newmessage.txt',"utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 