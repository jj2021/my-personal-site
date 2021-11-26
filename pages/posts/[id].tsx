import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import Navigation from '../../components/navigation'
import Date from '../../components/date'
import styles from '../../styles/post.module.css'

export default function Post({ postData }) {
  return(
    <div>
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>

      <main className={styles.main}>
        <h1>
            {postData.title}
        </h1>
        <div>
            <h3>{postData.id}</h3>
            <h3><Date dateString={postData.date}/></h3>
        </div>
        <div className={styles.article} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
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
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}