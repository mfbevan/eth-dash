export enum DashboardTags {
  General = "Ethereum",
  EcosystemHealth = "Ecosystem Health",
  Staking = "Staking",
  MonetaryPolicy = "Monetary Policy",
  DeFi = "DeFi",
  MEV = "MEV",
  DuneAnalytics = "Dune Analytics",
  NFTs = "NFTs",
}

export interface IDashboard {
  name: string;
  description?: string;
  url: string;
  tags?: DashboardTags[];
}

export const dashboards: IDashboard[] = [
  {
    name: "AlphaDay",
    url: "https://app.alphaday.com/",
    tags: [DashboardTags.General],
  },
  {
    name: "Rotki",
    url: "https://rotki.com/",
    tags: [DashboardTags.General],
  },
  {
    name: "Project Sunshine",
    url: "https://ethsunshine.com",
    tags: [DashboardTags.EcosystemHealth],
  },
  {
    name: "NodeWatch",
    url: "https://nodewatch.io",
    tags: [DashboardTags.EcosystemHealth],
  },
  {
    name: "Miga Labs Crawler",
    url: "https://migalabs.es/crawler/dashboard",
    tags: [DashboardTags.EcosystemHealth],
  },
  {
    name: "Ethereum Nodes Statistics",
    url: "https://ethernodes.org/",
    tags: [DashboardTags.EcosystemHealth],
  },
  {
    name: "Rated.Network",
    url: "https://www.rated.network/?network=mainnet&view=entity",
    tags: [DashboardTags.Staking],
  },
  {
    name: "Client Diversity.org",
    url: "https://clientdiversity.org",
    tags: [DashboardTags.Staking],
  },
  {
    name: "Ethereum Pools.info",
    url: "https://ethereumpools.info/d/ox1NIwf7k/ethereumpools-public?orgId=1&kiosk&refresh=5m",
    tags: [DashboardTags.Staking],
  },
  {
    name: "EthSta.com",
    url: "https://ethsta.com",
    tags: [DashboardTags.Staking],
  },
  {
    name: "Beaconchain",
    url: "https://beaconcha.in",
    tags: [DashboardTags.Staking],
  },
  {
    name: "Rocket Pool",
    url: "https://rocketscan.io",
    tags: [DashboardTags.Staking],
  },
  {
    name: "Hildobby's ETH Staking Deposits",
    url: "https://dune.com/hildobby/ETH2-Deposits",
    tags: [DashboardTags.Staking],
  },
  {
    name: "UltraSound Money",
    url: "https://ultrasound.money/",
    tags: [DashboardTags.MonetaryPolicy],
  },
  {
    name: "Ratio Gang",
    url: "https://ratiogang.com/",
    tags: [DashboardTags.MonetaryPolicy],
  },
  {
    name: "DeFi Llama",
    url: "https://defillama.com/",
    tags: [DashboardTags.DeFi],
  },
  {
    name: "DeFi Toolkit",
    url: "https://hackmd.io/@gweicz/defi-toolkit",
    tags: [DashboardTags.DeFi],
  },
  {
    name: "Flashbots",
    url: "https://transparency.flashbots.net",
    tags: [DashboardTags.MEV],
  },
  {
    name: "MEV Boost",
    url: "https://mevboost.org",
    tags: [DashboardTags.MEV],
  },
  {
    name: "MEV Boost",
    url: "https://mevboost.pics",
    tags: [DashboardTags.MEV],
  },
  {
    name: "MEV Watch",
    url: "https://mevwatch.info",
    tags: [DashboardTags.MEV],
  },
  {
    name: "Eigen Phi",
    url: "https://eigenphi.io",
    tags: [DashboardTags.MEV],
  },
  {
    name: "Chainanalytics MEV",
    url: "https://dune.com/ChainsightAnalytics/mev-after-ethereum-merge",
    tags: [DashboardTags.MEV],
  },
  {
    name: "icy.tools",
    url: "https://icy.tools/",
    tags: [DashboardTags.NFTs],
  },
];
