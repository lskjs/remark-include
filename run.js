const fs = require("fs");
const remark = require("remark");
const createRemarkTemplate = require("./create-remark-template");
const baseGetFile = require("./getFile");

module.exports = async ({ getFile = baseGetFile, from, to } = {}) => {
  const remarkTemplate = createRemarkTemplate({ getFile });
  const md = getFile(from);
  const resultString = await remark().use(remarkTemplate).process(md);
  fs.writeFileSync(to, resultString.toString());
};
