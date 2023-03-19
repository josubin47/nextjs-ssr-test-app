import Link from 'next/link';
import { Box, Text, Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import { PATH } from '@/src/utils/constants';

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  return (
    <Box as="header" position="sticky" top={0} width="100%">
      <Flex align="center" justify="space-between" px={8} py={4} bg="gray.100">
        <Link
          href="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <Text fontSize="xl" fontWeight="bold">
            AWESOME FOOD STORE
          </Text>
        </Link>
        <Box as="nav">
          <UnorderedList display="flex" listStyleType="none" m={0} p={0}>
            <ListItem mr={4}>
              <Link
                href={PATH.about}
                style={{
                  textDecoration: 'none',
                  color: currentPath === PATH.about ? 'black' : 'gray',
                  fontWeight: currentPath === PATH.about ? 'bold' : '',
                }}
              >
                ABOUT
              </Link>
            </ListItem>
            <ListItem mr={4}>
              <Link
                href={PATH.store}
                style={{
                  textDecoration: 'none',
                  color: currentPath === PATH.store ? 'black' : 'gray',
                  fontWeight: currentPath === PATH.store ? 'bold' : '',
                }}
              >
                STORE
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
}
