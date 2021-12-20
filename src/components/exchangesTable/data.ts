import { TableColumn } from "react-data-table-component";
import { T_COUNTRY, T_EXCHANGE, T_ID, T_NAME, T_VOLUME24 } from "../../config/constants";
import UtilService from "../../services/utils";
import { ExchangeModel } from "../dataExchange/model";
import { setItemExchange } from "./helper";

/**
 * Data: Crea estructura para Datatable de los Exchange
 * 
 * @remark
 * Hace parte de {react-data-table-component}
 */
export const columns: TableColumn<ExchangeModel>[] | any[] = [
  {
    name: T_ID,
    selector: row => UtilService.setRow(row.id),
    width: '80px'
  },
  {
    name: T_NAME,
    selector: (row: ExchangeModel): JSX.Element  => {
      const object: any = {
        id: row.id,
        name: row.name,
      };
      return setItemExchange(object);
    },
  },
  {
    name: T_VOLUME24,
    selector: row => UtilService.setRow(UtilService.setFormatCurrency(row.volume_usd)),
  },
  {
    name: T_COUNTRY,
    selector: row => UtilService.setRow(row.country),
    sortable: true,
  },
  {
    name: T_EXCHANGE,
    selector: row => UtilService.setRow(row.pairs),
  }
];
