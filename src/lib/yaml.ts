import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { YamlData } from '@/types/reading'

const dataDirectory = path.join(process.cwd(), 'src/data')

export function getYamlData(filename: string): YamlData {
  const filePath = path.join(dataDirectory, filename)
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return yaml.load(fileContents) as YamlData
  } catch (error) {
    console.error(`Error loading YAML file ${filename}:`, error)
    return []
  }
} 