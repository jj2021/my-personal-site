import Head from 'next/head'
import Navigation from '../components/navigation'

export default function Blog() {
  return(
    <div>
      <Head>
        <title>JJDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>

      <main>
        <h1>
          Welcome to the blog!
        </h1>
        <div>
        </div>
      </main>
    </div>
  )
}