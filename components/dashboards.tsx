import { Wrap, chakra } from "@chakra-ui/react";
import { dashboards } from "../constants";
import { DashboardCard } from "./cards";

export const Dashboards = () => (
  <DashboardContainer spacing="20px">
    {dashboards.map((_dash) => (
      <DashboardCard {..._dash} />
    ))}
  </DashboardContainer>
);

const DashboardContainer = chakra(Wrap, {
  baseStyle: {
    justify: "center",
    p: "20px",
  },
});
