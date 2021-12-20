export interface TableModel {
  columns: any[]
  data: any[]
  pagination?: boolean
  css?: string
}

export interface ItemModel {
  id: number
  name: string
  symbol?: string
}

export interface DataRow {
  title: string;
  director: string;
  year: string;
}
 