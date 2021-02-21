import './Dossier.scss';
import BtnAjoutSignet from './BtnAjoutSignet';
import Signets from './Signets';
import tabSignets from './data/signets.json';


export default function Dossier(props) {
  return (
      <div>
        {
          tabSignets.map(unSignet => <Signets etatSignet = {props.etatSignet} id={unSignet.id} titre={unSignet.titre} couleur={unSignet.couleur} date={unSignet.date}  />)
        }
          < BtnAjoutSignet />
      </div>
  );
}
