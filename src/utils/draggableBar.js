// Core function which is used for dragging and moving (tracking)
function draggableBar(draggerId, noColorBarId, colorBarId) {  
  var mouseDownObject;
  let element = document.getElementById(draggerId);
  const noColorBar = document.getElementById(noColorBarId);
  const colorBar = document.getElementById(colorBarId);

  element.onmousedown = onMouseDown;

  function onMouseDown(event) {
    mouseDownObject = {
      event,
      offsetLeft: element.offsetLeft,
      offsetTop: element.offsetTop,
      noColorBarHeight: noColorBar.offsetHeight,
      colorBarHeight: colorBar.offsetHeight
    };

    document.onmousemove = onMouseMove;
    document.onmouseup = () => {
      document.onmousemove = document.onmouseup = null;
    }
  };

  function onMouseMove(event) { // tracking the bar position
    var delta = {
      x: event.clientX - mouseDownObject.event.clientX,
      y: event.clientY - mouseDownObject.event.clientY
    };

    // To avoid negative-sized values
    delta.y = Math.min(Math.max(delta.y, -mouseDownObject.noColorBarHeight),
      mouseDownObject.colorBarHeight);

    element.style.top = mouseDownObject.offsetTop + delta.y + "px";
    noColorBar.style.height = (mouseDownObject.noColorBarHeight + delta.y) + "px";
    colorBar.style.height = (mouseDownObject.colorBarHeight - delta.y) + "px";
  };
};

export default draggableBar;
