import React, { useEffect, useState } from "react";
import { T_MCAP, T_SUPPLY, T_VOLUME } from "../../config/constants";
import { Pill, SecondTitleSection, Text } from "../../elements/typography";
import { ColorPriority } from "../../elements/typography/model";
import UtilService from "../../services/utils";
import { MarketCoinInfoModel } from "./model";
import './styles.scss';

/**
 * Componente: Renderiza la información de mercadeo de la criptomoneda
 * 
 * @param props: MarketCoinInfoModel
 *  minSupply: Cantidad de circulación de la criptomoneda
 *  maxSupply: Cantidad máxima de circulación de la criptomoneda
 *  mcap: Market Cap de la criptomoneda
 *  volume: Volumen en 24H de la criptomoneda
 *  volumeNative: Volumen inicial de la criptomoneda
 * 
 * @returns Elemento de React
 */
function MarketCoinInfo(props: MarketCoinInfoModel): JSX.Element {
  const { minSupply, maxSupply, mcap, volume, volumeNative } = props;
  const [mcapFormat, setMcapFormat] = useState<string>('');
  const [volumeFormat, setVolumeFormat] = useState<string>('');
  const [volumeNativeFormat, setVolumeNativeFormat] = useState<string>('');
  const [minSupplyFormat, setMinSupplyFormat] = useState<string>('');
  const [maxSupplyFormat, setMaxSupplyFormat] = useState<string>('');

  useEffect(() => {
    setMcapFormat(UtilService.setFormatCurrency(parseInt(mcap)));
    setVolumeFormat(UtilService.setFormatNumber(parseInt(volume)));
    setVolumeNativeFormat(UtilService.setFormatNumber(parseInt(volumeNative)));
    setMinSupplyFormat(UtilService.setFormatNumber(parseInt(minSupply)));
    setMaxSupplyFormat(UtilService.setFormatNumber(parseInt(maxSupply ? maxSupply : minSupply)));
  }, [minSupply, maxSupply, mcap, volume, volumeNative])

  return (
    <div className="dataCoinAditional">
      {mcapFormat && (
        <div className="dataCoin divisorRight">
          <Text className="titlesDataCoin">{T_MCAP}</Text>
          <SecondTitleSection className="ValueDataCoin">{mcapFormat}</SecondTitleSection>
        </div>  
      )}
      {(volumeFormat || volumeNativeFormat) &&  (
        <div className="dataCoin divisorRight">
          {volumeFormat && (
            <div className="boxIntern">
              <div className="textPill">
                <Text className="titlesDataCoin">{T_VOLUME} </Text>
                <Pill priority={ColorPriority.tertiary}>24h</Pill>
              </div>
              <SecondTitleSection className="ValueDataCoin">{volumeFormat}</SecondTitleSection>
            </div>
          )}
          {volumeNativeFormat && (
            <div className="boxIntern">
              <Text className="titlesDataCoin">{T_VOLUME} inicial</Text>
              <SecondTitleSection className="ValueDataCoin">{volumeNativeFormat}</SecondTitleSection>
            </div>
          )}
        </div>        
      )}
      {(minSupplyFormat || maxSupplyFormat) && (
        <div className="dataCoin">
          <div className="formatContinue">
            <Text className="titlesDataCoin">{T_SUPPLY}</Text>
            <SecondTitleSection className="ValueDataCoin">{minSupplyFormat}</SecondTitleSection>
          </div>
          <div className="formatContinue">
            <Text className="titlesDataCoin">Cantidad Max.</Text>
            <SecondTitleSection className="ValueDataCoin">{maxSupplyFormat}</SecondTitleSection>
          </div>
        </div>
      )}
    </div>
  )
}

export default MarketCoinInfo;