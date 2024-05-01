import './home.css';


function Home() {

    return (
        <div>
            <div className="Container">
                <div className="Titulo">
                    <h1> Bem-Vindo </h1>
                    <h3> Selecione uma opção: </h3>

                    <div className="opcoes">
                        <div>
                            <button>  Sou cliente </button>
                        </div>
                        <div>
                            <button> Sou funcionário </button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}
export default Home;