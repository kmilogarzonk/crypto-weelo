import React, { useEffect, useState } from "react";
import { DataListModel } from "./model";
import { Text } from "../../elements/typography";
import { Icon } from "../../elements/icons";
import './styles.scss';
import UtilService from "../../services/utils";

/**
 * Componente: Renderiza cada item de la información global
 * 
 * @param props: DataListModel
 *  name: Nombre del item
 *  value: valor del item
 *  icon: icono que usara el item
 *  price?: indica si tiene formato de dinero
 * 
 * @returns Elemento de React
 */
function DataItemList(props: DataListModel): JSX.Element  {
  const { name, value, icon, price } = props;
  const [valueEnd, setvalueEnd] = useState<string>("");

  useEffect(() => {
    if (price) {
      setvalueEnd(UtilService.setFormatCurrency(value));
    } else {
      setvalueEnd(value);
    }
  }, [price, value])

  return (
    <div className="itemList">
      <Icon icon={icon} size="xs"/>
      <Text className="titleItem">{name}:</Text>
      <Text className="valueItem">{valueEnd}</Text>
    </div>
  )
}

export default DataItemList;