const commentMarker = require("mdast-comment-marker");
const visit = require("unist-util-visit");

module.exports = zone;

const { splice } = [];

function zone(node, name, callback) {
  let level;
  let marker;
  let scope;

  visit(node, gather);

  // Gather one dimensional zones.
  function gather(node, index, parent) {
    const info = commentMarker(node);
    const params = info ? info.parameters : null; // NOTE: Add this line
    const match =
      info && info.name === name && info.attributes.match(/(start|end)\b/);
    const type = match && match[0];
    let start;
    let result;

    if (type) {
      if (!scope && type === "start") {
        level = 0;
        marker = node;
        scope = parent;
        marker.params = params; // NOTE: Add this line
      }

      if (scope && parent === scope) {
        if (type === "start") {
          level++;
        } else {
          level--;
        }

        if (type === "end" && !level) {
          start = scope.children.indexOf(marker);

          result = callback(
            marker,
            scope.children.slice(start + 1, index),
            node,
            { start, end: index, parent }
          );

          if (result) {
            splice.apply(
              scope.children,
              [start, index - start + 1].concat(result)
            );
          }

          marker = undefined;
          scope = undefined;
        }
      }
    }
  }
}
