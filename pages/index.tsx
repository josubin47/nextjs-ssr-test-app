import List from '@/src/components/List';
import api from '@/src/core/api';
import { Store } from '@/src/model/store';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

interface HomeProps {
  storeList: Store[];
}

export default function Home({ storeList }: HomeProps) {
  return (
    <>
      <Head>
        <title>맛집 리스트</title>
        <meta name="description" content="퍼플아이오 과제 테스트 홈" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="article" margin={10}>
        <List itemList={storeList} />
      </Flex>
    </>
  );
}

export async function getServerSideProps() {
  const response = await api.getStoreList();

  return {
    props: {
      storeList: response,
    },
  };
}
