import { StatsInfoModel } from "../headCurrency/model";

export interface TopInfoDataCoinModel {
  name: string
  symbol: string
  rank: number
  price: string
  percentChange: string
  stats: StatsInfoModel
}
