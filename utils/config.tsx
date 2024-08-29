import contractABI from '@/public/abi/market.json'
import AssetABI from '@/public/abi/asset.json'
// import { ethers } from 'ethers';

export const contracts = {
    // AssetMarket: '0x62232ef913d62ad18107af9bcf3c76179ec7ef64'
    // AssetMarket: '0x48b81202149734e9fdb03dd13ef0522cc55083e2',
    AssetMarket: '0xE91C8C4c4E852f49e324f4657aF1076736d27ae8'
}

export const abi = {
    AssetMarket: contractABI,
    Asset: AssetABI
}


// export const lighthouseAPI = 'dcac017f.4d581a377ab442719987bd4b194b632f'
export const lighthouseAPI = 'fc52b3cc.5e599aaad1a5498fb06205af7b810de0'