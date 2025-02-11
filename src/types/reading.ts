export interface Book {
  title: string
  author: string
  progress?: string
  notes?: string
  why?: string
}

export interface CurrentReading extends Array<Book> {}

export interface RecommendedCategory {
  name: string
  books: Book[]
}

export interface RecommendedReading extends Array<RecommendedCategory> {}

export type YamlData = CurrentReading | RecommendedReading 