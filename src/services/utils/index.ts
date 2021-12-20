import moment from 'moment';
import 'moment/locale/es';
import { NavigateFunction } from 'react-router-dom';
import { ERROR_CONNECTION, ERROR_PAGE } from '../../config/constants';
import { apiProvider } from '../api/provider';
import { ResultRequestModel } from './model';

export default class UtilService {

  /**
   * Función: Función para determinar tiempo de carga del DOM
   * 
   * @returns Promesa despues de determinado tiempo
   */
  static callbackFinishLoad() {
    return new Promise((resolve) => setTimeout(() => resolve(false), 1500));
  }

  /**
   * Función: Para obtener la fecha actual en formato (día mes, año)
   * 
   * @returns string de fecha actual con formato
   */
  static getDateNow(): string {
    moment.locale('es');
    const date = moment().format("D MMMM, YYYY");
    return date;
  }

  /**
   * Función: Función para determinar el valor de un string o numero si existe, si no asigna un valor por defecto
   * 
   * @param value: Requerido | Indica el item a validar
   * 
   * @returns String del valor final
   */
  static setRow(value: string | number): string | number{
    return value ? value : '--';
  }

  /**
   * Función: Función para formatear una fecha en formato (día mes, año)
   * 
   * @param date: Requerido | Define la fecha a formatear
   * 
   * @returns string de fecha con formato
   */
  static setFormatDate(date: string): string {
    let dateFormat = "";
    if (date) {
      moment.locale('es');
      dateFormat = moment(date).format("D MMMM, YYYY");
    }
    return dateFormat;
  }

  /**
   * Función: Función para formatear una fecha en formato relativo eg: "hace 1 hora", "hace 10 minutos"
   * 
   * @param date: Requerido | Define la fecha a formatear
   * 
   * @returns string de fecha con formato relativo
   */
  static setFormatDateToNow(date: number): string {
    let dateFormat = "";
    if (date) {
      moment.locale('es');
      dateFormat = moment(date * 1000).startOf('hour').fromNow();
    }
    return dateFormat;
  }

  /**
   * Función: Función para formatear un valor numerico en dolar
   * 
   * @param value: Requerido | Indica el item a validar
   * 
   * @returns string con formato de precio dolar
   */
  static setFormatCurrency(value: number): string {
    let format = "";
    if (value) {
      const currencyUsd = { style: 'currency', currency: 'USD' };
      const formatCurrency = new Intl.NumberFormat('en-US', currencyUsd);
      format = formatCurrency.format(value)
    }
    return format;
  }

  /**
   * Función: Función para determinar un numero o decimal y agregar separadores de mil
   * 
   * @param value: Requerido | Indica el item a validar
   * 
   * @returns string con formato de separadores de mil
   */
  static setFormatNumber(value: number): string {
    let format = "";
    if (value) {
      format = value % 1 === 0
        ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return format;
  }

  /**
   * Función: Realiza la petición para obtener la información de crypto market
   * 
   * @param history: NavigateFunction | Requerido | Indica el navigate para
   * cuando exista un error lo redirija a la pantalla de error
   * 
   * @returns Promesa con la información general del API
   */
  static getDataGeneral(history: NavigateFunction) {
    const urlBase = process.env.REACT_APP_URL_API_CRYPTO;
    const url = `${urlBase}/global/`;

    return new Promise(async (resolve) => {
      await apiProvider.getRequest(url)
      .then((result: ResultRequestModel) => {
        const data = result.data[0];
        resolve(data);
      })
      .catch(() => {
        this.goToErrorPage(ERROR_CONNECTION, history)
      });
    });
  }

  /**
   * Función: Realiza la petición para obtener la información detallada para una moneda específica
   * 
   * @param id: Requerido | Hace referencia al id de la moneda
   * @param history: NavigateFunction | Requerido | Indica el navigate para
   * cuando exista un error lo redirija a la pantalla de error
   * 
   * @returns Promesa con la información detallada para una moneda específica
   */
  static async getCurrencyData(id: string, history: NavigateFunction) {
    const urlBase = process.env.REACT_APP_URL_API_CRYPTO;
    const url = `${urlBase}/ticker/?id=${id}`;

    return new Promise(async (resolve) => {
      await apiProvider.getRequest(url)
      .then((result: ResultRequestModel) => {
        const data = result.data[0];
        resolve(data);
      })
      .catch(() => {
        this.goToErrorPage(ERROR_CONNECTION, history)
      });
    });
  }

  /**
   * Función: Realiza la petición para obtener la información de todas las criptomonedas
   * 
   * @param start: Requerido | Hace referencia desde que registro empieza la petición
   * @param limit: Requerido | Hace referencia a la cantidad de registros que se desea para la petición
   * @param history: NavigateFunction | Requerido | Indica el navigate para
   * cuando exista un error lo redirija a la pantalla de error
   * 
   * @returns Promesa con la información de todas las criptomonedas
   */
  static async getCurrenciesData(start: number, limit: number, history: NavigateFunction) {
    const urlBase = process.env.REACT_APP_URL_API_CRYPTO;
    const url = `${urlBase}/tickers/?start=${start}&limit=${limit}`;

    return new Promise(async (resolve) => {
      await apiProvider.getRequest(url)
      .then((result: ResultRequestModel) => {
        const data = result.data;
        resolve(data);
      })
      .catch(() => {
        this.goToErrorPage(ERROR_CONNECTION, history)
      });
    });
  }

  /**
   * Función: Realiza la petición para obtener la información de los Exchanges
   * 
   * @param history: NavigateFunction | Requerido | Indica el navigate para
   * cuando exista un error lo redirija a la pantalla de error
   * 
   * @returns Promesa con la información general de los Exchanges
   */
  static async getExchangesData(history: NavigateFunction) {
    const urlBase = process.env.REACT_APP_URL_API_CRYPTO;
    const url = `${urlBase}/exchanges/`;

    return new Promise(async (resolve) => {
      await apiProvider.getRequest(url)
      .then((result: ResultRequestModel) => {
        const data = Object.values(result.data);
        resolve(data);
      })
      .catch(() => {
        this.goToErrorPage(ERROR_CONNECTION, history)
      });
    });
  }

  /**
   * Función: Realiza la petición para obtener los primeros 50 mercados para una criptomoneda específica 
   * 
   * @param id: Requerido | Hace referencia al id de la moneda
   * @param history: NavigateFunction | Requerido | Indica el navigate para
   * cuando exista un error lo redirija a la pantalla de error
   * 
   * @returns Promesa con la información de los primeros 50 mercados para una criptomoneda específica
   */
  static async getCurrencyDataMarket(id: string, history: NavigateFunction) {
    const urlBase = process.env.REACT_APP_URL_API_CRYPTO;
    const url = `${urlBase}/coin/markets/?id=${id}`;

    return new Promise(async (resolve) => {
      await apiProvider.getRequest(url)
      .then((result: ResultRequestModel) => {
        const data = result.data;
        resolve(data);
      })
      .catch(() => {
        this.goToErrorPage(ERROR_CONNECTION, history)
      });
    });
  }

  /**
   * Función: Realiza la petición para obtener las estadisticas sociales de una criptomoneda especifica
   * 
   * @param id: Requerido | Hace referencia al id de la moneda
   * @param history: NavigateFunction | Requerido | Indica el navigate para
   * cuando exista un error lo redirija a la pantalla de error
   * 
   * @returns Promesa con la información de las estadisticas sociales de una criptomoneda especifica
   */
  static async getCurrencyDataStats(id: string, history: NavigateFunction) {
    const urlBase = process.env.REACT_APP_URL_API_CRYPTO;
    const url = `${urlBase}/coin/social_stats/?id=${id}`;

    return new Promise(async (resolve) => {
      await apiProvider.getRequest(url)
      .then((result: ResultRequestModel) => {
        const data = result.data;
        resolve(data);
      })
      .catch(() => {
        this.goToErrorPage(ERROR_CONNECTION, history)
      });
    });
  }

  /**
   * Función: Realiza la petición para obtener la información de un exchange especifico
   * 
   * @param id: Requerido | Hace referencia al id del exchange
   * @param history: NavigateFunction | Requerido | Indica el navigate para
   * cuando exista un error lo redirija a la pantalla de error
   * 
   * @returns Promesa con la información de la información de un exchange especifico
   */
  static async getExchangeData(id: string, history: NavigateFunction) {
    const urlBase = process.env.REACT_APP_URL_API_CRYPTO;
    const url = `${urlBase}/exchange/?id=${id}`;

    return new Promise(async (resolve) => {
      await apiProvider.getRequest(url)
      .then((result: ResultRequestModel) => {
        const data = result.data;
        resolve(data);
      })
      .catch(() => {
        this.goToErrorPage(ERROR_CONNECTION, history)
      });
    });
  }

  /**
   * Función: Redirige a la pantalla de error indicando por query param el error identificado
   * 
   * @param error: Requerido | Hace referencia al error encontrado
   * @param history: NavigateFunction | Requerido | Indica el navigate para redirección
   * 
   * @returns Redirección a la pantalla de error
   */
  static goToErrorPage(error: string, history: NavigateFunction) {
    return history(`${ERROR_PAGE}/${error.toString()}`);
  }

}
