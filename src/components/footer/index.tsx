import React from 'react';
import { AUTOR } from '../../config/constants';
import { Text } from '../../elements/typography';
import "./styles.scss";

/**
 * Componente: Renderiza el footer de todo el sitio
 * 
 * @returns Elemento de React
 */
function Footer(): JSX.Element {
  return (
    <footer>
      <Text className="tag">by <span>{AUTOR}</span></Text>
    </footer>
  );
}

export default Footer;
