import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

import { PageContainer } from "../components";
import {
  AbsoluteButtonContainer,
  DarkModeButton,
} from "../components/dark-mode";
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
      <Socials />
      <Dashboards />
      <AbsoluteButtonContainer>
        <DarkModeButton />
      </AbsoluteButtonContainer>
    </PageContainer>
  );
}
