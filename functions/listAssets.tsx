import {ethers, Contract, Provider, JsonRpcSigner} from 'ethers';
import {contracts, abi} from '@/utils/config'
import lighthouse from '@lighthouse-web3/sdk'

const getAllAssets = async() =>{
    // const data =[]
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner(); 
    const AssetMarketContract = new ethers.Contract(contracts.AssetMarket, abi.AssetMarket, provider);
    // const transaction = await AssetMarketContract.getListedAssets();
    // console.log(transaction);
    
    const tx = await AssetMarketContract.getAllAssets()
    console.log(tx)
    
    return tx;
    
}


export default getAllAssets