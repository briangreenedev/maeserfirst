import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maeser First Ward ZOOM Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Maeser First Ward ZOOM Links
        </h1>

        <p className={styles.description}>
          Click the link of your choice below to initiate the Zoom meeting
        </p>

        <div className={styles.grid}>
          <a href="https://zoom.us/j/94286403980?pwd=SXVFeTlxVXFJSTNRdjNkRUw0SmpEQT09" className={styles.card}>
            <h3>Worship Service and Fast & Testimony Meeting</h3>
            <p>Link to Worship Service and Fast & Testimony Meeting</p>
          </a>

          <a href="https://zoom.us/j/92704499194?pwd=cDhPckdTci9mR1JMN1FveTJxUnpiQT09" className={styles.card}>
            <h3>Adult Classes & Quorums</h3>
            <p>Link to Adult Sunday School classes, Relief Society, and Elders quorum.</p>
          </a>

          <a
            href="https://zoom.us/j/93180794811?pwd=UlZjMjc2WTR4SW41VUVwOEdqayt1dz09"
            className={styles.card}
          >
            <h3>Youth Classes & Quorums</h3>
            <p>Link to Youth Sunday School classes, Young Women classes, Priests, Teachers, and Deacons quorums.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
