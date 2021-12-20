import React from "react";
import { LogoModel } from "./model";
import { AnimationBounce, AnimationFlash } from "../animations";
import "./styles.scss";
import { IMG_LOGO } from "../../config/constants";
import { Image } from "../image";

/**
 * Componente(Elemento): Componente de imagen con logo
 * 
 * @param props: LogoModel
 *  css: Indica alguna clase personalizada
 * 
 * @returns Elemento de React
 */
export function LogoFull(props: LogoModel): JSX.Element {
  return (
    <Image src={IMG_LOGO} css={`logo ${props.css}`} alt={"LogoCrypto"} />
  )
}

/**
 * Componente(Elemento): Componente de imagen con logo y animación Bounce
 * 
 * @param props: LogoModel
 *  css: Indica alguna clase personalizada
 * 
 * @returns Elemento de React
 */
export function LogoFullAnimationBounce(props: LogoModel): JSX.Element {

  return (
    <AnimationBounce>
      <LogoFull css={`${props.css ?? props.css }`} />
    </AnimationBounce>
  )
}

/**
 * Componente(Elemento): Componente de imagen con logo y animación Flash
 * 
 * @param props: LogoModel
 *  css: Indica alguna clase personalizada
 * 
 * @returns Elemento de React
 */
export function LogoFullAnimationFlash(props: LogoModel): JSX.Element {

  return (
    <AnimationFlash>
      <LogoFull css={`${props.css ?? props.css }`} />
    </AnimationFlash>
  )
}
