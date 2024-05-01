
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CadDisciplina = () => {
  const [nome, setNome] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [fase, setFase] = useState('');
  const [sala, setSala] = useState('');
  const [professores, setProfessores] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState('');

  useEffect(() => {
    fetchProfessores();
  }, []);

  const fetchProfessores = async () => {
    try {
      const response = await axios.get('http://localhost:3001/professores'); // END POINT dos professores 
      setProfessores(response.data);
    } catch (error) {
      console.error('Erro ao buscar professores:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/disciplinas', {
        nome,
        cargaHoraria,
        sala,
        fase,
        professor: selectedProfessor,
      });
      console.log('Disciplina cadastrada:', response.data);
      //colocar mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar disciplina:', error);
        //colocar mensagem de erro
    }
  };

  return (
    <div>
      <h2>Cadastro de Disciplina</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome da Disciplina:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <br />
        <label>Carga Horária:</label>
        <select value={cargaHoraria} onChange={(e) => setCargaHoraria(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="30">30 horas</option>
          <option value="60">60 horas</option>
          <option value="90">90 horas</option>
        </select>
        <br />
        <label>Sala:</label>
        <select value={sala} onChange={(e) => setSala(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="1">101</option>
          <option value="2">102</option>
          <option value="3">103</option>
          <option value="4">104</option>
          <option value="5">105</option>
        </select>
        <br />
        <label>Fase:</label>
        <select value={fase} onChange={(e) => setFase(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="1">Fase 1</option>
          <option value="2">Fase 2</option>
          <option value="3">Fase 3</option>
          <option value="4">Fase 4</option>
          <option value="5">Fase 5</option>
        </select>
        <br />
        <label>Professor:</label>
        <select value={selectedProfessor} onChange={(e) => setSelectedProfessor(e.target.value)}>
          <option value="">Selecione...</option>
          {professores.map((professor) => (
            <option key={professor.id} value={professor.id}>
              {professor.nome}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Cadastrar Disciplina</button>
      </form>
    </div>
  );
};

export default CadDisciplina;
