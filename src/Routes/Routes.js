import React from 'react';
import { Router,Route } from 'react-router-dom';

import CadDisciplina from '../components/CadastroDisciplinas';
import CadProfessor from '../components/CadastroProfessores';
import CadastroSala from '../components/CadastroSala';
import CadSala from '../components/CadastroSala';
import CadFase from '../components/CadastroFase';


const Routes = () => {
  return (
    <Router>
            <Route path='/disciplina' component={<CadDisciplina />} />
            <Route path='/professor' componet={<CadProfessor />} />
            <Route path='/sala' conponet ={<CadSala />}/>
            <Route path='/coordenador' conponet = {<CadFase />}/> 
    </Router>
  );
}

export default Routes;