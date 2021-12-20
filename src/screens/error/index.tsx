import React,{ useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ERROR_GOTOHOME, ERROR_INITIAL, HOME, IMG_SORPRISE_FACE } from '../../config/constants';
import { Image } from '../../elements/image';
import { TableCard } from '../../elements/card';
import { Code, TitleHeadSection } from '../../elements/typography';
import './styles.scss';

/**
 * Componente: Renderiza la pantalla de error
 * 
 * @remark
 * Este componente hace uso de useNavigate de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
function Error(): JSX.Element {
  const errorParam = useParams<"error">();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setError(errorParam.error);
  }, [errorParam])

  return (
    <div className="errorPage">
      <TableCard className="errorPageTable">
        <Image css="imgerrorPage" src={IMG_SORPRISE_FACE} alt="Page not found" />
        <div className="errorPageText">
          <TitleHeadSection className="titleerrorPage">{ERROR_INITIAL}:</TitleHeadSection>
          <Code className="codeError">{error}</Code>
          <Link to={HOME} className="linkHome">{ERROR_GOTOHOME}</Link>
        </div>
      </TableCard>
    </div>
  );
}

export default Error;
