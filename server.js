// const http = require("http");
// const calculate = require("./calculator");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-type": "text/plain"});
//     res.end("Hello World\n" + calculate.add(20, 10) +"\n"+ calculate.sub(120, 100));
// });

// server.listen(3000, () => {
//     console.log("Server running at http://127.0.0.1:3000/");``
// });


// // const calculate = require("./calculator")
// // console.log(calculate.add(20,10))
const fs = require("fs");

// fs.readFile('sample.txt',"utf8",(err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }

//     console.log(data)
// })
const newPerson={ 
    name:"Aswin",
    age: 21,
    city: "Therivillai"
}
fs.readFile('sample.json','utf8',(err,data)=>{

    if(err){
        console.error(err)
        return
    }
    const json= JSON.parse(data)
    // const newList = [...json, newPerson]
    // fs.writeFile('sample.json',JSON.stringify(newList),(err)=>{
    //     if(err){
    //         console.error(err)
    //         return
    //     }
    // })
    const newList1 = json.filter((data) => data.id !== 3);
    fs.writeFile('sample.json',JSON.stringify(newList1),(err)=>{
        if(err){
            console.error(err)
            return
        }
    })
    
    // json.push(newPerson)
    // console.log(json);
});