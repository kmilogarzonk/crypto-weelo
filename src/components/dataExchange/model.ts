export interface PairsExchangeModel {
  base: string
  price: number
  price_usd: number
  quote: string
  time: number
  volume: number
}

export interface ExchangeModel {
  alexa?: string
  auto?: string
  centralized?: string
  country?: string
  date_added?: string
  date_live?: string
  dex?: string
  fiat?: string
  id: string
  mining?: string
  name: string
  name_id?: string
  pairs?: number
  tr?: number
  udate?: string
  url?: string
  usdt?: string
  volume_usd?: number
  volume_usd_adj?: number
}

export interface ExchangeInfoModel {
  date_live: string
  name: string
  url: string
}

export interface DataExchangeInfoModel {
  info: ExchangeInfoModel
  pairs: PairsExchangeModel[]
}
