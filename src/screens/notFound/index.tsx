import React from 'react';
import { TableCard } from '../../elements/card';
import { Image } from '../../elements/image';
import { TitleHeadSection } from '../../elements/typography';
import { Link } from 'react-router-dom';
import { ERROR_404, ERROR_GOTOHOME, HOME, IMG_SAD_FACE } from '../../config/constants';
import './styles.scss';

/**
 * Componente: Renderiza la pantalla cuando no encuentra una url en el sitio
 * 
 * @returns Elemento de React
 */
function NotFound(): JSX.Element {
  return (
    <div className="notFound">
      <TableCard className="notFoundTable">
        <Image css="imgNotFound" src={IMG_SAD_FACE} alt="Page not found" />
        <div className="notFoundText">
          <TitleHeadSection className="titleNotFound">{ERROR_404}, </TitleHeadSection>
          <Link to={HOME} className="linkHome">{ERROR_GOTOHOME}</Link>
        </div>
      </TableCard>
    </div>
  );
}

export default NotFound;
