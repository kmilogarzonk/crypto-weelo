import React from "react";
import { LinkModel } from "./model";
import "./styles.scss";

/**
 * Componente(Elemento): Componente de link para vinculos externos
 * 
 * @param props: LinkModel
 *  className: Indica alguna clase personalizada
 *  url: Requerido | Indica la url del sitio a navegar
 *  blank: Indica si se debe abrir en una nueva pestaña o en la actual
 *  children: contenido del link
 * 
 * @returns Elemento de React
 */
export function LinkExtern(props: LinkModel): JSX.Element {
  return (
    <a className={`link ${props.className}`} href={props.url} target={props.blank ? "_blank" : "_parent"} rel="noopener noreferrer">{props.children}</a>
  )
}
