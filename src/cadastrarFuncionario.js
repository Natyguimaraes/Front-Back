import express from "express";
const app = express();
import cors from "cors"
import CadastroPessoa from "./CadastroPessoa.js";
import CadastroFuncionario from "./CadastroFuncionario.js"

app.use(express.json());
app.use(cors());

app.post('/cadastrarFuncionario', (req, res) => {
    const {cargo, departamento, dataAdmissao } = req.body;

    const novaPessoa = new CadastroFuncionario(cargo, departamento, dataAdmissao);

    res.status(201).json({ mensagem: 'Pessoa cadastrada com sucesso', pessoa: novaPessoa });
});

app.listen(3000, () => {
    console.log(`Servidor Express rodando como sucesso porta 3000`);
});