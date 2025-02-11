import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export async function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Posts directory does not exist:', postsDirectory)
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.markdown'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug: fileName.replace(/\.md$/, '').replace(/\.markdown$/, ''),
        title: data.title,
        date: data.date
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export async function getPostBySlug(slug: string) {
  let fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.markdown`)
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    title: data.title,
    date: data.date
  }
}