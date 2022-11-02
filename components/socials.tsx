import { HStack, Tooltip, Link } from "@chakra-ui/react";
import { socials } from "../constants";

export const Socials = () => (
  <HStack spacing="30px">
    {socials.map(({ label, link, icon }) => (
      <Tooltip key={label} label={label}>
        <Link href={link} target="_blank">
          {icon}
        </Link>
      </Tooltip>
    ))}
  </HStack>
);
