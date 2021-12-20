import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconModel } from "./model";

/**
 * Componente(Elemento): Renderiza iconos
 * 
 * @remark
 * Este componente hace uso de iconos de la libreria {@fortawesome/react-fontawesome}
 * 
 * @param props: IconModel
 *  css: Indica estilos personalizados del icono
 *  icon: Requerido | Indica el icono a usar de fontawesome indicado en las constantes
 *  size: Indica el tamaño que tendra el icono
 *  fixedWidth: Indica ajuste de ancho
 *  inverse: Indica si se renderizara de manera inversa
 *  listItem: Indica si es item de lista
 * 
 * @returns Elemento de React
 */
export function Icon(props: IconModel): JSX.Element {
  const { icon, size, fixedWidth, inverse, listItem, spin, pulse, rotation, flip, css } = props;

  return (
    <FontAwesomeIcon
      className={css}
      icon={icon}
      size={size}
      fixedWidth={fixedWidth}
      inverse={inverse}
      listItem={listItem}
      spin={spin}
      pulse={pulse}
      rotation={rotation}
      flip={flip}
    />
  )
}
