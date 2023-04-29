const http = require("http");

const server = http.createServer((req,res)=>{
console.log(req.method)
console.log(req.url)
if(req.url === "/"){
    res.write("<html><head><body><form action='/createUser' method='POST'><input type='text' name='createUser'><button type='submit'>Send</button></form></body></head></html>");
}
if(req.url==='/createUser'){
 const body=[]
 req.on("data",(chunk)=>{
     console.log(chunk)
     body.push(chunk); 
    })
    req.on("end",()=>{
        const parseObject=Buffer.concat(body).toString();
        console.log(parseObject);
        res.write("<html><head><body><ul><li>parseObject</li></ul></body></head></html>");
        return res.end();
 })
}
})

server.listen(4000);