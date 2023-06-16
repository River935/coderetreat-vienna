const struct = {
  coordinateX: 0,
  coordinateY: 0,
};

function getCoordinates(pacman) {
  return [pacman.coordinateX, pacman.coordinateY];
}

function movesRight(pacman) {
  return {
    coordinateX: pacman.coordinateX,
    coordinateY: pacman.coordinateY + 1,
  };
}

function movesUp(pacman) {
  switch (pacman.coordinateX) {
    case 0:
      return {
        coordinateX: pacman.coordinateX,
        coordinateY: pacman.coordinateY,
      };

    default:
      return {
        coordinateX: pacman.coordinateX - 1,
        coordinateY: pacman.coordinateY,
      };
  }
}


module.exports = { getCoordinates, movesRight, movesUp, struct };
