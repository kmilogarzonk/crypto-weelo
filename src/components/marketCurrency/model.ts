export interface MarketCurrencyInfoModel {
  name: string
  base: string
  quote: string
  price_usd: number
  volume: number
  volume_usd: number
}

export interface MarketCurrencyModel {
  data: MarketCurrencyInfoModel | any
}
