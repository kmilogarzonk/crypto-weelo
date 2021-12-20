import { FlipProp, IconProp, RotateProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IconModel {
  css?: string
  icon: IconProp | string | any
  size?: SizeProp | string | any
  fixedWidth?: boolean
  inverse?: boolean
  listItem?: boolean
  spin?: boolean
  pulse?: boolean
  rotation?: RotateProp | number | any
  flip?: FlipProp | string | any
}