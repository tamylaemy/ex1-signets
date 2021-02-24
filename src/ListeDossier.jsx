import './ListeDossier.scss';
import BtnAjoutDossier from './BtnAjoutDossier';
import Dossier from './Dossier';
import tabDossier from './data/dossiers.json';


export default function ListeDossier(props) {
  return (
      <div className="ListeDossier">
        <div className="Dossiers">
          {
            tabDossier.map(unDossier => <Dossier etatDossier = {props.etatDossier} id={unDossier.id} titre={unDossier.titre} couleur={unDossier.couleur} date={unDossier.date}  />)
          }
        </div>
        < BtnAjoutDossier />
      </div>
  );
}
