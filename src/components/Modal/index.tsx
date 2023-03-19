import { Store } from '@/src/model/store';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Image,
  Link,
  Grid,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface ModalProps {
  item: Store | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomModal({ item, isOpen, onClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody padding={10}>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            gap={5}
          >
            <Image src={item?.image} alt="이미지 없음" />
            <Text fontSize="2xl" fontWeight="bold">
              {item?.name}
            </Text>
            <Text fontSize="md" whiteSpace="pre-line">
              {item?.description}
            </Text>
            {item?.url && (
              <Link href={item?.url} isExternal color="blue.300">
                홈페이지 바로가기 <ExternalLinkIcon mx="2px" />
              </Link>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
