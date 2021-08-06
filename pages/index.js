import Head from 'next/head'
import {
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Input,
  Image,
} from "@chakra-ui/react"
import {
  MdSettingsVoice,
  MdSearch,
} from 'react-icons/md';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Google Index Page Simulate with Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ styles.main }>
        <Image
          w='60%'
          m='80px 0 30px 0'
          src="/google.png"
          alt="google logo"
        />

        <InputGroup
          w="600px"
        >
          <InputLeftElement
            h='50px'
            w='50px'
            children={<MdSearch />}
            rounded='3xl'
            fontSize='130%'
          />
          <Input
            rounded='3xl'
            className={styles.searchbox}
            size="md"
            h='50px'
            placeholder="search something..."
            boxShadow="md"
          />
          <InputRightElement
            h='50px'
            w='50px'
            children={<MdSettingsVoice />}
            rounded='3xl'
            fontSize='130%'
          />
        </InputGroup>

        hello
      </main>

    </div>
  )
}
