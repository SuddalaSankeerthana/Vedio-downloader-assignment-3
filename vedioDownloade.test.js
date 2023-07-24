const { downloadFile } = require("./vedioDownloade");
const downloadParallel=require("./parallelDownloade");
test("test for full vedio download", async () => {
  const fileUrl = "https://download.samplelib.com/mp4/sample-30s.mp4";
  const fileName = "sample-30s-3.mp4";
  fetch = jest.fn(() =>
    Promise.resolve({ arrayBuffer: () => Promise.resolve() })
  );
  const file = await downloadFile(fileUrl, fileName, 0, 1000000000);
  expect(fetch.mock.calls.length).toEqual(1);
});
test("test for full vedio chunk wise download", async () => {
  const fileUrl = "https://download.samplelib.com/mp4/sample-30s.mp4";
  const fileName = "sample-30s-3.mp4";
  fetch = jest.fn(() =>
    Promise.resolve({ arrayBuffer: () => Promise.resolve() })
  );
  const file = downloadParallel(fileUrl, fileName);
  expect(fetch.mock.calls.length).toEqual(2);
});

