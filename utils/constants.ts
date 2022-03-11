// const ENDPOINT_ETHEREUM = `https://mainnet.infura.io/v3/${process.env.infuraKey}`;
const ENDPOINT_RINKEBY = `https://rinkeby.infura.io/v3/${process.env.infuraKey}`;
const ENDPOINT_POLYGON = 'https://polygon-rpc.com';
const ENDPOINT_MUMBAI = `https://rinkeby.infura.io/v3/${process.env.infuraKey}`;
export const RPC_URL =
  process.env.NODE_ENV === 'production' ? ENDPOINT_RINKEBY : ENDPOINT_MUMBAI;
