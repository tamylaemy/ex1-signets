import './Signets.scss';

export default function Signets(props) {
  return (
    <li className="Signets">
      <div className="iconTri">X</div>
      <img src={'signets/' + props.id + '.jpg'} alt={props.titre}/>
        <div className="info"> 
          <h1 className="titre">{props.titre}</h1>
          <p className="prix">Modifié : {props.date}</p>
          <div className="btnPlus">+</div>
      </div>
    </li>
  );
}