import { Box, Text, Flex, UnorderedList, ListItem } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex
      as="footer"
      alignItems="center"
      justifyContent="center"
      px={8}
      py={4}
      width="100%"
    >
      <p>@ 2023 JOSUBIN</p>
    </Flex>
  );
}
