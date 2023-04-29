const { writeFileSync } = require("fs");
const http = require("http");

const server=http.createServer((req, res)=>{
const url = req.url;
const method = req.method;
if(url === "/"){
res.write("<html>");
res.write("<head>");
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
res.write("</head>");
res.write("</html>");
return res.end();
}
if(method==="POST" && url==="/message"){
    const body=[]
req.on("data",(chunk)=>{
    console.log(chunk)
body.push(chunk);
})
req.on("end",()=>{
    const parsedBody=Buffer.concat(body).toString();
    const msg=parsedBody.split("=")[1]
    console.log(parsedBody)
    console.log(msg)
    writeFileSync("msg.txt",msg)
})
}
});

server.listen(3001)    