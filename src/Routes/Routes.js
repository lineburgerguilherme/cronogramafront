import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CadDisciplina from '../components/CadastroDisciplinas';
import CadProfessor from '../components/CadastroProfessores';
import CadastroSala from '../components/CadastroSala';
import CadFase from '../components/CadastroFase';
import Login from '../components/Login';
import CadCurso from '../components/Curso';
import CadExcecao from '../components/CadastroDiaExecao';


const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path='/disciplina' element={<CadDisciplina />} />
        <Route path='/professor' element={<CadProfessor />} />
        <Route path='/sala' element={<CadastroSala />} />
        <Route path='/fase' element={<CadFase />} />
        <Route path='/login' element={<Login />} />
        <Route path='/curso' element={<CadCurso />} />
        <Route path='/curso' element={<CadExcecao />} />
        
      </Routes>
    </Router>
  );
}

export default Rotas;
