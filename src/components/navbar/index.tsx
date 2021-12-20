import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../config/constants';
import { Card } from '../../elements/card';
import { LogoFull } from '../../elements/logo';
import UtilService from '../../services/utils';
import "./styles.scss";

/**
 * Componente: Renderiza el header con el logo y fecha actual
 * 
 * @remark
 * Este componente hace uso de Link de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
function Navbar(): JSX.Element {

  const date = UtilService.getDateNow();

  return (
    <Card className="navbar">
      <Link className="logoNav" to={HOME}>
        <LogoFull css={'imgLogo'} />
      </Link>
      <div className="date">
        <p className="dateNow">{date}</p>
      </div>
    </Card>
  );
}

export default Navbar;
