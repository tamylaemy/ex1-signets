import './Entete.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Entete(props) {
return (
    <header className="Entete">
        <div className="Logo">Signets (Beta)</div>
        <div className="Login">
            <h1 className="Nom"> Tamyla A-C</h1>
            <AccountCircleIcon className="Avatar"/>
        </div>
   </header>
)
}