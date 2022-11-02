import { chakra, Tag } from "@chakra-ui/react";
import { IDashboardTag } from "../constants";

const TagColor: Record<IDashboardTag, string> = {
  [IDashboardTag.General]: "cyan",
  [IDashboardTag.EcosystemHealth]: "green",
  [IDashboardTag.Staking]: "red",
  [IDashboardTag.MonetaryPolicy]: "yellow",
  [IDashboardTag.DeFi]: "teal",
  [IDashboardTag.MEV]: "blue",
  [IDashboardTag.DuneAnalytics]: "purple",
  [IDashboardTag.NFTs]: "pink",
};

export const DashboardTag = ({ tag }: { tag: IDashboardTag }) => (
  <Tag variant="solid" colorScheme={TagColor[tag]}>
    {tag}
  </Tag>
);
