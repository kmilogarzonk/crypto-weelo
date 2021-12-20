import React from "react";
import { CardModel } from "./model";
import "./styles.scss";

/**
 * Componente(Elemento): Componente de tarjeta para mostrar contenido o elementos
 * 
 * @param props: CardModel
 *  className: Indica alguna clase personalizada
 *  children: Indica el contenido que tendra la animación
 * 
 * @returns Elemento de React
 */
export function Card(props: CardModel): JSX.Element {
  return (
    <div className={`card ${props.className ?? props.className}`}>
      {props.children}
    </div>
  )
}

/**
 * Componente(Elemento): Componente de tarjeta para mostrar contenido de datatables o elementos en general para el sitio
 * 
 * @param props: CardModel
 *  className: Indica alguna clase personalizada
 *  children: Indica el contenido que tendra la animación
 * 
 * @returns Elemento de React
 */
export function TableCard(props: CardModel): JSX.Element {
  return (
    <div className={`card tableCard ${props.className ?? props.className}`}>
      {props.children}
    </div>
  )
}
