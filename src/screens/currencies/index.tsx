import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrenciesTable from '../../components/currenciesTable';
import { CurrencyInfoModel } from '../../components/headCurrency/model';
import { LoadingContent } from '../../components/loaders';
import { LIMIT_ROWS } from '../../config/constants';
import UtilService from '../../services/utils';
import './styles.scss'

/**
 * Componente: Renderiza la pantalla de criptomonedas
 * 
 * @remark
 * Este componente hace uso de useNavigate de la libreria {react-router-dom}
 * 
 * @returns Elemento de React
 */
function Currencies(): JSX.Element {
  const history = useNavigate();
  const [dataCurrencies, setDataCurrencies] = useState<CurrencyInfoModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const setDataCurrency = async () => {
      await UtilService.getCurrenciesData(0, LIMIT_ROWS, history)
        .then((res: any) => {
          console.log(res)
          setDataCurrencies(res.data);
        });
    }

    setDataCurrency();
  }, [history]);

  useEffect(() => {
    if (dataCurrencies.length > 0 ) {
      setLoading(false);
    }
  }, [dataCurrencies]);

  if (loading) {
    return <LoadingContent />
  }
  
  return (
    <div className='currencies'>
      <CurrenciesTable data={dataCurrencies} />
    </div>
  );
}

export default Currencies;
