import { Tag } from "@chakra-ui/react";
import { IDashboardTag, TagColor } from "../constants";

export const DashboardTag = ({ tag }: { tag: IDashboardTag }) => (
  <Tag variant="solid" colorScheme={TagColor[tag]}>
    {tag}
  </Tag>
);
