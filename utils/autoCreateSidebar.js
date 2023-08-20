import fs from "fs";
import path from "path";

function atuoSideBar(articlePath) {
  // 儲存 md 檔案的陣列
  let mdFiles = [];

  // 遍歷資料夾內所有檔案
  fs.readdirSync(articlePath).forEach((filename) => {
    if (filename.endsWith(".md")) {
      mdFiles.push(path.join(articlePath, filename));
    }
  });
  //整理成給config 使用的格式
  const fileNames = mdFiles.map((path) => {
    const parts = path.split("/");
    const fileNameWithExt = parts[parts.length - 1];
    const fileName = fileNameWithExt.split(".")[0];
    return fileName;
  });

  console.log(fileNames);
}

atuoSideBar("../docs/Articles");

export default atuoSideBar;
