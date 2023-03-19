import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Text, Flex } from '@chakra-ui/react';
import Head from 'next/head';

export default function Custom404() {
  const [count, setCount] = useState<number>(5);
  const router = useRouter();

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (count === 0) {
      router.push('/');
    }
  }, [count, router]);

  return (
    <>
      <Head>
        <title>존재하지 않는 페이지</title>
      </Head>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        margin={10}
        direction="column"
        gap={5}
      >
        <Text fontSize="6xl" fontWeight="extrabold">
          404
        </Text>
        <Text fontSize="3xl" fontWeight="extrabold">
          존재하지 않는 페이지입니다.
        </Text>
        <Text fontSize="lg">{count}초 후 메인 페이지로 이동합니다.</Text>
      </Flex>
    </>
  );
}
