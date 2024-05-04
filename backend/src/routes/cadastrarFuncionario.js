import express from "express";
const app = express();
import cors from "cors";
import CadastroFuncionario from '../routes/CadastroFuncionario.js';


app.use(express.json());
app.use(cors());

app.post('/cadastrarFuncionario', (req, res) => {
    const {cargo, departamento, dataAdmissao } = req.body;

    const novoFuncionario = new CadastroFuncionario(cargo, departamento, dataAdmissao);

    res.status(201).json({ mensagem: 'Funcionário cadastrado com sucesso', funcionario: novoFuncionario });
});

app.listen(3000, () => {
    console.log(`Servidor Express rodando como sucesso porta 3000`);
});
