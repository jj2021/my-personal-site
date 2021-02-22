import Head from 'next/head'
import Home from '.'
import Image from 'next/image'
import Navigation from '../components/navigation'
import styles from '../styles/Home.module.css'

export default function Experience() {
  return(
    <div>
      <Head>
        <title>JJDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My Experience
        </h1>
        <div className={`${styles.experience}`}>
          <Image src='/rack-icon.png' alt='data center rack' width={80} height={80}/>
          <div className={`${styles.exp_descrip}`}>
            <p className={`${styles.exp_title}`}>IBM Research:</p>
            <p>
              During my time as an intern at IBM Research, I had the opportunity to work on a variety of projects: 
            </p>
            <ul>
              <li>Developed a web-based self-service ticketing application using HTML, CSS, PHP, and LDAP technologies</li>
            </ul>
          </div>
        </div>
      </main>
      <div className={styles.projects}>
        <h1 className={styles.title}>Projects Coming Soon...</h1>
      </div>
    </div>
  )
}