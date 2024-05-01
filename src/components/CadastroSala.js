
import React, { useState } from 'react';
import axios from 'axios';

const CadSala = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/salas', { nome });
      console.log('Sala cadastrada:', response.data);
     
    } catch (error) {
      console.error('Erro ao cadastrar sala:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Sala</h2>
      <form onSubmit={handleSubmit}>
        <label>Numero da Sala:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <br />
        <button type="submit">Cadastrar Sala</button>
      </form>
    </div>
  );
};

export default CadSala;
