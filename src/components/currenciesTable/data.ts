import { TableColumn } from "react-data-table-component";
import UtilService from "../../services/utils";
import { CurrencyInfoModel } from "../headCurrency/model";
import { setItemCurrency } from "./helper";
import { T_RANK, T_PRICE, T_NAME, T_MCAP, T_VOLUME24, T_SUPPLY } from "../../config/constants";

/**
 * Data: Crea estructura para Datatable de las Criptomonedas
 * 
 * @remark
 * Hace parte de {react-data-table-component}
 */
export const columns: TableColumn<CurrencyInfoModel>[] | any[] = [
  {
    name: T_RANK,
    selector: (row: CurrencyInfoModel) => UtilService.setRow(row.rank),
    sortable: true,
    width: '80px'
  },
  {
    name: T_NAME,
    selector: (row: CurrencyInfoModel): JSX.Element  => {
      const object: any = {
        id: row.id,
        name: row.name,
        symbol: row.symbol,
      };
      return setItemCurrency(object);
    },
  },
  {
    name: T_PRICE,
    selector: (row: CurrencyInfoModel) => UtilService.setRow(UtilService.setFormatCurrency(parseFloat(row.price_usd))),
  },
  {
    name: T_MCAP,
    selector: (row: CurrencyInfoModel) => UtilService.setRow(UtilService.setFormatCurrency(parseFloat(row.market_cap_usd))),
  },
  {
    name: T_VOLUME24,
    selector: (row: CurrencyInfoModel) => UtilService.setRow(UtilService.setFormatCurrency(parseFloat(row.volume24))),
  },
  {
    name: T_SUPPLY,
    selector: (row: CurrencyInfoModel) => UtilService.setRow(UtilService.setFormatNumber(parseInt(row.csupply))),
  },
];
