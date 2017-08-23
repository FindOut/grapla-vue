import $ from 'jquery'

// creates and returns a relationship path between two grapla elements, takes two ids as arguments
export default function createRelationshipPath(from, to) {
  // get elements from dom
  var fromElement = $('#grapla-layout .' + from)[0];
  var toElement = $('#grapla-layout .' + to)[0];
  var containerElement = $('#grapla')[0];
  // end function if elements can't be found
  if (!fromElement || !toElement || !containerElement) return;
  // get element attributes relative to document
  fromElement = fromElement.getBoundingClientRect();
  toElement = toElement.getBoundingClientRect();
  containerElement = containerElement.getBoundingClientRect();
  // get scroll values of container
  containerElement.scrollTop = $('#grapla')[0].scrollTop;
  containerElement.scrollLeft = $('#grapla')[0].scrollLeft;
  // store all attributes relative to container
  var rel = {
    fromElement: {
      top: fromElement.top - containerElement.top + containerElement.scrollTop,
      left: fromElement.left - containerElement.left + containerElement.scrollLeft
    },
    toElement: {
      top: toElement.top - containerElement.top + containerElement.scrollTop,
      left: toElement.left - containerElement.left + containerElement.scrollLeft
    }
  };
  // set center x and y, right, and bottom positions
  rel.fromElement.centerX = rel.fromElement.left  + (fromElement.width  / 2);
  rel.fromElement.centerY = rel.fromElement.top   + (fromElement.height / 2);
  rel.fromElement.right   = rel.fromElement.left  + fromElement.width;
  rel.fromElement.bottom  = rel.fromElement.top   + fromElement.height;
  rel.toElement.centerX   = rel.toElement.left    + (toElement.width    / 2);
  rel.toElement.centerY   = rel.toElement.top     + (toElement.height   / 2);
  rel.toElement.right     = rel.toElement.left    + toElement.width;
  rel.toElement.bottom    = rel.toElement.top     + toElement.height;

  // create path from edge to edge, which edge decided by the position of the two elements

  // check positional relationship between the elements
  if (Math.abs(rel.toElement.centerX - rel.fromElement.centerX) > Math.abs(rel.toElement.centerY - rel.fromElement.centerY)) {
    // the to element is primarily to the left or right of the from element

    if(rel.fromElement.centerX < rel.toElement.centerX) {
      // the to element is primarily to the right of the from element

      // create path from the right edge of the from element to the left edge of the to element
      return  "M" + (  rel.fromElement.right                           ) +
              " " + (  rel.fromElement.centerY                         ) +
              "C" + ( (rel.fromElement.right + rel.toElement.left) / 2 ) +
              " " + (  rel.fromElement.centerY                         ) +
              "," + ( (rel.fromElement.right + rel.toElement.left) / 2 ) +
              " " + (  rel.toElement.centerY                           ) +
              "," + (  rel.toElement.left                              ) +
              " " + (  rel.toElement.centerY                           ) ;

    } else {
      // the to element is primarily to the left of the from element

      // create path from the left edge of the from element to the right edge of the to element
      return  "M" + (  rel.fromElement.left                            ) +
              " " + (  rel.fromElement.centerY                         ) +
              "C" + ( (rel.fromElement.left + rel.toElement.right) / 2 ) +
              " " + (  rel.fromElement.centerY                         ) +
              "," + ( (rel.fromElement.left + rel.toElement.right) / 2 ) +
              " " + (  rel.toElement.centerY                           ) +
              "," + (  rel.toElement.right                             ) +
              " " + (  rel.toElement.centerY                           ) ;

    }
  } else {
    // the to element is primarily above or below the from element

    if(rel.fromElement.centerY < rel.toElement.centerY) {
      // the to element is primarily below the from element

      // create path from the bottom edge of the from element to the top edge of the to element
      return  "M" + (  rel.fromElement.centerX                         ) +
              " " + (  rel.fromElement.bottom                          ) +
              "C" + (  rel.fromElement.centerX                         ) +
              " " + ( (rel.fromElement.bottom + rel.toElement.top) / 2 ) +
              "," + (  rel.toElement.centerX                           ) +
              " " + ( (rel.fromElement.bottom + rel.toElement.top) / 2 ) +
              "," + (  rel.toElement.centerX                           ) +
              " " + (  rel.toElement.top                               ) ;

    } else {
      // the to element is primarily above the from element

      // create path from the top edge of the from element to the bottom edge of the to element
      return  "M" + (  rel.fromElement.centerX                         ) +
              " " + (  rel.fromElement.top                             ) +
              "C" + (  rel.fromElement.centerX                         ) +
              " " + ( (rel.fromElement.top + rel.toElement.bottom) / 2 ) +
              "," + (  rel.toElement.centerX                           ) +
              " " + ( (rel.fromElement.top + rel.toElement.bottom) / 2 ) +
              "," + (  rel.toElement.centerX                           ) +
              " " + (  rel.toElement.bottom                            ) ;

    }
  }
}
