import React from 'react';
import { Table } from '../../elements/table';
import { columns } from './data';
import { PairsExchangeComponentModel } from './model';
import './styles.scss';

/**
 * Componente: Renderiza la Datatable de pares de los Exchange
 * 
 * @param props: PairsExchangeComponentModel
 *  pairs: Indica los pares del Exchange
 * 
 * @returns Elemento de React
 */
function ExchangePairs(props: PairsExchangeComponentModel): JSX.Element  {
  const { pairs } = props;
  
  return (
    <div className="pairsExchangesTable">
      {pairs && (
        <Table
          columns={columns}
          data={pairs}
          pagination
        />
      )}
    </div>
  );
}

export default ExchangePairs;
