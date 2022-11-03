import { Flex, chakra, VStack, HStack } from "@chakra-ui/react";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { dashboards, IDashboard, IDashboardTag } from "../constants";
import { DashboardCard } from "./small-card";
import { TagSelector } from "./tag-selector";
import { DashboardCardDetailed } from "./detailed-card";
import { IDashboardSize, SizeSelector } from "./size-selector";

const DashboardComponent = (
  dashboard: IDashboard
): Record<IDashboardSize, ReactElement> => ({
  [IDashboardSize.Small]: <DashboardCard {...dashboard} />,
  [IDashboardSize.Detailed]: <DashboardCardDetailed {...dashboard} />,
  [IDashboardSize.List]: <DashboardCard {...dashboard} />,
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

  useEffect(() => {
    console.log(selectedSize);
  }, [selectedSize]);
  return (
    <VStack pt="20px">
      <HStack>
        <TagSelector
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <SizeSelector
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </HStack>
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
