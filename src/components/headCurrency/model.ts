export interface StatsInfoModel {
  reddit?: {
    avg_active_users?: number
    subscribers?: number
  }
  twitter?: {
    followers_count?: number
    status_count?: number
  }
}

export interface CurrencyInfoModel {
  csupply?: string
  id: string
  market_cap_usd?: string
  msupply?: string
  name: string
  nameid: string
  percent_change_1h?: string
  percent_change_7d?: string
  percent_change_24h?: string
  price_btc?: string
  price_usd?: string
  rank: number
  symbol: string
  tsupply?: string
  volume24?: string
  volume24_native?: string
}

export interface CurrencyDataModel {
  data: CurrencyInfoModel | any
  stats?: StatsInfoModel
}

