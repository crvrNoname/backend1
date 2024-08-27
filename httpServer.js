import http from 'http';

const server = http.createServer((request,response)=>{
    response.end("Mi primer Hola mundo desde backend!")
});

server.listen(8080,()=>{
    console.log("Listening on port 8080")
})