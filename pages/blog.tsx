import Head from 'next/head'
import styles from '../styles/blog.module.css'
import Navigation from '../components/navigation'
import Date from '../components/date'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export default function Blog({ allPostsData }) {
  return(
    <div>
      <Head>
        <title>JJDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>

      <main className={styles.main}>
        <h1>
          Welcome to the blog!
        </h1>
        <div>
            <ul>
                {allPostsData.map(({ id, data}) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{data.title}</a>
                        </Link>
                        <br/>
                        <small>
                            <Date dateString={data.date} />
                        </small>
                    </li>
                ))}
            </ul>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}