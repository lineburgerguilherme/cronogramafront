import React, { useState } from 'react';
import axios from 'axios';

const CadFase = () => {
  const [numero, setNumero] = useState('');
  const [curso, setCurso] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/fases', { numero, curso });
      console.log('Fase cadastrada:', response.data);
      // Aqui você pode adicionar lógica para redirecionar ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar fase:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Fase</h2>
      <form onSubmit={handleSubmit}>
        <label>Número da Fase:</label>
        <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
        <br />
        <label>Curso Vinculado:</label>
        <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} />
        <br />
        <button type="submit">Cadastrar Fase</button>
      </form>
    </div>
  );
};

export default CadFase;

