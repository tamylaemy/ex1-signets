import './Signets.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';
import { Fab } from '@material-ui/core';

export default function Signets(props) {
  return (
    <li className="Signets">
        <Fab size="small" className="iconTri"> <SortIcon /> </Fab>
        <img src={'signets/' + props.id + '.jpg'} alt={props.titre}/>
        <div className="info"> 
          <h1 className="titre">{props.titre}</h1>
          <p className="prix">Modifié : {props.date}</p>
          <div className="btnPlus">< MoreVertIcon /></div>
      </div>
    </li>
  );
}