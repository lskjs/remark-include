const zone = require("./mdast-zone");

module.exports = ({ getFile } = {}) => {
  if (!getFile) throw "!getFile";
  return function plugin() {
    const remark = this;
    return function (tree) {
      zone(tree, "template", (start, nodes, end) => {
        const { file } = start.params || {};
        if (!file) return [start, ...nodes, end];
        let raw;
        try {
          raw = getFile(file);
        } catch (err) {
          raw = "";
          // eslint-disable-next-line no-console
          console.error("getFile err", err);
        }
        const md = remark.parse(raw);
        return [start, md, end];
      });
    };
  };
};
