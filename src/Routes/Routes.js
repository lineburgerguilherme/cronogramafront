import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CadDisciplina from '../components/CadastroDisciplinas';
import CadProfessor from '../components/CadastroProfessores';
import CadastroSala from '../components/CadastroSala';
import CadFase from '../components/CadastroFase';
import Login from '../components/Login';
import CadCurso from '../components/Curso';
import CadastroDiaExcecao from '../components/CadastroDiaExcecao'; 

const Routes = () => {
  return (
    <Router>
      <Route path='/disciplina' component={CadDisciplina} />
      <Route path='/professor' component={CadProfessor} />
      <Route path='/sala' component={CadastroSala} />
      <Route path='/fase' component={CadFase} />
      <Route path='/login' component={Login} />
      <Route path='/curso' component={CadCurso} />
      <Route path='/execao' component={CadastroDiaExcecao} /> 
    </Router>
  );
}

export default Routes;
