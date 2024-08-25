import contractABI from '@/public/abi/market.json'
import AssetABI from '@/public/abi/asset.json'
// import { ethers } from 'ethers';

export const contracts = {
    // AssetMarket: '0x62232ef913d62ad18107af9bcf3c76179ec7ef64'
    AssetMarket: '0x48b81202149734e9fdb03dd13ef0522cc55083e2'
}

export const abi = {
    AssetMarket: contractABI,
    Asset: AssetABI
}

export const lighthouseAPI = 'dcac017f.4d581a377ab442719987bd4b194b632f'