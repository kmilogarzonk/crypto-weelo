import React from 'react';
import { T_EXCHANGE } from '../../config/constants';
import { TableCard } from '../../elements/card';
import { Table } from '../../elements/table';
import { TitleHeadSection } from '../../elements/typography';
import { columns } from './data';
import { ExchangeTableModel } from './model';
import './styles.scss';

/**
 * Componente: Renderiza la Datatable de los Exchange
 * 
 * @param props: PairsExchangeComponentModel
 *  data: Indica los Exchange
 * 
 * @returns Elemento de React
 */
function ExchangesTable(props: ExchangeTableModel): JSX.Element {
  const { data } = props;
  
  return (
    <TableCard className="exchangesTable">
      <TitleHeadSection>{T_EXCHANGE}</TitleHeadSection>
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

export default ExchangesTable;
