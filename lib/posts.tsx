import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    var data = matterResult.data
    // Combine the data with the id
    return {
      id,
      data
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ data: a }, { data: b }) => {
    if (a["date"] < b["date"]) {
      return 1
    } else if (a["date"] > b["date"]) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })

}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Get data from md front matter
    const matterResult = matter(fileContents)

    // Render markdown to html
    const proccessedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = proccessedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}
