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
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Worship Service and Fast & Testimony Meeting</h3>
            <p>Link to Worship Service and Fast & Testimony Meeting</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Adult Classes & Quorums</h3>
            <p>Link to Adult Sunday School classes, Relief Society, and Elders quorum.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
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
