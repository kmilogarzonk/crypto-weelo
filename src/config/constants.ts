import { I_COINS, I_DOLLAR_SIGN, I_PERCENT, I_SEARCH_LOCATION, I_WALLET } from "./icons";
import { DataGlobal } from "./model";
import SorpriseFace from '../assets/sorpriseFace.png';
import SadFace from '../assets/sadFace.png';
import Logo from "../assets/logo.png";
import Loader from "../assets/simpleLoader.svg";

export const AUTOR = "Camilo Garzón";

/* Navigation */
export const ROOT = "/";
export const HOME = "/home";
export const CURRENCY = "/currency";
export const EXCHANGE = "/exchange";
export const ERROR_PAGE = "/error";

/* Inputs */
export const SEARCHER = "searcher";
export const SEARCHER_PLACEHOLDER = "Busca una criptomoneda";

/* DataTable */
export const TEXT_PAGE = "Filas por página";
export const TEXT_PAGE_SEPARATOR = "de";
export const LIMIT_ROWS = 100;

/* Contenidos */
export const T_CRYPTOMINES = "Criptomonedas";
export const T_RANK = "#";
export const T_RANKING = "Ranking";
export const T_NAME = "Nombre";
export const T_PERCENT_CHANGE = "Porc de cambio";
export const T_MARKETS_ACT = "Mercados activos";
export const T_PRICE = "Precio (USD)";
export const T_CHANGE_MCAP = "Cambio de MCap";
export const T_MCAP = "MCap";
export const T_VOLUME_PERCENT_CHANGE = "Porc de cambio volumen";
export const T_PRICE_VOLUME = "Precio Volumen";
export const T_VOLUME = "Volumen";
export const T_VOLUME24 = "Volumen (24h)";
export const T_SUPPLY = "Circulación de moneda";
export const T_PAIRS = "Pares";
export const T_UPDATED = "Actualizado";
export const T_ID = "ID";
export const T_COUNTRY = "País";
export const T_EXCHANGE = "Exchange";
export const T_DOM_BTC = "Dom Bitcoin";
export const T_DOM_ETH = "Dom Ethereum";
export const T_ALL_MARKETS = "Todos los Markets";
export const T_SOCIAL = "Social";
export const T_REDDIT = "Reddit";
export const T_TWITTER = "Twitter";

/* Global Crypto Data */
export const COINS_COUNT: DataGlobal = { name: T_CRYPTOMINES, icon: I_COINS };
export const ACTIVE_MARKETS: DataGlobal = { name: T_MARKETS_ACT, icon: I_SEARCH_LOCATION };
export const AVG_CHANGE: DataGlobal = { name: T_PERCENT_CHANGE, icon: I_PERCENT };
export const MCAP: DataGlobal = { name: T_MCAP, icon: I_DOLLAR_SIGN };
export const MCAP_CHANGE: DataGlobal = { name: T_CHANGE_MCAP, icon: I_PERCENT };
export const BTCD: DataGlobal = { name: T_DOM_BTC, icon: I_WALLET };
export const ETHD: DataGlobal = { name: T_DOM_ETH, icon: I_WALLET };
export const VOLUME: DataGlobal = { name: T_VOLUME, icon: I_DOLLAR_SIGN };
export const VOLUME_CHANGE: DataGlobal = { name: T_VOLUME_PERCENT_CHANGE, icon: I_PERCENT };

/* Estilos por defecto */
export const DEFAULT_STYLES = {
  backgroundColor: 'transparent',
  color: 'rgb(235, 224, 224)'
}

/* Estilos color pill */
export const PILL_PRIMARY: string | any = "#151f35";
export const PILL_SECONDARY: string | any = "#1c2f59";
export const PILL_TERTIARY: string | any = "#494f5c";
export const PILL_FOURTH: string | any = "#7c7c7c";

/* Errors */
export const ERROR_INITIAL = "Ha ocurrido un error";
export const ERROR_EXCHANGE_NOT_FOUND = "Información de Exchange no encontrada";
export const ERROR_CONNECTION = "Error de conexión a internet";
export const ERROR_GOTOHOME = "Ir al inicio";
export const ERROR_404 = "404 Página no encontrada";

/* Image */
export const IMG_SORPRISE_FACE = SorpriseFace;
export const IMG_SAD_FACE = SadFace;
export const IMG_LOADER = Loader;
export const IMG_LOGO = Logo;
