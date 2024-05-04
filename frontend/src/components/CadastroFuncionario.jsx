import { useState } from 'react'
import '../../../public/css/index.css'

function FormCadastroFuncionario() {

  const [formValores, setFormValores] = useState ({
    cargo: '',
    departamento: '', 
    dataAdmissao:''
  });
  
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValores(prevState => ({
    ...prevState,
  [name]: value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("dados a serem enviados:", formValores);
    const response = await fetch('http://localhost:3000/cadastrarFuncionario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValores)
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar a solicitação: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

  } catch (err) {
    console.log("Erro ao enviar os dados", err);
  }

};

  return (
    <>

    <div>
      <div className="Container">
       <div className="imagem">
        .
        </div>
      
    <div className="form">
    <h1> Cadastre-se </h1>
<form onSubmit={handleSubmit}>
  Nome: 
  <input type="text" name="cargo" value={formValores.cargo} onChange={handleChange}/>
  <br />

  Idade:
  <input type="text" name="departamento" value={formValores.departamento} onChange={handleChange} />
  <br />

  CPF: 
  <input type="date" name="data" value={formValores.dataAdmissao} onChange={handleChange} />
  <br />

  <button type="submit"> CADASTRAR </button>
</form>
</div>
      </div>
      </div>
    </>
  );
}

export default FormCadastroFuncionario;
