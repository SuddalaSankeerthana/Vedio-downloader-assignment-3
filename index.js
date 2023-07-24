const{ downloadFile }=require("./vedioDownloade");
const fileUrl = "https://download.samplelib.com/mp4/sample-30s.mp4";
const fileName = "sample-30s-3.mp4";
const file=downloadFile(fileUrl, fileName, 0,10000000000);