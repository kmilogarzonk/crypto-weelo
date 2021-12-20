import React from "react";
import { ImageModel } from "./model";
import "./styles.scss";

/**
 * Componente(Elemento): Componente de imagen para mostrar contenido en el sitio
 * 
 * @param props: ImageModel
 *  css: Indica alguna clase personalizada
 *  src: Requerido | Indica el contenido, ruta o url de la imagen
 *  alt: Requerido | Indica el nombre alterno al no reconocer la imagen
 * 
 * @returns Elemento de React
 */
export function Image(props: ImageModel): JSX.Element {
  return (
    <img src={props.src} className={`image ${props.css}`} alt={props.alt} />
  )
}
