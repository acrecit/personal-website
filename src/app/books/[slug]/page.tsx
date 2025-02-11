import { getYamlData } from '@/lib/yaml'
import { notFound } from 'next/navigation'
import BookLayout from '@/layouts/BookLayout'
import { CurrentReading, RecommendedReading } from '@/types/reading'
import { getBookContent } from '@/lib/books'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export async function generateStaticParams() {
  const currentReading = getYamlData('current_reading.yaml') as CurrentReading
  const recommendedReading = getYamlData('recommended_reading.yaml') as RecommendedReading
  
  const allBooks = [
    ...currentReading,
    ...recommendedReading.flatMap(category => category.books)
  ]
  
  return allBooks.map((book) => ({
    slug: book.title.toLowerCase().replace(/\s+/g, '-')
  }))
}

type PageParams = {
  params: Params & {
    slug: string
  }
}

export default async function BookPage({ params }: PageParams) {
  const currentReading = getYamlData('current_reading.yaml') as CurrentReading
  const recommendedReading = getYamlData('recommended_reading.yaml') as RecommendedReading
  
  const allBooks = [
    ...currentReading,
    ...recommendedReading.flatMap(category => category.books)
  ]
  
  const bookData = allBooks.find(
    book => book.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  )
  
  if (!bookData) {
    notFound()
  }

  const bookContent = await getBookContent(params.slug)
  
  if (!bookContent) {
    notFound()
  }

  return (
    <BookLayout
      title={bookData.title}
      author={bookData.author}
      cover={`/books/${params.slug}/cover.jpg`}
    >
      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: bookContent.content }} 
      />
    </BookLayout>
  )
} 