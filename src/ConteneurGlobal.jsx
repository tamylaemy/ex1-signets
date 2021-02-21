import './ConteneurGlobal.scss';
import Entete from './Entete';
import Dossier from './Dossier';

export default function ConteneurGlobal() {
  return (
    <div className="ConteneurGlobal">
        <Entete />
        <section className="contenuPrincipal">
            <Dossier />
        </section>
    </div>
  );
}
