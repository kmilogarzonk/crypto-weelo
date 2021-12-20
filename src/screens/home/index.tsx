import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrenciesTable from '../../components/currenciesTable';
import { ExchangeModel } from '../../components/dataExchange/model';
import ExchangesTable from '../../components/exchangesTable';
import { CurrencyInfoModel } from '../../components/headCurrency/model';
import { LoadingContent } from '../../components/loaders';
import { LIMIT_ROWS } from '../../config/constants';
import UtilService from '../../services/utils';
import './styles.scss';

/**
 * Componente: Renderiza la pantalla del del home del sitio
 * 
 * @remark
 * Este componente hace uso de useNavigate de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
function Home(): JSX.Element {
  const history = useNavigate();
  const [dataCurrencies, setDataCurrencies] = useState<CurrencyInfoModel[]>([]);
  const [dataExchanges, setDataExchanges] = useState<ExchangeModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const setDataCurrency = async () => {
      await UtilService.getCurrenciesData(0, LIMIT_ROWS, history)
        .then((res: any) => {
          setDataCurrencies(res.data);
        });
    }

    const setDataExchange = async () => {
      await UtilService.getExchangesData(history)
        .then((res: any) => {
          setDataExchanges(res);
        });
    }

    setDataCurrency();
    setDataExchange();
  }, [history]);

  useEffect(() => {
    if (dataCurrencies.length > 0 && dataExchanges.length > 0) {
      setLoading(false);
    }
  }, [dataCurrencies, dataExchanges]);

  if (loading) {
    return <LoadingContent />
  }

  return (
    <div className="home">
      <CurrenciesTable data={dataCurrencies} />
      <ExchangesTable data={dataExchanges}/>
    </div>
  );
}

export default Home;
