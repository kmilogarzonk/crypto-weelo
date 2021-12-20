import React, { useEffect, useState } from "react";
import { LogoFullAnimationBounce, LogoFullAnimationFlash } from "../../elements/logo";
import { LoaderModel } from "./model";
import './styles.scss';
import { IMG_LOADER } from "../../config/constants";

/**
 * Componente: Renderiza el Loader principal de la aplicación
 * 
 * @param props: LoaderModel
 *  loading: indica el estado de la carga si esta activo o inactivo
 * 
 * @returns Elemento de React
 */
export function LoaderBigScreen(props: LoaderModel): JSX.Element {

  const { loading } = props;
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (loading) {
      setLoader(loading);
    } else {
      setTimeout(() => {
        setLoader(loading);
      }, 1000);
    }
  }, [loading])

  return (
    <>
      {loader && (
        <div className={`loaderBigScreen ${!loading ?? 'ocultLoader'}`}>
          <LogoFullAnimationBounce css="logoImg" />
        </div>
      )}
    </>
  )
}

/**
 * Componente: Renderiza un loader para la carga de datatables u otros componentes
 * 
 * @returns Elemento de React
 */
export function LoadingContent(): JSX.Element {
  return (
    <div className={`loaderContent`}>
      <LogoFullAnimationFlash css="logoImg" />
    </div>
  )
}

/**
 * Componente: Renderiza un loader para la carga de datos o textos
 * 
 * @returns Elemento de React
 */
export function MinifyLoader(): JSX.Element {
  return (
    <div className={`loaderSimple`}>
      <IMG_LOADER />
    </div>
  )
}
