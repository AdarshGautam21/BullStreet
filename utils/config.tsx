import contractABI from '@/public/abi/market.json'
import AssetABI from '@/public/abi/Asset.json'
// import { ethers } from 'ethers';

export const contracts = {
    AssetMarket: '0x62232ef913d62ad18107af9bcf3c76179ec7ef64'
}

export const abi = {
    AssetMarket: contractABI,
    Asset: AssetABI
}

export const lighthouseAPI = 'dcac017f.4d581a377ab442719987bd4b194b632f'