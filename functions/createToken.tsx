import {ethers, Contract, Provider, JsonRpcSigner} from 'ethers';
import {contracts, abi} from '@/utils/config'
import { upload } from "@lighthouse-web3/sdk";
import lighthouse from '@lighthouse-web3/sdk'
import { lighthouseAPI } from '@/utils/config';

const CreateToken = async(name: string, img:object) =>{
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const thumbnailOutput = await lighthouse.upload( [img], lighthouseAPI);
    const signer = await provider.getSigner(); 
    console.log(thumbnailOutput);

    // const updatedFileName = form.watch('Title') + " " + thumbnailOutput.data.Hash;
    //   const updatedFile = selectedVideo ? new File([selectedVideo], updatedFileName, { type: selectedVideo.type }) : null;
    //   console.log(updatedFile);
      
    //   setSelectedVideo(updatedFile);


    
    const AssetMarketContract = new ethers.Contract(contracts.AssetMarket, abi.AssetMarket, signer);
    const transaction = await AssetMarketContract.createcontent(name, thumbnailOutput.data.Hash);
    const receipt = await transaction.wait()
    console.log(transaction);
    console.log(receipt);
    return transaction;
    
}


export default CreateToken