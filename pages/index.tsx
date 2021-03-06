import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'

export default function Home() {
  return (
    <div>
      <Head>
        <title>JJDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, I'm James! 
        </h1>
        <div className={styles.about}>
          <p>
            I am a software engineer, currently in my senior year of college,
            who loves everything about programming and computers! I started
            teaching myself programming in highschool and never looked back.
            I enjoy constantly teaching myself about new technologies, 
            frameworks, and programming languages (I built this website to 
            teach myself about React and Next js!).
          </p>
          <p>
            Other than programming personal projects and teaching myself about 
            new technologies in my free time, I love to read, 
            practice martial arts, and teach myself guitar.
          </p>
        </div>
      </main>
    </div>
  )
}
