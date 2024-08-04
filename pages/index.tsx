import { useColorModeValue, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { ImChrome } from "react-icons/im";

import { PageContainer } from "../components";
import { Dashboards } from "../components/dashboards";
import { Socials } from "../components/socials";
import { InlineLink, PageSubtitle, PageTitle } from "../components/text";
import { poppinsBody } from "../styles/fonts";

export default function Home() {
  return (
    <PageContainer className={poppinsBody.className}>
      <PageTitle>Ethereum Dashboards</PageTitle>
      <PageSubtitle pb="10px">
        All of your favourite Ethereum Dashboards in one place. Thanks to{" "}
        <InlineLink as="span" color={useColorModeValue("teal", "cyan")}>
          <Link href="https://github.com/superphiz/dashboards" target="_blank">
            Superphiz
          </Link>
        </InlineLink>{" "}
        for getting this started!
      </PageSubtitle>
      <Flex gap="20px">
        <Socials />
        <Link href="/extension">
          <Button rightIcon={<ImChrome />}>Eth Dash Extension</Button>
        </Link>
      </Flex>
      <Dashboards />
    </PageContainer>
  );
}
