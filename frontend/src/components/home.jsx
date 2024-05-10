import FormCadastro from './Cadastro';
import FormCadastroFuncionario from './CadastroFuncionario';
import '../../../public/css/home.css';
import React, { useState } from 'react';

function Home1() {
    const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <div>
             {secaoAtual === 'home' && (
            <div className="Container">
                <div className="Titulo">
                    <h1> Bem-Vindo </h1>
                    <h3> Selecione uma opção: </h3>

                    <div className="opcoes">
                        <div>
                            <button className="buttonMenu" onClick={() => cliqueSecao('Cadastro')}>  Sou cliente </button>
                        </div>
                        <div>
                            <button className="buttonMenu" onClick={() => cliqueSecao('CadastroFuncionario')}> Sou funcionário </button>
                        </div>
                    </div>
                </div>
            </div>
            )}

           <div className='secao'>
                {secaoAtual === 'Cadastro' && <FormCadastro />}
            </div>

            <div className='secao'>
                {secaoAtual === 'CadastroFuncionario' && <FormCadastroFuncionario/>}
            </div> 
        </div>
    );
}
export default Home1;