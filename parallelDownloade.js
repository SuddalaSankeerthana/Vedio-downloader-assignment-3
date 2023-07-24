const {downloadFile}=require("./vedioDownloade")
const downloadParallel = (fileUrl,fileName) => {
    Promise.all([downloadFile(fileUrl, fileName,0,999999),downloadFile(fileUrl, fileName,1000000,100000000)]).then(()=>{
   console.log('Parallel downloads completed.')});
  };
module.exports=downloadParallel;