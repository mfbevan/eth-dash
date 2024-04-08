'use client';

import {
  Wrap,
  Text,
  chakra,
  useColorModeValue,
  Center,
  Image,
  VStack,
  Box,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import { IDashboard } from '../constants';

import { DashboardTag } from './tags';

export const DashboardCard = ({ name, image, url, tags }: IDashboard) => (
  <Box p="15px">
    <Link href={url} target="_blank">
      <Card
        bg={useColorModeValue('white', 'gray.700')}
        borderColor={useColorModeValue('gray.100', 'gray.700')}
      >
        <VStack>
          <DashboardImage src={`dashboard-images/${image}`} alt={image} />
          <HStack>
            <Title>{name}</Title> <FiExternalLink />
          </HStack>
          <Wrap>
            {tags?.map((_tag) => (
              <DashboardTag key={_tag} tag={_tag} />
            ))}
          </Wrap>
        </VStack>
      </Card>
    </Link>
  </Box>
);

const DashboardImage = chakra(Image, {
  baseStyle: {
    w: '310px',
    h: '180px',
    rounded: 'md',
    objectFit: 'cover',
  },
});

const Title = chakra(Text, {
  baseStyle: {
    fontSize: '1rem',
  },
});

const Card = chakra(Center, {
  baseStyle: {
    w: '350px',
    h: '280px',
    borderWidth: '1px',
    rounded: 'lg',
    shadow: 'lg',
  },
});
