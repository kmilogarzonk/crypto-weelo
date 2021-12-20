import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeadCurrency from '../../components/headCurrency';
import { CurrencyDataModel, StatsInfoModel } from '../../components/headCurrency/model';
import { LoadingContent } from '../../components/loaders';
import MarketCurrency from '../../components/marketCurrency';
import { MarketCurrencyInfoModel } from '../../components/marketCurrency/model';
import UtilService from '../../services/utils';
import './styles.scss';

/**
 * Componente: Renderiza la pantalla del detalle de una criptomoneda
 * 
 * @remark
 * Este componente hace uso de useNavigate de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
function Currency(): JSX.Element {
  const history = useNavigate();
  const idCurrency = useParams<"id">();
  const [dataCoin, setDataCoin] = useState<CurrencyDataModel | any>({});
  const [marketsCoin, setMarketsCoin] = useState<MarketCurrencyInfoModel | any>({});
  const [statsCoins, setStatsCoins] = useState<StatsInfoModel>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const setDataCoinInfo = async (id: string) => {
      await UtilService.getCurrencyData(id, history)
        .then((res: any) => {
          setDataCoin(res);
        });
    }

    const setDataMarketCoinInfo = async (id: string) => {
      await UtilService.getCurrencyDataMarket(id, history)
        .then((res: any) => {
          setMarketsCoin(res);
        });
    }

    const setDataStatsCoinInfo = async (id: string) => {
      await UtilService.getCurrencyDataStats(id, history)
        .then((res: any) => {
          setStatsCoins(res);
        });
    }

    if (idCurrency.id) {
      setDataCoinInfo(idCurrency.id);
      setDataMarketCoinInfo(idCurrency.id);
      setDataStatsCoinInfo(idCurrency.id);
    }

  }, [idCurrency, history]);

  useEffect(() => {
    if (dataCoin && marketsCoin.length > -1 && statsCoins) {
      setLoading(false);
    }
  }, [dataCoin, marketsCoin, statsCoins]);

  if (loading) {
    return <LoadingContent />
  }

  return (
    <div className='currencyContent'>
      <HeadCurrency data={dataCoin} stats={statsCoins} />
      <MarketCurrency data={marketsCoin} />
    </div>
  );
}

export default Currency;
