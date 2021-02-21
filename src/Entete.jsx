import './Entete.scss';

export default function Entete(props) {
return (
    <header className="Entete">
        <div className="Logo">Signets(Beta)</div>
        <div className="Login">
            <h1 className="Nom"> Tamyla A-C</h1>
            <img src="./avatar/dinosaur-avatar.jpg" alt="Avatar de la personne connecté" className="Avatar"/>
        </div>
   </header>
)
}