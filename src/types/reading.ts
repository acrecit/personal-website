export interface Book {
  title: string
  author: string
  progress?: string
  notes?: string
  why?: string
}

export type CurrentReading = Book[]

export interface RecommendedCategory {
  name: string
  books: Book[]
}

export type RecommendedReading = RecommendedCategory[]

export type YamlData = CurrentReading | RecommendedReading 