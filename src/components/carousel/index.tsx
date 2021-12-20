import React from "react";
import Slider from "react-slick";
import { CarouselInfinityModel } from "./model";
import './styles.scss';

/**
 * Componente: Su función es animar la sección inicial del sitio con una rotación de derecha a izquierda
 * 
 * @remark
 * Este componente hace parte de {react-slick}
 * 
 * @param props: CarouselInfinityModel
 *  children: Contenido que tendra la animación y Carousel
 * 
 * @returns Elemento de React
 */

function CarouselInfinity(props: CarouselInfinityModel): JSX.Element  {

  const { children } = props;
  const settings = {
    arrows: false,
    className: "slider variable-width",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  }

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

export default CarouselInfinity;

