import './Signets.scss';

export default function Signets(props) {
  return (
    <li className="Signet">
    <div className="iconTri">X</div>
    <img src={'signets/' + props.id + '.jpg'} alt={props.titre} height="300px" width="400px" />
      <div className="info">
        <p className="titre">{props.titre}</p>
        <p className="prix">Modifié : {props.date}</p>
        <div className="btnPlus">+</div>
      </div>
  </li>
  );
}