import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

const booksDirectory = path.join(process.cwd(), 'src/content/books')

export async function getBookContent(slug: string) {
  const fullPath = path.join(booksDirectory, `${slug}.md`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const result = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(content)
      
    return {
      content: result.toString(),
      ...data
    }
  } catch (error) {
    console.error(`Error loading book content for ${slug}:`, error)
    return null
  }
} 