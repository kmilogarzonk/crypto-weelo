import React, { useEffect, useState } from "react";
import { I_LINK_EXTERNAL } from "../../config/icons";
import { TableCard } from "../../elements/card";
import { Icon } from "../../elements/icons";
import { LinkExtern } from "../../elements/link";
import { SecondTitleSection, Text } from "../../elements/typography";
import UtilService from "../../services/utils";
import ExchangePairs from "../exchangePairs";
import { DataExchangeInfoModel } from "./model";
import './styles.scss';

/**
 * Componente: Renderiza la información básica del Exchange y sus pares
 * 
 * @param props: DataExchangeInfoModel
 *  info: Información basica del Exchange
 *  pairs: Pares del exchange
 * 
 * @returns Elemento de React
 */

function DataExchange(props: DataExchangeInfoModel): JSX.Element {
  const { info: {name, url, date_live}, pairs } = props;
  const [dateLive, setDateLive] = useState<string>(date_live);

  useEffect(() => {
    setDateLive(UtilService.setFormatDate(date_live));
  }, [date_live])

  return (
    <TableCard className="dataExchange">
      <div className="topInfoExchange">
        <div className="externLink">
          <SecondTitleSection className="nameExchange">{name}</SecondTitleSection>
          <LinkExtern url={url} blank className="external">
            <Icon icon={I_LINK_EXTERNAL} />
          </LinkExtern>
        </div>
        <Text className="dateExchange"><span>Desde: </span>{dateLive}</Text>
      </div>
      {pairs.length > 0 && <ExchangePairs pairs={pairs} />}
    </TableCard>
  )
}

export default DataExchange;