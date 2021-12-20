import { TableColumn } from "react-data-table-component";
import { T_NAME, T_PAIRS, T_PRICE, T_PRICE_VOLUME, T_VOLUME } from "../../config/constants";
import UtilService from "../../services/utils";
import { MarketCurrencyInfoModel } from "./model";

/**
 * Data: Crea estructura para Datatable de los markets o exchange de las criptomonedas
 * 
 * @remark
 * Hace parte de {react-data-table-component}
 */
export const columns: TableColumn<MarketCurrencyInfoModel>[] | any[] = [
  {
    name: T_NAME,
    selector: row => UtilService.setRow(row.name),
    sortable: true,
  },
  {
    name: T_PAIRS,
    selector: row => UtilService.setRow(`${row.base}/${row.quote}`),
    sortable: true,
  },
  {
    name: T_PRICE,
    selector: row => UtilService.setRow(UtilService.setFormatCurrency(row.price_usd)),
    sortable: true,
  },
  {
    name: T_VOLUME,
    selector: row => UtilService.setRow(UtilService.setFormatNumber(row.volume)),
    sortable: true,
  },
  {
    name: T_PRICE_VOLUME,
    selector: row => UtilService.setRow(UtilService.setFormatCurrency(row.volume_usd)),
    sortable: true,
  }
];
