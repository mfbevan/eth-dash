'use client';

import { Flex, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { DarkModeButton } from './dark-mode';
import { PageTitle } from './text';

const navigationItems: { label: string; path: string }[] = [
  {
    label: 'Dashboards',
    path: '/',
  },
  {
    label: 'Extension',
    path: '/extension',
  },
];

export const Navbar = () => (
  <Flex gap="20px" px="20px" pt="20px">
    {navigationItems.map(({ label, path }) => (
      <Link href={path} key={label}>
        <Text>{label}</Text>
      </Link>
    ))}
    <Spacer />
    <DarkModeButton />
  </Flex>
);

{
  /* <AbsoluteButtonContainer>
<DarkModeButton />
</AbsoluteButtonContainer> */
}
