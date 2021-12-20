import React from "react";
import { CurrencyDataModel } from "./model";
import './styles.scss';
import TopInfoCurrency from "../topInfoCurrency";
import MarketCoinInfo from "../marketCoinInfo";
import { TableCard } from "../../elements/card";

/**
 * Componente: Renderiza la información principal de la criptomoneda y sus respectivos Markets
 * 
 * @param props: CurrencyDataModel
 *  data: Información de la criptomoneda
 *  stats: Información estadistica de la criptomoneda
 * 
 * @returns Elemento de React
 */
function HeadCurrency(props: CurrencyDataModel): JSX.Element {
  const { name, symbol, rank, price_usd, percent_change_1h, csupply, msupply, market_cap_usd, volume24, volume24_native } = props.data;
  const { reddit, twitter } = props.stats;

  return (
    <TableCard className="currencyHead">
      <TopInfoCurrency
        name={name}
        symbol={symbol}
        rank={rank}
        price={price_usd}
        percentChange={percent_change_1h}
        stats={{ reddit, twitter }}
      />
      <MarketCoinInfo
        minSupply={csupply}
        maxSupply={msupply}
        mcap={market_cap_usd}
        volume={volume24}
        volumeNative={volume24_native}
      />
    </TableCard>
  )
}

export default HeadCurrency;