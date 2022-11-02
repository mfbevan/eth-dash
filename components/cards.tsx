import {
  Wrap,
  Text,
  chakra,
  useColorModeValue,
  Center,
  Image,
  VStack,
  Box,
} from "@chakra-ui/react";
import { IDashboard } from "../constants";
import { DashboardTag } from "./tags";
import Link from "next/link";

export const DashboardCard = ({ name, image, url, tags }: IDashboard) => (
  <Box p="15px">
    <Link href={url} target="_blank">
      <Card bg={useColorModeValue("white", "gray.800")}>
        <VStack>
          <DashboardImage src={`dashboard-images/${image}`} alt={image} />
          <Title>{name}</Title>
          <Wrap>
            {tags?.map((_tag) => (
              <DashboardTag key={url} tag={_tag} />
            ))}
          </Wrap>
        </VStack>
      </Card>
    </Link>
  </Box>
);

const DashboardImage = chakra(Image, {
  baseStyle: {
    w: "300px",
    h: "150px",
    rounded: "md",
    objectFit: "cover"
  },
});

const Title = chakra(Text, {
  baseStyle: {
    fontSize: "1rem",
  },
});

const Card = chakra(Center, {
  baseStyle: {
    w: "350px",
    h: "250px",
    borderWidth: "1px",
    rounded: "lg",
    shadow: "lg",
  },
});
