import Link from "next/link";

import { PageContainer } from "../components";
import { Dashboards } from "../components/dashboards";
import { InlineLink, PageSubtitle, PageTitle } from "../components/text";
import { poppinsBody } from "../styles/fonts";

export default function Home() {
  return (
    <PageContainer className={poppinsBody.className}>
      <PageTitle>Ethereum Dashboards</PageTitle>
      <PageSubtitle pb="20px">
        All of your favourite Ethereum Dashboards in one place. Thanks to{" "}
        <InlineLink as="span">
          <Link href="https://github.com/superphiz/dashboards" target="_blank">
            Superphiz
          </Link>
        </InlineLink>{" "}
        for getting this started!
      </PageSubtitle>
      <Dashboards />
    </PageContainer>
  );
}

