const fs = require('fs');

fs.readFile("./data.txt","Utf8",(err,data)=>{
    if(err)
        console.log(err)
    else
    console.log(data)
})