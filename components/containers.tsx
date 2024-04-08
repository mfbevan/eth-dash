'use client';

import { chakra, VStack } from '@chakra-ui/react';

export const PageContainer = chakra(VStack, {
  baseStyle: {
    maxWidth: '8xl',
    mx: 'auto',
    pb: '60px',
  },
});
