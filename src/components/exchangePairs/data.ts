import { TableColumn } from "react-data-table-component";
import { T_PAIRS, T_PRICE, T_UPDATED, T_VOLUME } from "../../config/constants";
import UtilService from "../../services/utils";
import { PairsExchangeModel } from "../dataExchange/model";

/**
 * Data: Crea estructura para Datatable de los pares con los exchanges
 * 
 * @remark
 * Hace parte de {react-data-table-component}
 */
export const columns: TableColumn<PairsExchangeModel>[] = [
  {
    name: T_PAIRS,
    selector: (row: PairsExchangeModel) => UtilService.setRow(row.quote ? `${row.base}/${row.quote}` : row.base),
    sortable: true,
  },
  {
    name: T_PRICE,
    selector: (row: PairsExchangeModel) => UtilService.setRow(UtilService.setFormatCurrency(row.price_usd)),
    sortable: true,
  },
  {
    name: T_VOLUME,
    selector: (row: PairsExchangeModel) => UtilService.setRow(UtilService.setFormatCurrency(row.volume)),
    sortable: true,
  },
  {
    name: T_UPDATED,
    selector: (row: PairsExchangeModel) => UtilService.setRow(UtilService.setFormatDateToNow(row.time)),
  }
];
