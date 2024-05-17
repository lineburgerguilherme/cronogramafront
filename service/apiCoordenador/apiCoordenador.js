import axios from "axios";

const apiUrl = 'http://localhost:8000'

const getCoordenadores = async () => {
    try {
      const response = await axios.get(`${apiUrl}/coordenadores`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter coordenadores:', error);
    }
  };
  
const getCoordenador = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/coordenadores/${id}`);
      return response.data;
    } catch (error) {
      console.log('Erro ao obter o registro de coordenador:', error)
    }
  };
  

  const addCoordenador = async (nome, email, departamento) => {
    try {
      const response = await axios.post(`${apiUrl}/coordenadores`, { nome, email, departamento });
      console.log('Coordenador adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar coordenador:', error);
    }
  };

  const excluirCoordenador = async(id) => { 
    try{
        const response = await axios.delete(`${apiUrl}/coordenadores/${id}`);
        console.log('Coordenador excluído com sucesso:', response.data);
    }catch(erro){
        console.error('Erro ao excluir coordenador:', erro)
    }
  }

  const atualizarCoordenador = async(id, dadosAtualizados) => {
    try{
        const response = await axios.put(`${apiUrl}/coordenadores/${id}`, dadosAtualizados);
    }catch(error){
        console.error('Erro ao atualizar coordenador:', error);
    }
  }

  const apiCoordenadores = {
    getCoordenadores,
    getCoordenador,
    addCoordenador,
    atualizarCoordenador,
    excluirCoordenador
  }
  export default apiCoordenadores; 
