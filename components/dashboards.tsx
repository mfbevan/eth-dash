import { Flex, chakra, VStack, HStack, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { dashboards, IDashboardTag } from "../constants";
import { DashboardCard } from "./cards";
import { TagSelector } from "./selectors";

export const Dashboards = () => {
  const [selectedTag, setSelectedTag] = useState<IDashboardTag>();

  /**
   * Return only selected dashboards by tag if filtering is enabled,
   * else return all dashboards
   */
  const filteredDashboards = selectedTag
    ? dashboards.filter(({ tags }) =>tags?.includes(selectedTag))
    : dashboards;

  return (
    <VStack pt="20px">
      <TagSelector
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <DashboardContainer>
        {filteredDashboards.map((_dash) => (
          <DashboardCard key={_dash.name} {..._dash} />
        ))}
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
