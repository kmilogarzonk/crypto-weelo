import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { COINS_COUNT, ACTIVE_MARKETS, AVG_CHANGE, MCAP, MCAP_CHANGE, BTCD, ETHD, VOLUME, VOLUME_CHANGE } from '../../config/constants';
import UtilService from '../../services/utils';
import CarouselInfinity from '../carousel';
import DataItemList from '../dataItemList';
import './styles.scss';

/**
 * Componente: Renderiza los datos globales en la animación de derecha a izquierda
 * 
 * @remark
 * Este componente contiene useNavigate de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
function GeneralInfo(): JSX.Element {
  const history = useNavigate();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const setDataInfoGeneral = async () => {
      await UtilService.getDataGeneral(history)
        .then((res) => {
          setInfo(res);
        });
    }

    setDataInfoGeneral();
  }, [history])

  return (
    <div className="topInfo">
      {info && (
        <CarouselInfinity>
          {info.coins_count && <DataItemList name={COINS_COUNT.name} value={info.coins_count} icon={COINS_COUNT.icon} />}
          {info.active_markets && <DataItemList name={ACTIVE_MARKETS.name} value={info.active_markets} icon={ACTIVE_MARKETS.icon} />}
          {info.avg_change_percent && <DataItemList name={AVG_CHANGE.name} value={info.avg_change_percent} icon={AVG_CHANGE.icon} />}
          {info.mcap_ath && <DataItemList name={MCAP.name} value={info.mcap_ath} icon={MCAP.icon} price />}
          {info.mcap_change && <DataItemList name={MCAP_CHANGE.name} value={info.mcap_change} icon={MCAP_CHANGE.icon} />}
          {info.volume_ath && <DataItemList name={VOLUME.name} value={info.volume_ath} icon={VOLUME.icon} price />}
          {info.volume_change && <DataItemList name={VOLUME_CHANGE.name} value={info.volume_change} icon={VOLUME_CHANGE.icon} />}
          {info.btc_d && <DataItemList name={BTCD.name} value={info.btc_d} icon={BTCD.icon} />}
          {info.eth_d && <DataItemList name={ETHD.name} value={info.eth_d} icon={ETHD.icon} />}
        </CarouselInfinity>
      )}
    </div>
  );
}

export default GeneralInfo;
