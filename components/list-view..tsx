'use client';

import {
  Text,
  chakra,
  useColorModeValue,
  Box,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import { IDashboard } from '../constants';

import { DashboardTag } from './tags';

export const DashboardListItem = ({ name, url, tags }: IDashboard) => (
  <DashboardItemContainer
    bg={useColorModeValue('white', 'gray.700')}
    borderColor={useColorModeValue('gray.200', 'gray.900')}
  >
    <Link href={url} target="_blank">
      <HStack p="10px" w="100%">
        <HStack>
          <Title>{name}</Title>
        </HStack>
        <Spacer />
        {tags?.map((_tag) => (
          <DashboardTag key={_tag} tag={_tag} />
        ))}
        <FiExternalLink />
      </HStack>
    </Link>
  </DashboardItemContainer>
);

const Title = chakra(Text, {
  baseStyle: {
    fontSize: { base: '0.8rem', sm: '1rem' },
  },
});

const DashboardItemContainer = chakra(Box, {
  baseStyle: {
    w: { base: 'sm', sm: 'xl' },
    border: '1px solid',
    rounded: 'md',
    m: '5px',
    shadow: 'md',
  },
});
