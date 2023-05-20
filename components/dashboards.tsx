import { Flex, chakra, VStack, HStack, Stack } from "@chakra-ui/react";
import { ReactElement, ReactNode, useEffect, useState } from "react";

import { dashboards, IDashboard, IDashboardTag } from "../constants";

import { DashboardCardDetailed } from "./detailed-card";
import { DashboardListItem } from "./list-view.";
import { IDashboardSize, SizeSelector } from "./size-selector";
import { DashboardCard } from "./small-card";
import { TagSelector } from "./tag-selector";

const DashboardComponent = (
  dashboard: IDashboard
): Record<IDashboardSize, ReactElement> => ({
  [IDashboardSize.Small]: <DashboardCard {...dashboard} />,
  [IDashboardSize.Detailed]: <DashboardCardDetailed {...dashboard} />,
  [IDashboardSize.List]: <DashboardListItem {...dashboard} />,
});

export const Dashboards = () => {
  const [selectedTag, setSelectedTag] = useState<IDashboardTag>();
  const [selectedSize, setSelectedSize] = useState<IDashboardSize>(
    IDashboardSize.Small
  );

  /**
   * Return only selected dashboards by tag if filtering is enabled,
   * else return all dashboards
   */
  const filteredDashboards = selectedTag
    ? dashboards.filter(({ tags }) => tags?.includes(selectedTag))
    : dashboards;

  return (
    <VStack pt="20px">
      <Stack direction={{ base: "column", sm: "row" }}>
        <TagSelector
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <SizeSelector
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </Stack>
      <DashboardContainer>
        {filteredDashboards.map((_dash) => {
          const SelectedComponent = () =>
            DashboardComponent(_dash)[selectedSize];
          return <SelectedComponent key={_dash.name} {..._dash} />;
        })}
      </DashboardContainer>
    </VStack>
  );
};

const DashboardContainer = chakra(Flex, {
  baseStyle: {
    flexFlow: "row wrap",
    display: "flex",
    justifyContent: "center",
    justify: "center",
  },
});
