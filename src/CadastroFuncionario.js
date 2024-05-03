class CadastroFuncionario {
    constructor(cargo, departamento, dataAdmissao) {
        this.cargo = cargo;
        this.departamento = departamento;
        this.dataAdmissao = dataAdmissao;
    }

    getCargo(){
        return this.cargo;
    }

    setCargo(novoCargo) {
        this.cargo = novoCargo;
    }

    getDepartamento() {
        return this.departamento;
    }

    setDepartamento(novoDepartamento){
        this.departamento = novoDepartamento;
    }

    getDataAdmissao(){
      return this.dataAdmissao;
    }

    setDataAdmissao(novaData){
        this.dataAdmissao = novaData;
    }
}
export default CadastroFuncionario;
