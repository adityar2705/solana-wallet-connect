import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AppBar } from '@/components/AppBar'
import Head from 'next/head'
import { PingButton } from '@/components/PingButton'
import WalletContextProvider from '@/components/WalletContextProvider'

const Home: NextPage = (props) => {

  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet </title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <PingButton/>
        </div>
      </WalletContextProvider>
    </div>
  );
}

export default Home;