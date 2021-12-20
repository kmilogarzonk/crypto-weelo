import React from 'react';
import { T_CRYPTOMINES } from '../../config/constants';
import { TableCard } from '../../elements/card';
import { Table } from '../../elements/table';
import { TitleHeadSection } from '../../elements/typography';
import { CurrencyDataModel } from '../headCurrency/model';
import { columns } from './data';
import './styles.scss';

/**
 * Componente: Renderiza la Datatable de Criptomonedas
 * 
 * @param props: CurrencyDataModel
 *  data: Array de información
 *  stats?: Estadisticas si aplica
 * 
 * @returns Elemento de React
 */
function CurrenciesTable(props: CurrencyDataModel): JSX.Element  {
  const { data } = props;
  
  return (
    <TableCard className="currenciesTable">
      <TitleHeadSection>{T_CRYPTOMINES}</TitleHeadSection>
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

export default CurrenciesTable;
