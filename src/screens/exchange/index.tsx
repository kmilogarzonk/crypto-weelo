import React, { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import DataExchange from '../../components/dataExchange';
import { ExchangeModel, PairsExchangeModel } from '../../components/dataExchange/model';
import { LoadingContent } from '../../components/loaders';
import { ERROR_EXCHANGE_NOT_FOUND } from '../../config/constants';
import UtilService from '../../services/utils';
import './styles.scss';

/**
 * Componente: Renderiza la pantalla del detalle de un Exchange
 * 
 * @remark
 * Este componente hace uso de useNavigate de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
function Exchange(): JSX.Element {
  const history: NavigateFunction = useNavigate();
  const idCurrency = useParams<"id">();
  const [loading, setLoading] = useState<boolean>(true);
  const [dataExchange, setDataExchange] = useState<ExchangeModel | any>({});
  const [dataPairsExchange, setDataPairsExchange] = useState<PairsExchangeModel | any>({});

  useEffect(() => {
    const setDataExchangeInfo = async (id: string) => {
      await UtilService.getExchangeData(id, history)
        .then((res: any) => {
          setLoading(false);
          if (res) {
            const obj = Object.values(res);
            setDataExchange(obj[0]);
            setDataPairsExchange(obj[1]);
          } else {
            const err = ERROR_EXCHANGE_NOT_FOUND;
            UtilService.goToErrorPage(err, history);
          }
        });
    }

    if (idCurrency.id) {
      setDataExchangeInfo(idCurrency.id);
    }

  }, [idCurrency, history]);

  if (loading) {
    return <LoadingContent />
  }

  return (
    <div className='exchangeContent'>
      {(dataExchange && dataPairsExchange) && (
        <DataExchange info={dataExchange} pairs={dataPairsExchange} />
      )}
    </div>
  );
}

export default Exchange;
