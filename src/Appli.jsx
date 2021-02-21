import './Appli.scss';
import './Appli.scss';
import Entete from './Entete';
import Dossier from './Dossier';

export default function Appli() {
  return (
    <div className="Appli">
          <Entete />
        <section className="contenuPrincipal">
            <Dossier />
        </section>
    </div>
  );
}
