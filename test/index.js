const run = require("../run");

const main = async () => {
  await run({
    from: ".config/templates/index.md",
    to: "test/README.md",
  });
};

main();
