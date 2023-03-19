import { ChakraProvider } from '@chakra-ui/react';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import type { AppProps } from 'next/app';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <ChakraProvider>
      <Header currentPath={currentPath} />
      <Flex as="main">
        <Flex
          as="section"
          direction="column"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Component {...pageProps} />
        </Flex>
      </Flex>
      <Footer />
    </ChakraProvider>
  );
}
