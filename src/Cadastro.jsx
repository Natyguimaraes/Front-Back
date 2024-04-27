import { useState } from 'react'
import './index.css'

function FormCadastro() {

  const [formValores, setFormValores] = useState ({
    nome: '',
    idade: '', 
    cpf:''
  });
  
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValores(prevState => ({
    ...prevState,
  [name]: value
  }));
};

const handleSubmit = async (e) => {

  try {
    e.preventDefault();

    const response = await fetch('./cadastrarPessoa', {
      method:'POST',
      body: JSON.stringify(formValores)
    })
    const json = await response.json();
    console.log(response)
    console.log(json)
  } catch (err) {
    console.log("Erro ao enviar", err)
  }
};

  return (
    <>
      <div>
       
    <div className="form">
    <h1> Cadastre-se </h1>
<form onSubmit={handleSubmit}>
  Nome: 
  <input type="text" name="nome" value={formValores.nome} onChange={handleChange}/>
  <br />

  Idade:
  <input type="number" name="idade" value={formValores.idade} onChange={handleChange} />
  <br />

  CPF: 
  <input type="text" name="cpf" value={formValores.cpf} onChange={handleChange} />
  <br />

  <button type="submit"> CADASTRAR </button>
</form>
</div>
      </div>
    </>
  );
}

export default FormCadastro;
