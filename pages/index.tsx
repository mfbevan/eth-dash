import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  useColorModeValue,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  CloseButton,
  ModalCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { ImChrome } from "react-icons/im";

import { PageContainer } from "../components";
import { Dashboards } from "../components/dashboards";
import { Socials } from "../components/socials";
import { InlineLink, PageSubtitle, PageTitle } from "../components/text";
import { poppinsBody } from "../styles/fonts";

export default function Home() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
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

      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>We have moved!</ModalHeader>
          <ModalBody>
            <Flex flexDirection="column" alignItems="center" gap={2} pb={4}>
              We&apos;ve got a new look! ethdash.xyz has been merged with
              explorer.nexeth.xyz. You can now find all of your favourite
              Ethereum Dashboards in one place, along with the new Nexeth
              Explorer.
              <Link href="https://explorer.nexeth.xyz/dashboards">
                <Button rightIcon={<ExternalLinkIcon />}>
                  Visit Nexeth Explorer
                </Button>
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </PageContainer>
  );
}
