import express from "express";
const app = express();
import cors from "cors";
import CadastroPessoa from '../routes/CadastroPessoa.js';


app.use(express.json());
app.use(cors());

app.post('/cadastrarPessoa', (req, res) => {
    const {nome, idade, cpf } = req.body;

    const novaPessoa = new CadastroPessoa(nome, idade, cpf);

    res.status(201).json({ mensagem: 'Pessoa cadastrada com sucesso', pessoa: novaPessoa });
});

app.listen(3000, () => {
    console.log(`Servidor Express rodando como sucesso porta 3000`);
});
