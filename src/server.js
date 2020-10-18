//importar dependencia/lib
const express = require('express'); // variavel que recebe uma funcao

//iniciando o express
const server = express(); // retorno da funcao é um objecto


//criar uma rota (caminho)
server.get('/', ()=>{
    
})

//ligando o servidor
server.listen(5500)