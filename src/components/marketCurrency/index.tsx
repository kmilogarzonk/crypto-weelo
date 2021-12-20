import React from 'react';
import { T_ALL_MARKETS } from '../../config/constants';
import { TableCard } from '../../elements/card';
import { Table } from '../../elements/table';
import { TitleHeadSection } from '../../elements/typography';
import { columns } from './data';
import { MarketCurrencyModel } from './model';
import './styles.scss';

/**
 * Componente: Renderiza en Datatable la información de Markets de la criptomoneda
 * 
 * @param props: MarketCurrencyModel
 *  data: Array de la información de Markets de la criptomoneda
 * 
 * @returns Elemento de React
 */
function MarketCurrency(props: MarketCurrencyModel): JSX.Element {

  const { data } = props;

  return (
    <TableCard className="marketCurrency">
      <TitleHeadSection>{T_ALL_MARKETS}</TitleHeadSection>
      {data && (
        <Table
          columns={columns}
          data={data}
          pagination
        />
      )}
    </TableCard>
  );
}

export default MarketCurrency;
