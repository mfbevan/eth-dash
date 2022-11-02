import { Flex, chakra } from "@chakra-ui/react";
import { dashboards } from "../constants";
import { DashboardCard } from "./cards";

export const Dashboards = () => (
  <DashboardContainer>
    {dashboards.map((_dash) => (
      <DashboardCard key={_dash.name} {..._dash} />
    ))}
  </DashboardContainer>
);

const DashboardContainer = chakra(Flex, {
  baseStyle: {
    flexFlow: "row wrap",
    display: "flex",
    justifyContent: "center",
    justify: "center",
  },
});
