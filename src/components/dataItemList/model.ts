import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface DataListModel {
  name: string
  value: number | string | any
  icon: IconDefinition
  price?: boolean
}