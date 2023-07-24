const { downloadFile } = require("./vedioDownloade");
const downloadParallel = (fileUrl, fileName) => {
  file1 = downloadFile(fileUrl, fileName, 0, 999999);
  file2 = downloadFile(fileUrl, fileName, 1000000, 100000000);
  Promise.all([file1, file2]).then(() => {
    console.log("Parallel downloads completed.");
  });
};
module.exports = downloadParallel;
