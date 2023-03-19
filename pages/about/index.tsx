import {
  Text,
  Flex,
  UnorderedList,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>프로젝트 설명</title>
      </Head>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        margin={10}
        direction="column"
        gap={5}
      >
        <Text fontSize="3xl" fontWeight="extrabold">
          1. 프로젝트 소개
        </Text>
        <Text fontSize="lg" whiteSpace="pre-line">
          {`맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 팝업으로 상세 설명을 보여줍니다.
          메뉴를 클릭하면 페이지 이동이 가능합니다.`}
        </Text>
        <Text fontSize="3xl" fontWeight="extrabold">
          2. 사용 기술
        </Text>
        <UnorderedList>
          <ListItem>React</ListItem>
          <ListItem>Next.js</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>Chakra UI</ListItem>
        </UnorderedList>
      </Flex>
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
