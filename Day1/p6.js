const fs = require('fs');
const write=(data)=>{
    fs.writeFile("./data.txt,data",data,(err)=>{
        if(err)
            console.log("Error Writing File",err);
        else
        console.log("File Writen Sucessfully");
    })
}
console.log("before Write")
write("I am new data")
console.log("after writing")