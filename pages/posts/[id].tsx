import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import Navigation from '../../components/navigation'

export default function Post({ postData }) {
  return(
    <div>
      <Head>
        <title>JJDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>

      <main>
        <h1>
            {postData.title}
        </h1>
        <div>
            {postData.id}
            <br/>
            {postData.date}
        </div>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}