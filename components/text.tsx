'use client';

import { chakra, Text } from '@chakra-ui/react';

export const PageTitle = chakra(Text, {
  baseStyle: {
    fontSize: '3rem',
    textAlign: 'center',
  },
});

export const PageSubtitle = chakra(Text, {
  baseStyle: {
    fontSize: 'md',
    px: '15px',
    textAlign: 'center',
    maxW: '2xl',
  },
});

/**
 * Add as="span" to inline
 */
export const InlineLink = chakra(Text, {
  baseStyle: {
    textDecor: 'underline',
  },
});
