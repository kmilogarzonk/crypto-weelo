import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExchangeModel } from '../../components/dataExchange/model';
import ExchangesTable from '../../components/exchangesTable';
import { LoadingContent } from '../../components/loaders';
import UtilService from '../../services/utils';
import './styles.scss'

/**
 * Componente: Renderiza la pantalla de los exchanges
 * 
 * @remark
 * Este componente hace uso de useNavigate de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
function Exchanges(): JSX.Element {
  const history = useNavigate();
  const [dataExchanges, setDataExchanges] = useState<ExchangeModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const setDataExchange = async () => {
      await UtilService.getExchangesData(history)
        .then((res: any) => {
          setDataExchanges(res);
        });
    }
  
    setDataExchange();
  }, [history]);

  useEffect(() => {
    if (dataExchanges.length > 0) {
      setLoading(false);
    }
  }, [dataExchanges]);

  if (loading) {
    return <LoadingContent />
  }

  return (
    <div className='exchanges'>
      <ExchangesTable data={dataExchanges} />
    </div>
  );
}

export default Exchanges;
