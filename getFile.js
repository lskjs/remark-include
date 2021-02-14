/* eslint-disable import/no-dynamic-require */
const fs = require("fs");
const Handlebars = require("handlebars");

const getFile = (filename, { cwd = process.cwd() } = {}) => {
  let md = fs.readFileSync(filename).toString();
  try {
    const template = Handlebars.compile(md);
    const pack = require(`${cwd}/package.json`);
    const peerDeps = Object.keys(pack.peerDependencies || {}).join(" ");
    const title = (pack.name || "").split("/").reverse()[0] || "";
    // console.log({ title });
    md = template({
      peerDeps,
      title,
      package: pack,
    });
    return md;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`getFile ${filename}`, err);
    return md;
  }
};

module.exports = getFile;
