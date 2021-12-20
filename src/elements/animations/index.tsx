import React from "react";
import styled, { keyframes } from 'styled-components';
import { AnimationModel } from "./model";
import { bounce, flash } from 'react-animations';

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite
`;

const Flash = styled.div`
  animation: 2s ${keyframes`${flash}`} infinite
`;

/**
 * Componente(Elemento): Actua como un objeto para animar elementos o componentes con animación Bounce
 * 
 * @remark
 * Este componente hace uso de animaciones de la libreria {react-animations}
 * Este componente hace uso de estilos de la libreria {styled-components}
 * 
 * @param props: AnimationModel
 *  children: Indica el contenido que tendra la animación
 * 
 * @returns Elemento de React
 */
export function AnimationBounce(props: AnimationModel): JSX.Element {
  return (
    <Bounce>
      {props.children}
    </Bounce>
  )
}

/**
 * Componente(Elemento): Actua como un objeto para animar elementos o componentes con animación Flash
 * 
 * @remark
 * Este componente hace uso de animaciones de la libreria {react-animations}
 * Este componente hace uso de estilos de la libreria {styled-components}
 * 
 * @param props: AnimationModel
 *  children: Indica el contenido que tendra la animación
 * 
 * @returns Elemento de React
 */
export function AnimationFlash(props: AnimationModel): JSX.Element {
  return (
    <Flash>
      {props.children}
    </Flash>
  )
}
