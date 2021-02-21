import './Signets.scss';

export default function Signets(props) {
  return (
    <li className="Signet">
    <div className="iconTri">X</div>
    <img src={'signets/' + props.id + '.jpg'} alt={props.nom} height="300px" width="400px" />
      <div className="info">
        <p className="nom">{props.nom}</p>
        <p className="prix">Modifié : {props.date}</p>
        <div className="btnPlus">+</div>
      </div>
  </li>
  );
}