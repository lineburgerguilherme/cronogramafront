import React from 'react';
import { Router,Route } from 'react-router-dom';

import CadDisciplina from '../components/CadastroDisciplinas';
import CadProfessor from '../components/CadastroProfessores';
import CadastroSala from '../components/CadastroSala';
import CadSala from '../components/CadastroSala';
import CadFase from '../components/CadastroFase';
import Login from '../components/Login';
import CadCurso from '../components/Curso';
import CadastroDiaExcecao from '../components/CadastroDiaExeção';


const Routes = () => {
  return (
    <Router>
            <Route path='/disciplina' component={<CadDisciplina />} />
            <Route path='/professor' componet={<CadProfessor />} />
            <Route path='/sala' conponet ={<CadSala />}/>
            <Route path='/fase' conponet = {<CadFase />}/> 
            <Route path='/login' conponet = {<Login />}/>
            <Route path='/curso' componet = {<CadCurso />}/>
            <Route path='/Execao' componet = {<CadastroDiaExcecao />}/>
    </Router>
  );
}

export default Routes;