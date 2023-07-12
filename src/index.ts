import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

const port = process.env.PORT || 3333;

app.get('/teste', (request, response) => {
    response.send(`Atenção terráqueos, o Grêmio vai sair campeão! E quem é de é, é! Quem não é de é deixou de é!`)
});

app.listen(port, () => console.log(`Listening on port ${port}`));