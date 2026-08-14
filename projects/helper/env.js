const BOOL_KEYS = [
  'HISTORICAL',
  'LLAMA_DEBUG_MODE',
  'STORE_IN_R2',
  'IS_RUN_FROM_CUSTOM_JOB',
]

const DEFAULTS = {
  EVMOS_MULTICALL_CHUNK_SIZE: "3", // evmos reduced gas limit, this is a workaround to make multicall work
  SEI_BLOCK_LOW: "150023881",
  STARKNET_RPC: 'https://rpc.starknet.lava.build/',
  STARKNET_MULTICALL: '0x01a33330996310a1e3fa1df5b16c1e07f0491fdd20c441126e02613b948f0225',
  SOLANA_RPC: "https://api.mainnet-beta.solana.com",
  SOON_RPC: "https://rpc.mainnet.soo.network/rpc",
  SOON_BASE_RPC: "https://rpc.soonbase.soo.network/rpc",
  SOON_BSC_RPC: "https://rpc.svmbnbmainnet.soo.network/rpc",
  ASTAR_RPC: "https://astar.blockscout.com/api/eth-rpc",
  ECLIPSE_RPC: 'https://mainnetbeta-rpc.eclipse.xyz',
  APTOS_RPC: 'https://fullnode.mainnet.aptoslabs.com',
  SUI_RPC: 'https://sui-rpc.publicnode.com',
  // SUI_GRAPH_RPC: 'https://sui-mainnet.mystenlabs.com/graphql',
  SUI_GRAPH_RPC: 'https://graphql.mainnet.sui.io/graphql',
  MULTIVERSX_RPC: 'https://api.multiversx.com',
  RENEC_RPC: "https://api-mainnet-beta.renec.foundation:8899/",
  FOGO_RPC: 'https://mainnet.fogo.io',
  COOKIECHAIN_RPC: 'https://rpc.cookiescan.io',
  LULO_API_KEY: '',
  TRON_RPC: 'https://api.trongrid.io',
  MOVE_RPC: 'https://mainnet.movementnetwork.xyz',
  SUPRA_RPC: 'https://rpc-mainnet.supra.com',
  IOTA_RPC: "https://api.mainnet.iota.cafe",
  KASPLEX_RPC: 'https://evmrpc.kasplex.org',
  IGRA_RPC: 'https://rpc.igralabs.com:8545',
  MEGAETH_ARCHIVAL_RPC: 'https://megaeth.blockscout.com/api/eth-rpc',
  PEPU_RPC: 'https://pepuscan.com/api/eth-rpc',
  SAGA_RPC: "https://sagaevm.jsonrpc.sagarpc.io",
  BIFROST_P_RPC: "wss://api-bifrost-polkadot.n.dwellir.com/",
  BIFROST_K_RPC: "wss://api-bifrost-kusama.n.dwellir.com/",
  VIRBICOIN_RPC: "https://rpc.digitalregion.jp",
  FUEL_CUSTOM_RPC: 'https://mainnet.fuel.network/v1/graphql',
  KEETA_RPC: "https://rep1.main.network.api.keeta.com/api",
  PROPTECH_RPC: "https://mainnet.ptekcoin.com",
  WHITELISTED_MORPH_RPC: 'https://explorer.morphl2.io/api/eth-rpc',
  BCYPHER_RPC: "https://mainapi.bchscan.io,https://datahub-asia01.bchscan.io,https://datahub-asia02.bchscan.io",
  ROBINHOOD_RPC: 'https://robinhoodchain.blockscout.com/api/eth-rpc',
  ETHEREUMCLASSIC_RPC: 'https://etc.blockscout.com/api/eth-rpc',
  FLARE_ARCHIVAL_RPC: 'https://flare-explorer.flare.network/api/eth-rpc',
}

const ENV_KEYS = [
  ...BOOL_KEYS,
  ...Object.keys(DEFAULTS),
  'ELASTICSEARCH_CONFIG',
  'GETBLOCK_KEY',
  'LOFTY_API',
  'SOLANA_RPC_CLIENT',
  'OLYMPUS_GRAPH_API_KEY',
  'SUMMER_HISTORY_ENDPOINT',
  'SUMMER_AJNA_ENDPOINT',
  'SUMMER_CONFIRMED_VAULTS_ENDPOINT',
  'ETHEREUM_TOKENS_ENDPOINT',
  'FBTC_ACCESS_TOKEN',
  'UNISAT_AUTH',
  'RPC_PROXY_URL',
  'BLACKSAIL_API_KEY',
  'BITCOIN_CACHE_API',
  'DEBANK_API_KEY',
  'SMARDEX_SUBGRAPH_API_KEY',
  'ALLIUM_API_KEY',
  'DUNE_API_KEYS',
  'TON_API_KEY',
  'FLOW_NON_EVM_RPC',
  'PROXY_AUTH',
  'UI_TOOL_MODE',
  'P0_API_KEY',
  'CRYPTOAPIS_API_KEY',
  'TATUM_PUBLIC_API_KEY',
  'TATUM_API_KEY',
  'TEAM_WEBHOOK',
]

Object.keys(DEFAULTS).forEach(i => {
  if (!process.env[i] && DEFAULTS[i] !== undefined) process.env[i] = DEFAULTS[i] // this is done to set the chain RPC details in @defillama/sdk
})

function getEnv(key) {
  if (!ENV_KEYS.includes(key)) throw new Error(`Unknown env key: ${key}`)
  const value = process.env[key] ?? DEFAULTS[key]
  return BOOL_KEYS.includes(key) ? !!value : value
}

module.exports = {
  ENV_KEYS,
  getEnv,
}
