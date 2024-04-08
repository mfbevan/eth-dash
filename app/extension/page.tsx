'use client';

import { Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

import {
  PageContainer,
  PageTitle,
  PageSubtitle,
  ExtensionContent,
} from '../../components';
import { poppinsBody } from '../../styles/fonts';

export default function Extension() {
  return (
    <PageContainer className={poppinsBody.className}>
      <PageTitle>Eth Dash Extension</PageTitle>
      <PageSubtitle pb="10px">
        Seamlessly access all your favorite Ethereum dashboards in one
        convenient location. Monitor the latest network stats, keep an eye on
        Ethereum staking, and even monitor your favorite wallets, with plenty
        more features coming soon!
      </PageSubtitle>
      <Link
        href="https://chrome.google.com/webstore/detail/eth-dash/fgfcejkmlhdmloeipanhiefnllpgnjfa"
        target="_blank"
      >
        <Text
          textDecoration="underline"
          color={useColorModeValue('teal', 'cyan')}
        >
          Download here
        </Text>
      </Link>
      <ExtensionContent />
    </PageContainer>
  );
}
