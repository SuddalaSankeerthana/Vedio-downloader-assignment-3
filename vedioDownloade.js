const { appendFile} =require("fs");
const { resolve } = require("path");
const downloadFile = async (url, filename, startRange, endRange) => {
  const startTime = new Date();
  const response = await fetch(url, {
    headers: { Range: `bits=${startRange}-${endRange}` },
  });
  const buffer = await response.arrayBuffer();
  const uint8Array=new Uint8Array(buffer);
  appendFile(filename, uint8Array,(err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
        const endTime = new Date();
        const timeTaken = endTime - startTime;
     console.log(
            `Time taken: ${timeTaken}ms,${endTime.getSeconds()},${startTime.getSeconds()}`
        );
    }
  });
};
module.exports={
    downloadFile
  }