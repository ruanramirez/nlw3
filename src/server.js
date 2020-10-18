//importar dependencia/lib
const express = require('express'); // variavel que recebe uma funcao
const path = require('path');
const pages = require('./pages.js');
//iniciando o express
const server = express(); // retorno da funcao é um objecto
server
    //utilizando os arquivos estáticos
    .use(express.static('public'))

    //configurar template engines
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //criar uma rota (caminho)
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

//ligando o servidor
server.listen(5500)