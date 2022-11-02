export enum IDashboardTag {
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
  tags?: IDashboardTag[];
}

export const dashboards: IDashboard[] = [
  {
    name: "AlphaDay",
    url: "https://app.alphaday.com/",
    tags: [IDashboardTag.General],
  },
  {
    name: "Rotki",
    url: "https://rotki.com/",
    tags: [IDashboardTag.General],
  },
  {
    name: "Project Sunshine",
    url: "https://ethsunshine.com",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Node Watch",
    url: "https://nodewatch.io",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Miga Labs Crawler",
    url: "https://migalabs.es/crawler/dashboard",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Ethereum Nodes Statistics",
    url: "https://ethernodes.org/",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Rated.Network",
    url: "https://www.rated.network/?network=mainnet&view=entity",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Client Diversity.org",
    url: "https://clientdiversity.org",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Ethereum Pools.info",
    url: "https://ethereumpools.info/d/ox1NIwf7k/ethereumpools-public?orgId=1&kiosk&refresh=5m",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "EthSta.com",
    url: "https://ethsta.com",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Beaconchain",
    url: "https://beaconcha.in",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Rocket Pool",
    url: "https://rocketscan.io",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Hildobby's ETH Staking Deposits",
    url: "https://dune.com/hildobby/ETH2-Deposits",
    tags: [IDashboardTag.Staking, IDashboardTag.DuneAnalytics],
  },
  {
    name: "UltraSound Money",
    url: "https://ultrasound.money/",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "Ratio Gang",
    url: "https://ratiogang.com/",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "DeFi Llama",
    url: "https://defillama.com/",
    tags: [IDashboardTag.DeFi],
  },
  {
    name: "DeFi Toolkit",
    url: "https://hackmd.io/@gweicz/defi-toolkit",
    tags: [IDashboardTag.DeFi],
  },
  {
    name: "Flashbots",
    url: "https://transparency.flashbots.net",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Boost",
    url: "https://mevboost.org",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Boost",
    url: "https://mevboost.pics",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Watch",
    url: "https://mevwatch.info",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Eigen Phi",
    url: "https://eigenphi.io",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Chainanalytics MEV",
    url: "https://dune.com/ChainsightAnalytics/mev-after-ethereum-merge",
    tags: [IDashboardTag.MEV, IDashboardTag.DuneAnalytics],
  },
  {
    name: "icy.tools",
    url: "https://icy.tools/",
    tags: [IDashboardTag.NFTs],
  },
];
