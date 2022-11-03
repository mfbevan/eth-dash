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
  image?: string;
  url: string;
  tags?: IDashboardTag[];
}

export const dashboards: IDashboard[] = [
  {
    name: "AlphaDay",
    url: "https://app.alphaday.com/",
    image: "alpha-day.jpg",
    tags: [IDashboardTag.General],
  },
  {
    name: "Rotki",
    url: "https://rotki.com/",
    image: "rotki.jpg",
    tags: [IDashboardTag.General],
  },
  {
    name: "Project Sunshine",
    url: "https://ethsunshine.com",
    image: "project-sunshine.jpg",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Node Watch",
    url: "https://nodewatch.io",
    image: "node-watch.jpg",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Miga Labs Crawler",
    url: "https://migalabs.es/crawler/dashboard",
    image: "miga-labs.jpg",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Ethereum Nodes Statistics",
    url: "https://ethernodes.org/",
    image: "ethernodes.jpg",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Rated.Network",
    url: "https://www.rated.network/?network=mainnet&view=entity",
    image: "rated-network.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Client Diversity.org",
    url: "https://clientdiversity.org",
    image: "client-diversity.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Ethereum Pools.info",
    url: "https://ethereumpools.info/d/ox1NIwf7k/ethereumpools-public?orgId=1&kiosk&refresh=5m",
    image: "eth-pools.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "EthSta.com",
    url: "https://ethsta.com",
    image: "ethsta.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Beaconcha.in",
    url: "https://beaconcha.in",
    image: "beacon-chain.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Rocket Pool Dashboard",
    url: "https://rocketscan.io",
    image: "rocket-scan.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Hildobby's ETH Staking Deposits",
    url: "https://dune.com/hildobby/ETH2-Deposits",
    image: "hildobby.jpg",
    tags: [IDashboardTag.Staking, IDashboardTag.DuneAnalytics],
  },
  {
    name: "UltraSound Money",
    url: "https://ultrasound.money/",
    image: "ultra-sound.jpg",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "Ratio Gang",
    url: "https://ratiogang.com/",
    image: "ratio-gang.jpg",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "Flippening Watch",
    url: "https://buybitcoinworldwide.com/flippening/",
    image: "flippening-watch.jpg",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "DeFi Llama",
    url: "https://defillama.com/",
    image: "defi-llama.jpg",
    tags: [IDashboardTag.DeFi],
  },
  {
    name: "DeFi Toolkit",
    url: "https://hackmd.io/@gweicz/defi-toolkit",
    image: "defi-toolkit.jpg",
    tags: [IDashboardTag.DeFi],
  },
  {
    name: "Flashbots",
    url: "https://transparency.flashbots.net",
    image: "flashbots.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Boost.org",
    url: "https://mevboost.org",
    image: "mev-boost.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Boost.pics",
    url: "https://mevboost.pics",
    image: "mev-boost-pics.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Watch",
    url: "https://mevwatch.info",
    image: "mev-watch.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Eigen Phi",
    url: "https://eigenphi.io",
    image: "eigen-phi.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Inclusion Watch",
    url: "https://www.inclusion.watch/",
    image: "inclusion-watch.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Relays - Uptime Monitor",
    url: "https://mev-relays.beaconstate.info/",
    image: "mev-beaconstate.jpg",
  },
  {
    name: "Chainsight Analytics MEV",
    url: "https://dune.com/ChainsightAnalytics/mev-after-ethereum-merge",
    image: "chain-analytics.jpg",
    tags: [IDashboardTag.MEV, IDashboardTag.DuneAnalytics],
  },
  {
    name: "Tornado Warnings",
    url: "https://tornado-warning.info/",
    image: "tornado-warnings.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Beaconchain Relays",
    url: "https://beaconcha.in/relays",
    image: "beaconchain-relays.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "icy.tools",
    url: "https://icy.tools/",
    image: "icy-tools.jpg",
    tags: [IDashboardTag.NFTs],
  },
];
