import React from "react";
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import { CURRENCY, EXCHANGE } from "../../config/constants";
import { settingsPagination, styleTable } from "./data";
import { ItemModel, TableModel } from "./model";
import "./styles.scss";

/**
 * Componente(Elemento): Renderiza un Datatable
 * 
 * @remark
 * Este componente hace uso de DataTable de la libreria {react-data-table-component}
 * 
 * @param props: TableModel
 *  columns: Requerido | Indica los nombres ya tributos que tenga cada columna de la tabla
 *  data: Requerido | Array que indica el contenido de cada fila
 *  pagination: Indica si la tabla tendra paginación o sera de contenido completo
 *  css: Indica si se requiere un estilo personalizado desde el componente que lo llama
 * 
 * @returns Elemento de React
 */
export function Table(props: TableModel): JSX.Element {
  const { columns, data, pagination } = props;

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination={pagination}
      paginationComponentOptions = {settingsPagination}
      responsive
      customStyles={styleTable}
    />
  )
}

/**
 * Componente(Elemento): Renderiza un item del Datatable que vincula a la información detallada de una criptomoneda
 * 
 * @remark
 * Este componente hace uso de Link de la libreria {react-router-dom}
 * 
 * @param props: ItemModel
 *  id: Requerido | Indica el número de identificación de la criptomoneda
 *  name: Requerido | Indica el nombre de la criptomoneda
 *  symbol: Indica el simbolo de la criptomoneda
 * 
 * @returns Elemento de React
 */
export function ItemCurrency(props: ItemModel): JSX.Element {
  const { id, name, symbol } = props;

  return (
    <Link className="itemCurrency" to={`${CURRENCY}/${id}`}>
      <p className="name">{name}</p>
      <p className="symbol">({symbol})</p>
    </Link>
  )
}

/**
 * Componente(Elemento): Renderiza un item del Datatable que vincula a la información detallada del Exchange
 * 
 * @remark
 * Este componente hace uso de Link de la libreria {react-router-dom}
 * 
 * @param props: ItemModel
 *  id: Requerido | Indica el número de identificación del Exchange
 *  name: Requerido | Indica el nombre del Exchange
 * 
 * @returns Elemento de React
 */
export function ItemExchange(props: ItemModel): JSX.Element {
  const { id, name } = props;

  return (
    <Link className="itemCurrency" to={`${EXCHANGE}/${id}`}>
      <p className="name">{name}</p>
    </Link>
  )
}
