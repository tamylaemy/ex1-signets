import './BtnAjoutDossier.scss';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';

export default function BtnAjoutDossier() {
  return (
      <div className="BtnAjoutDossier">
        <Fab size="small" className="btnPlusDossier"> <AddIcon/> </Fab>
      </div>
  );
}