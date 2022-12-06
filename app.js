const express = require('express');

const at = express();

at.get('/', (req, res) => {
    res.send('Olá, o Node está ' + 'sendo executado neste servidor!');
    res.end();
})

const PORT = process.env.PORT || 5000;

at.listen(PORT, console.log(`Servidor iniciado na porta ${PORT}`));