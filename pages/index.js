import Head from 'next/head'
import {
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Input,
  Image,
  Stack,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react"
import {
  MdSettingsVoice,
  MdSearch,
  MdAdd,
} from 'react-icons/md';
import styles from '../styles/Home.module.css'

const sanitizeUrl = url => {
  return url.startsWith('https://')
    ? url
    : 'https://' + url;
}

const dummyFn = () => {};
const Tile = ({ url, name, icon, onClick = dummyFn }) => (
  <Flex
    direction='column'
    justifyContent='center'
    alignItems='center'
    as="button"
    height="100px"
    width="100px"
    border="none"
    borderRadius="5px"
    fontSize="14px"
    _hover={{ bg: "#eeeeee" }}
    onClick={ onClick }
  >
    { url &&
      <Image
        height="10"
        width="10"
        src={sanitizeUrl(`${url}/favicon.ico`)}
        alt='tileImage'
      />
    }

    { icon }
    
    <Text p='10px 0 0 0 '>{ name }</Text>
  </Flex>
);

export default function Home() {
  const openModal = () => {
    console.log('!!!');
  }
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

        <Stack
          w='550px'
          direction='row'
          spacing="0"
          flexWrap='wrap'
          paddingTop="20px"
        >
          <Tile url="github.com" name='github' />
          <Tile url="google.com" name='google'/>
          <Tile url="baidu.com" name='baidu'/>
          <Tile url="leetcode-cn.com" name='leetcode'/>
          <Tile url="https://edu.lagou.com" name='拉钩'/>
          <Tile url="developer.mozilla.org" name='MDN'/>
          <Tile url="https://stackoverflow.com" name='stackoverflow'/>
          <Tile url="taobao.com" name='taobao'/>
          <Tile url="qq.com" name='QQ'/>
          <Tile icon={ <MdAdd style={{ width: 40, height: 40}} />} name='add new' onClick={ openModal }/>
        </Stack>
      </main>

    </div>
  )
}
