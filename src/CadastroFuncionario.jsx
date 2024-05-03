import { useState } from 'react'
import './index.css'

function FormCadastroF() {

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
    console.log("Dados a serem enviados:", formValores);
    const response = await fetch('https://localhost:3000/cadastrarFuncionario', {
      method:'POST',
      headers: {
        'Content-Type': 'application/.json'
      },

      body: JSON.stringify(formValores)
    });

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
      <div className="Container">
       <div className="imagem">
        .
        </div>
      
    <div className="form">
    <h1> Cadastro Funcionário </h1>
<form onSubmit={handleSubmit}>
  Cargo: 
  <input type="text" name="cargo" value={formValores.cargo} onChange={handleChange}/>
  <br />

  Departamento:
  <input type="text" name="departamento" value={formValores.departamento} onChange={handleChange} />
  <br />

  Data admissão: 
  <input type="date" name="dataAdmissao" value={formValores.dataAdmissao} onChange={handleChange} />
  <br />

  <button type="submit"> CADASTRAR </button>
  
</form>
</div>
      </div>

      </div>
    </>
  );
}

export default FormCadastroF;
