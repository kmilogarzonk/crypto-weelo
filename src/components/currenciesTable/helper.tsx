import React from "react";
import { ItemCurrency } from "../../elements/table";
import { ItemModel } from "../../elements/table/model";

/**
 * Componente: Su función es generar el item para la criptomoneda que se mostrata en la Datatable de criptomonedas
 * 
 * @param props: ItemModel
 *  id: identificador moneda
 *  name: nombre moneda
 *  symbol?: simbolo moneda
 * 
 * @returns Elemento de React
 */
export function setItemCurrency(props: ItemModel): JSX.Element  {
  const { id, name, symbol } = props;

  return (
    <ItemCurrency id={id} name={name} symbol={symbol} />
  )
}
