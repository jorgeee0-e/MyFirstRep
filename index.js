const express = require('express');
const app=express();
const port=3000;
const apiRouter = require('./server/index');

//req es la petición de parte del cliente.
// res es la respuesta de parte del servidor
app.listen(port,(req,res)=>{
    console.log(`El Puerto del Server esta  escuchando en el ${port}`);
})
apiRouter(app);
