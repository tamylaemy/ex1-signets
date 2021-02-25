import './Dossier.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';
import { Fab } from '@material-ui/core';

export default function Dossier(props) {
  return (
    <li className="Dossier" style = {{backgroundColor:props.couleur }}>
        <Fab size="small" className="iconTri" style = {{opacity:1 }}> <SortIcon /> </Fab>
        <img src={'signets/' + props.id + '.jpg'} alt={props.titre}/>
        <div className="info"> 
          <h1 className="titre">{props.titre}</h1>
          <p className="prix">Modifié : {props.date}</p>
          <div className="btnPlus">< MoreVertIcon /></div>
      </div>
    </li>
  );
}