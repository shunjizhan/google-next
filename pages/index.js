import { useState } from 'react';
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react"
import {
  MdSettingsVoice,
  MdSearch,
  MdAdd,
} from 'react-icons/md';
import styles from '../styles/Home.module.css'

const AddLinkModal = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleAdd = () => {
    setName('');
    setUrl('');
    onAdd(name, url);
  }

  return (
    <Modal isOpen={ isOpen } onClose={ onClose }>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Shortcut</ModalHeader>
        <ModalBody>
          <Input
            size="md"
            h='40px'
            placeholder="site name"
            m='10px 0'
            value={ name }
            onChange={ e => setName(e.target.value) }
          />
          <Input
            size="md"
            h='40px'
            placeholder="site url"
            m='10px 0'
            value={ url }
            onChange={ e => setUrl(e.target.value) }
          />
          <Button m='20px 5px' onClick={ handleAdd }>OK</Button>
          <Button m='20px 5px' onClick={ onClose }>Cancel</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

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
        src={ sanitizeUrl(`${url}/favicon.ico`) }
        alt='tileImage'
      />
    }

    { icon }
    
    <Text p='10px 0 0 0 '>{ name }</Text>
  </Flex>
);

const initUrls = [
  { url: "github.com", name: 'github' },
  { url: "google.com", name: 'google' },
  { url: "baidu.com", name: 'baidu' },
  { url: "leetcode-cn.com", name: 'leetcode' },
  { url: "https://edu.lagou.com", name: '拉钩' },
  { url: "developer.mozilla.org", name: 'MDN' },
  { url: "https://stackoverflow.com", name: 'stackoverflow' },
  { url: "taobao.com", name: 'taobao' },
  { url: "qq.com", name: 'QQ' },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [allUrl, setAllUrl] = useState(initUrls);

  const handleAddUrl = (name, url) => {
    setAllUrl([...allUrl, { name, url }]);
    setIsOpen(false);
  }

  return (
    <div className={ styles.container }>
      <Head>
        <title>Next Google Page</title>
        <meta name="description" content="Google Index Page Simulate with Nextjs" />
        <link rel="icon" href="https://www.google.com/favicon.ico" />
      </Head>

      <AddLinkModal
        isOpen={ isOpen }
        onClose={ () => setIsOpen(false) }
        onAdd={ handleAddUrl } 
      />

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
            children={<MdSearch />}   // eslint-disable-line
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
            children={<MdSettingsVoice />}    // eslint-disable-line
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
          {
            allUrl.map(({ name, url }) => (<Tile url={ url } name={ name } key={ url }/>))
          }
          
          <Tile
            icon={<MdAdd style={{ width: 40, height: 40 }} />}
            name='Add Shortcut'
            onClick={ () => setIsOpen(true) }
          />
        </Stack>
      </main>

    </div>
  )
}
