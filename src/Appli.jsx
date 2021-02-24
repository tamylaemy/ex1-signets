import './Appli.scss';
import Entete from './Entete';
import ListeDossier from './ListeDossier';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenuPrincipal">
            <ListeDossier />
        </section>
    </div>
  );
}
