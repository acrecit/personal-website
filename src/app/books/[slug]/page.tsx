import { getYamlData } from '@/lib/yaml'
import { notFound } from 'next/navigation'
import BookLayout from '@/layouts/BookLayout'
import { CurrentReading, RecommendedReading } from '@/types/reading'
import { getBookContent } from '@/lib/books'

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

export default async function BookPage({ params }: { params: { slug: string } }) {
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
    >
      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: bookContent.content }} 
      />
    </BookLayout>
  )
} 