/*
*Exemplo de uso de um módulo nativo 
* @author Professor Jose de Assis
*/ 

const http = require('http')
http.createServer((req,res)=>{
    res.write("Bem vindo ao Node")
    res.end()
}).listen(666)