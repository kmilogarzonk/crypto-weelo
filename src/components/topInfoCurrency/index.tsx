import React, { useEffect, useState } from "react";
import { TopInfoDataCoinModel } from "./model";
import { Pill, SecondTitleSection, Text } from "../../elements/typography";
import UtilService from "../../services/utils";
import { ColorPriority } from "../../elements/typography/model";
import { Icon } from "../../elements/icons";
import { I_ARROW_DOWN, I_ARROW_UP } from "../../config/icons";
import './styles.scss';
import { T_RANKING, T_REDDIT, T_SOCIAL, T_TWITTER } from "../../config/constants";

/**
 * Componente: Renderiza la información principal de la criptomoneda
 * 
 * @param props: TopInfoDataCoinModel
 *  name: Requerido | Indica el nombre de la criptomoneda
 *  symbol: Requerido | Indica el symbolo de la criptomoneda
 *  rank: Requerido | Indica el ranking de la criptomoneda
 *  price: Requerido | Indica el precio de la criptomoneda
 *  percentChange: Requerido | Indica el porcentaje de cambio de la criptomoneda
 *  stats: Requerido | Indica algunas estadisticas de la criptomoneda
 * 
 * @returns Elemento de React
 */
function TopInfoCurrency(props: TopInfoDataCoinModel): JSX.Element {
  const { name, symbol, rank, price, percentChange } = props;
  const { reddit, twitter } = props.stats;
  const [percentChange1, setPercentChange1] = useState<number>(0);
  const [priceUSD, setPriceUSD] = useState<string>('');
  const [redditUser, setRedditUser] = useState<string>('');
  const [redditSubscribers, setRedditSubscribers] = useState<string>('');
  const [twitterFollowers, setTwitterFollowers] = useState<string>('');
  const [twitterStatus, setTwitterStatus] = useState<string>('');

  useEffect(() => {
    setPercentChange1(parseFloat(percentChange));
    setPriceUSD(UtilService.setFormatCurrency(parseInt(price)));
    setRedditUser(UtilService.setFormatNumber(reddit && reddit.avg_active_users));
    setRedditSubscribers(UtilService.setFormatNumber(reddit && reddit.subscribers));
    setTwitterFollowers(UtilService.setFormatNumber(twitter && twitter.followers_count));
    setTwitterStatus(UtilService.setFormatNumber(twitter && twitter.status_count));
  }, [percentChange, price, reddit, twitter])

  return (
    <div className="topInfoCoin">
      <div className="nameInfoCoin">
        <div className="name">
          <SecondTitleSection className="nameCoin" >{name}</SecondTitleSection>
          <Pill priority={ColorPriority.secondary}>{symbol}</Pill>
        </div>
        <Pill priority={ColorPriority.tertiary}>{T_RANKING} {rank}</Pill>
        {(reddit || twitter) && (
          <div className="statsCoin">
            <Text className="socialTitleGeneral" >{T_SOCIAL}</Text>
            {(redditUser || redditSubscribers) && (
              <div className="socialCoin">
                <Text className="socialTitle" >{T_REDDIT}</Text>
                {redditUser && (
                  <div className="statInfo">
                    <Text className="statTitle" >Usuarios: <span>{redditUser}</span></Text>
                  </div>
                )}
                {redditSubscribers && (
                  <div className="statInfo">
                    <Text className="statTitle" >Subscriptores: <span>{redditSubscribers}</span></Text>
                  </div>
                )}
              </div>
            )}
            {(twitterFollowers || twitterStatus) && (
              <div className="socialCoin">
                <Text className="socialTitle" >{T_TWITTER}</Text>
                {twitterFollowers && (
                  <div className="statInfo">
                    <Text className="statTitle" >Seguidores: <span>{twitterFollowers}</span></Text>
                  </div>
                )}
                {twitterStatus && (
                  <div className="statInfo">
                    <Text className="statTitle" >Tweets: <span>{twitterStatus}</span></Text>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="priceCoin">
        <Text className="namePriceCoin" >Precio {name} <span>({symbol})</span></Text>
        <div className="priceData">
          <SecondTitleSection className="priceUSDCoin" >{priceUSD}</SecondTitleSection>
          <Pill priority={percentChange1 >= 0 ? ColorPriority.fourth : ColorPriority.primary}>
            <Icon css={"iconPercent"} icon={percentChange1 >= 0 ? I_ARROW_UP : I_ARROW_DOWN} size="xs"/>
            {percentChange} %
          </Pill>
        </div>
      </div>
    </div>
  )
}

export default TopInfoCurrency;
