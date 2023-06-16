function redGhost(pacmanPosition, redGhostPosition) {
    let newPosition = [...redGhostPosition];
    let xDirection = pacmanPosition[0] < newPosition[0] ? -1 : 1;
    let yDirection = pacmanPosition[1] < newPosition[1] ? -1 : 1;

    while (newPosition[0] !== pacmanPosition[0] || newPosition[1] !== pacmanPosition[1]) {
        if (newPosition[0] !== pacmanPosition[0]) {
            newPosition = moveXDirection(xDirection, newPosition);
        }

        if (newPosition[1] !== pacmanPosition[1]) {
            newPosition = moveYDirection(yDirection, newPosition);
        }
    }

    return newPosition;
}

function moveXDirection(xDirection, position) {
    position[0] += xDirection;
    console.log("moveXDirection");
    return position;
}
  
function moveYDirection(yDirection, position) {
    position[1] += yDirection;
    console.log("moveYDirection");
    return position;
}

export { redGhost, moveXDirection, moveYDirection };
