import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Image, Button } from '@chakra-ui/react';
import { Store } from '@/src/model/store';
import CustomModal from '../Modal';
import api from '@/src/core/api';

interface ListProps {
  itemList: Store[];
}

export default function List({ itemList }: ListProps) {
  const [selectedItem, setSelectedItem] = useState<Store | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleClick = async (id: number) => {
    const response = await api.getStore(id);
    setSelectedItem(response);
    handleModalOpen();
  };

  useEffect(() => {
    !open && setSelectedItem(null);
  }, [open]);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      {itemList &&
        itemList.map(item => (
          <GridItem key={item.id} w="200px" h="200px">
            <Image
              src={item.thumb}
              alt="이미지 없음"
              onClick={e => {
                handleClick(item.id);
              }}
              cursor="pointer"
            />
          </GridItem>
        ))}
      <CustomModal
        isOpen={open}
        item={selectedItem}
        onClose={handleModalClose}
      />
    </Grid>
  );
}
