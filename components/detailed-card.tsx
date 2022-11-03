import {
  Wrap,
  Text,
  chakra,
  useColorModeValue,
  Center,
  Image,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";
import { IDashboard } from "../constants";
import { DashboardTag } from "./tags";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export const DashboardCardDetailed = ({
  name,
  image,
  url,
  tags,
  description
}: IDashboard) => (
  <Box p="15px">
    <Link href={url} target="_blank">
      <Card
        bg={useColorModeValue("white", "gray.700")}
        borderColor={useColorModeValue("gray.100", "gray.700")}
      >
        <VStack>
          <DashboardImage src={`dashboard-images/${image}`} alt={image} />
          <VStack>
          <HStack>
            <Title>{name}</Title> <FiExternalLink />
          </HStack>
            <Description>{description ?? ""}</Description>
            </VStack>
          <Wrap>
            {tags?.map((_tag) => (
              <DashboardTag key={_tag} tag={_tag} />
            ))}
          </Wrap>
        </VStack>
      </Card>
    </Link>
  </Box>
);

const DashboardImage = chakra(Image, {
  baseStyle: {
    w: "310px",
    h: "180px",
    rounded: "md",
    objectFit: "cover",
  },
});

const Title = chakra(Text, {
  baseStyle: {
    fontSize: "1rem",
    fontWeight: 600
  },
});

const Description = chakra(Text, {
  baseStyle: {
    fontSize: "1rem",
    px: "10px",
    textAlign: "center",
    h: { base: "100px", sm: "70px"}
  },
});

const Card = chakra(Center, {
  baseStyle: {
    w: { base: "350px", sm: "450px" },
    h: {base: "390px", sm: "370px"},
    borderWidth: "1px",
    rounded: "lg",
    shadow: "lg",
  },
});
