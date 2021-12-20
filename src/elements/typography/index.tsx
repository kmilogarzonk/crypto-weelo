import React from "react";
import { PillModel, TypographyModel } from "./model";
import "./styles.scss";

/**
 * Componente(Elemento): Renderiza texto
 * 
 * @param props: TypographyModel
 *  children: Requerido | Indica el contenido
 *  className: Indica si se requiere un estilo personalizado desde el componente que lo llama
 * 
 * @returns Elemento de React
 */
export function Text(props: TypographyModel): JSX.Element {
  return (
    <p className={`text ${props.className}`}>{props.children}</p>
  )
}

/**
 * Componente(Elemento): Renderiza texto para titulos
 *  
 * @param props: TypographyModel
 *  children: Requerido | Indica el contenido
 *  className: Indica si se requiere un estilo personalizado desde el componente que lo llama
 * 
 * @returns Elemento de React
 */
export function TitleHeadSection(props: TypographyModel): JSX.Element {
  return (
    <h2 className={`textTitleHead ${props.className}`}>{props.children}</h2>
  )
}

/**
 * Componente(Elemento): Renderiza texto para sub-titulos
 *  
 * @param props: TypographyModel
 *  children: Requerido | Indica el contenido
 *  className: Indica si se requiere un estilo personalizado desde el componente que lo llama
 * 
 * @returns Elemento de React
 */
export function SecondTitleSection(props: TypographyModel): JSX.Element {
  return (
    <h3 className={`secondTitle ${props.className}`}>{props.children}</h3>
  )
}

/**
 * Componente(Elemento): Renderiza texto en modo pill
 *  
 * @param props: TypographyModel
 *  children: Requerido | Indica el contenido
 *  className: Indica si se requiere un estilo personalizado desde el componente que lo llama
 *  priority: Indica la prioridad para definir el background del pill
 * 
 * @returns Elemento de React
 */
export function Pill(props: PillModel): JSX.Element {
  return (
    <span className={`pill ${props.className}`} style={{ backgroundColor: props.priority }}>
      <p>{props.children}</p>
    </span>
  )
}

/**
 * Componente(Elemento): Renderiza texto en modo de vista a código
 *  
 * @param props: TypographyModel
 *  children: Requerido | Indica el contenido
 *  className: Indica si se requiere un estilo personalizado desde el componente que lo llama
 * 
 * @returns Elemento de React
 */
export function Code(props: TypographyModel): JSX.Element {
  return (
    <code className={`code ${props.className}`}>{props.children}</code>
  )
}
