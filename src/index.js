import React from 'react';
import ReactDOM from 'react-dom';

//import {BoaTarde, BoaNoite} from './componentes/Multiplos';
//import Primeiro from './componentes/Primeiro';
//import BomDia from './componentes/BomDia';
//import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';


ReactDOM.render(
    <div>
        <Pai nome='Alberto' sobrenome="Jubileu">
            <Filho nome='Gilberto'/>
            <Filho nome='Carla' />
            <Filho nome='Pedro' />
        </Pai>
    </div>
, document.getElementById('root'))