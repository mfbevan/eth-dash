export enum IDashboardTag {
  General = "General Ethereum",
  EcosystemHealth = "Ecosystem Health",
  Staking = "Staking",
  MonetaryPolicy = "Monetary Policy",
  DeFi = "DeFi",
  MEV = "MEV",
  DuneAnalytics = "Dune Analytics",
  NFTs = "NFTs",
}

export const TagColor: Record<IDashboardTag, string> = {
  [IDashboardTag.General]: "cyan",
  [IDashboardTag.EcosystemHealth]: "green",
  [IDashboardTag.Staking]: "red",
  [IDashboardTag.MonetaryPolicy]: "yellow",
  [IDashboardTag.DeFi]: "teal",
  [IDashboardTag.MEV]: "blue",
  [IDashboardTag.DuneAnalytics]: "purple",
  [IDashboardTag.NFTs]: "pink",
};

export interface IDashboard {
  name: string;
  description?: string;
  image?: string;
  url: string;
  tags?: IDashboardTag[];
}

export const dashboards: IDashboard[] = [
  {
    name: "AlphaDay",
    description:
      "Alphaday is the ultimate crypto dashboard for staying up to date with all things crypto and interacting with your favorite DApps",
    url: "https://app.alphaday.com/",
    image: "alpha-day.jpg",
    tags: [IDashboardTag.General],
  },
  {
    name: "Rotki",
    description:
      "Rotki is an open source portfolio tracker, accounting and analytics tool that protects your privacy.",
    url: "https://rotki.com/",
    image: "rotki.jpg",
    tags: [IDashboardTag.General],
  },
  {
    name: "Blocknative Mempool Explorer",
    description:
      "Realtime mempool monitoring to visualize, capture, and filter enriched pre-chain event data.",
    url: "https://explorer.blocknative.com",
    image: "blocknative-mempool-explorer.jpg",
    tags: [IDashboardTag.General],
  },
  {
    name: "Project Sunshine",
    description:
      "A dashboard to measure the health of Ethereum's decentralization.",
    url: "https://ethsunshine.com",
    image: "project-sunshine.jpg",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Node Watch",
    description:
      "General Information · Node count · Percentage of network synced · Percentage of network unsynced.",
    url: "https://nodewatch.io",
    image: "node-watch.jpg",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Miga Labs Crawler",
    description:
      "The Armiarma Crawler Dashboard displays the observed client distribution in the Eth2 network in real-time.",
    url: "https://migalabs.es/crawler/dashboard",
    image: "miga-labs.jpg",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Ethereum Nodes Statistics",
    description:
      "Ethereum mainnet statistics & diversity by client, country, sync status, OS, and network type.",
    url: "https://ethernodes.org/",
    image: "ethernodes.jpg",
    tags: [IDashboardTag.EcosystemHealth],
  },
  {
    name: "Rated.Network",
    description:
      "A measure of uptime — how available a validator or entity has been to provide network services.",
    url: "https://www.rated.network/?network=mainnet&view=nodeOperator",
    image: "rated-network.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Client Diversity.org",
    description: "Consensus & Execution layer client distribution.",
    url: "https://clientdiversity.org",
    image: "client-diversity.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Ethereum Pools.info",
    description:
      "We aggragate and monitor Ethereum validators belonging to well known entities (exchanges, companies, pools, operators).",
    url: "https://ethereumpools.info/d/ox1NIwf7k/ethereumpools-public?orgId=1&kiosk&refresh=5m",
    image: "eth-pools.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "EthSta.com",
    description:
      "Ethereum staking pool statistics - validators, deposit balances, validator distribution",
    url: "https://ethsta.com",
    image: "ethsta.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Beaconcha.in",
    description: "Open source Ethereum Beacon Chain explorer",
    url: "https://beaconcha.in",
    image: "beacon-chain.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Rocket Pool Dashboard",
    description: "Rocket Pool Liquid Staking explorer.",
    url: "https://rocketscan.io",
    image: "rocket-scan.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "StakeBoard",
    description:
      "StakeBoard is a beginner-friendly staking dashboard",
    url: "https://app.stakepark.xyz",
    image: "stakeboard.jpg",
    tags: [IDashboardTag.Staking],
  },
  {
    name: "Hildobby's Deposits",
    description:
      "This dashboard tracks ETH sent to the Consensus Layer deposit address.",
    url: "https://dune.com/hildobby/eth2-staking",
    image: "hildobby.jpg",
    tags: [IDashboardTag.Staking, IDashboardTag.DuneAnalytics],
  },
  {
    name: "UltraSound Money",
    description:
      "Ultra sound money is an Ethereum meme focusing on the likely decrease of the ETH supply.",
    url: "https://ultrasound.money/",
    image: "ultra-sound.jpg",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "Ratio Gang",
    description:
      "Ratio Gang assemble! Monitor the progress of Ethereum (ETH) in overtaking Bitcoin (BTC) by market cap.",
    url: "https://ratiogang.com/",
    image: "ratio-gang.jpg",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "Flippening Watch",
    description:
      "“The Flippening” refers to the possible future event when Ethereum overtakes Bitcoin to become the most valuable cryptocurrency in market cap.",
    url: "https://buybitcoinworldwide.com/flippening/",
    image: "flippening-watch.jpg",
    tags: [IDashboardTag.MonetaryPolicy],
  },
  {
    name: "DeFi Llama",
    description:
      "DefiLlama is the largest TVL aggregator for DeFi (Decentralized Finance).",
    url: "https://defillama.com/",
    image: "defi-llama.jpg",
    tags: [IDashboardTag.DeFi],
  },
  {
    name: "DeFi Toolkit",
    description:
      "Curated list of best tools and resources for user of Ethereum (DeFi) ecosystem.",
    url: "https://hackmd.io/@gweicz/defi-toolkit",
    image: "defi-toolkit.jpg",
    tags: [IDashboardTag.DeFi],
  },
  {
    name: "Stablecoins.wtf",
    description:
      "We accumulate quantitative live-data of major stablecoins in a single dashboard. And we aim to make the data understandable by everyone.",
    url: "https://stablecoins.wtf",
    image: "stablecoins-wtf.jpg",
    tags: [IDashboardTag.DeFi],
  },
  {
    name: "Flashbots",
    description:
      "The Flashbots MEV-Boost transparency dashboard is a public dashboard of metrics related to the Flashbots MEV-Boost relay and builder.",
    url: "https://transparency.flashbots.net",
    image: "flashbots.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Boost.org",
    description:
      "Tracking MEV-Boost relays and block builders. A quick hack by Anish. Design inspired by file.app.",
    url: "https://mevboost.org",
    image: "mev-boost.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Boost.pics",
    description:
      "MEV-Boost Dashboard. All charts have an interactive component: you can filter by a certain time frame or hide and show specific relays and builders.",
    url: "https://mevboost.pics",
    image: "mev-boost-pics.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Watch",
    description:
      "Some MEV-Boost relays are regulated under OFAC and will censor certain transactions. Use this tool to observe the effect it's having on Ethereum blocks.",
    url: "https://mevwatch.info",
    image: "mev-watch.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "EigenPhi",
    description:
      "EigenPhi is a full-scale DeFi in-depth data platform for everyday DeFi users, Crypto traders & arbitragers.",
    url: "https://eigenphi.io",
    image: "eigen-phi.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Inclusion Watch",
    description: "Inclusion Watch details daily avg OFAC compliant blocks.",
    url: "https://www.inclusion.watch/",
    image: "inclusion-watch.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "MEV Relays - Uptime Monitor",
    description: "Monitor Ethereum MEV Relay uptime.",
    url: "https://mev-relays.beaconstate.info/",
    image: "mev-beaconstate.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Chainsight Analytics",
    description:
      "This dashboard tracks mev-boost blocks with a known pattern in them, representing blocks created by block-builders",
    url: "https://dune.com/ChainsightAnalytics/mev-after-ethereum-merge",
    image: "chain-analytics.jpg",
    tags: [IDashboardTag.MEV, IDashboardTag.DuneAnalytics],
  },
  {
    name: "Tornado Warnings",
    description:
      "Beware, dangerous tornados sighted at the relays of Manifold and Bloxroute! ⚠️ Some carry innocent money and come completely uncensored!",
    url: "https://tornado-warning.info/",
    image: "tornado-warnings.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "Beaconchain Relays",
    description:
      "Validators can use Relays to outsource their Block Production to entities specialized in extracting extra revenue.",
    url: "https://beaconcha.in/relays",
    image: "beaconchain-relays.jpg",
    tags: [IDashboardTag.MEV],
  },
  {
    name: "icy.tools",
    description:
      "Real-time market insights, more NFT alpha. Use powerful analytics tools to track NFTs across marketplaces and make informed trading decisions.",
    url: "https://icy.tools/",
    image: "icy-tools.jpg",
    tags: [IDashboardTag.NFTs],
  },
  {
    name: "Metrika Relay Monitor",
    description:
      "Relay Monitoring by Metrika to ensure performance and bid validation",
    url: "https://app.metrika.co/dashboard/ethereum/relay-monitor/north-america-east?tr=1d",
    image: "metrika-mev.jpg",
    tags: [IDashboardTag.MEV],
  },
];
