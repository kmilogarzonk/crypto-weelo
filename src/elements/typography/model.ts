import { PILL_FOURTH, PILL_PRIMARY, PILL_SECONDARY, PILL_TERTIARY } from "../../config/constants";

export interface TypographyModel {
  className?: string
  children?: React.ReactNode
}

export interface PillModel {
  className?: string
  children?: React.ReactNode
  priority: ColorPriority | any
}

export enum ColorPriority {
  primary = PILL_PRIMARY,
  secondary = PILL_SECONDARY,
  tertiary = PILL_TERTIARY,
  fourth = PILL_FOURTH
}
