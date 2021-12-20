import React from "react";
import { ItemExchange } from "../../elements/table";
import { ItemModel } from "../../elements/table/model";

/**
 * Componente: Su función es generar el item para el exchange que se mostrata en la Datatable de Exchanges
 * 
 * @param props: ItemModel
 *  id: identificador moneda
 *  name: nombre moneda
 * 
 * @returns Elemento de React
 */
export function setItemExchange(props: ItemModel): JSX.Element {
  const { id, name } = props;

  return (
    <ItemExchange id={id} name={name} />
  )
}
