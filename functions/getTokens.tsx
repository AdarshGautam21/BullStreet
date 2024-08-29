import {ethers, Contract, Provider, JsonRpcSigner} from 'ethers';
import {contracts, abi, lighthouseAPI} from '@/utils/config'
import lighthouse from '@lighthouse-web3/sdk'
import { log } from 'console';

const getTokens = async() =>{
    // const data =[]
    const response = await lighthouse.getUploads(lighthouseAPI);
    // console.log(response);
    
        // if (response.data && response.data.fileList) {
        //   const imageExtensions = [".jpg", ".jpeg", ".png"];
        //   const nonImageFiles = response.data.fileList.filter(file => {
        //     const extension = file.fileName.slice(file.fileName.lastIndexOf('.')).toLowerCase(); // Get the file extension
        //     return imageExtensions.includes(extension); // Filter out files with image extensions
        // });
        // console.log(nonImageFiles);
        console.log(response.data.fileList);
        
        

        return response;
        
          // console.log(response.data.fileList);
          
          
        // } else {
        //   console.error('Invalid response format:', response);
        // }
    
    
}


export default getTokens



