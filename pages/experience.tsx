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
          <Image src='/rack-icon.png' alt='data center rack' width={100} height={100}/>
          <div className={`${styles.exp_descrip} ${styles.about}`}>
            <p className={`${styles.exp_title}`}>IBM Research:</p>
            <p className={`${styles.exp_title}`}>January 2019 - Present</p>
            <p>
              During my time as an intern at IBM Research, I had the opportunity to work on a variety of projects: 
            </p>
            <ul>
              <li>
                Developed a web-based, self-service ticketing application 
                allowing users to manage their passwords and user IDs for 
                personal and functional accounts on UNIX systems
                <p>Technologies: HTML, CSS, Javascript, PHP, LDAP</p>
              </li>
              <li>
                Developed a web application for recording and displaying
                historical data of incoming and outgoing hardware, allowing 
                data center administrators to quickly audit the status of
                newly purchased and decommissioned hardware
                <p>Technologies: HTML, CSS, Javascript, Golang, PostgreSQL</p>
              </li>
              <li>
                Designed a system for aggregating various data points about 
                data center operations, setting the stage to create more
                informed automation processes in the data center
                <p>Technologies: Ansible, Elastic stack, Icinga (Nagios), MQTT</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <div className={styles.projects}>
      </div>
    </div>
  )
}