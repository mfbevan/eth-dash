'use client';

import { chakra, Flex, Text, Image } from '@chakra-ui/react';

export const ExtensionContent = () => (
  <Flex flexDirection="column" gap="20px" pt="20px">
    <StyledContainer>
      <Header>📈 Network Stats(powered by Etherscan)</Header>
      <Body>
        Keep an eye on the latest price and gas stats for Ethereum Mainnet
      </Body>

      <StyledImage
        src="extension-images/network-stats.png"
        alt="Network Stats"
      />
    </StyledContainer>

    <StyledContainer>
      <Header>🔒 Staking & Withdrawals (powered by Beaconcha.in)</Header>
      <Body>
        Check the latest stats on the Beacon Chain, including deposit/withdrawal
        queue, total validator, and total staked ether.
      </Body>
      <StyledImage src="extension-images/staking.png" alt="Network Staking" />
    </StyledContainer>

    <StyledContainer>
      <Header>📚 Ethereum Dashboards (powered by ethdash.xyz)</Header>
      <Body>
        ethdash.xyz is now even closer, with all of your favorite dashboards
        available in a handy chrome extension
      </Body>
      <StyledImage src="extension-images/dashboards.png" alt="Dashboards" />
    </StyledContainer>

    <StyledContainer>
      <Header>📓 Address Book</Header>
      <Body>
        Keep track of all those random wallets and smart contracts that you
        regularly look at. If you hit the `Open` button, you can view them in
        Etherscan, OpenSea, and various Layer 2 explorers. For the developers
        and testnet-ers out there, you can also enabled test networks in the
        settings tab.
      </Body>
      <StyledImage src="extension-images/address-book.png" alt="Address Book" />
    </StyledContainer>
  </Flex>
);

const StyledContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    p: '20px',
    borderRadius: '10px',
    boxShadow: 'base',
    gap: '20px',
    maxW: '2xl',
    mx: '10px',
  },
});

const Header = chakra(Text, {
  baseStyle: {
    fontSize: 'xl',
  },
});

const Body = chakra(Text, {
  baseStyle: {
    fontSize: 'md',
  },
});

const StyledImage = chakra(Image, {
  baseStyle: {
    rounded: 'md',
  },
});
