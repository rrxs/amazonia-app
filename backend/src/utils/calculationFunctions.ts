// Reference: https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

import { MapOutput } from 'src/models/map.model';

const calculateFastRouteBetweenTwoPoints = (
  map: MapOutput,
  start: string,
  end: string,
) => {
  const distances = {};
  const previous = {};
  let totalCost = 0;
  const unvisited = new Set<string>();

  for (const position in map) {
    distances[position] = position === start ? 0 : Infinity;
    unvisited.add(position);
  }

  while (unvisited.size > 0) {
    let closestPosition: string = null;
    for (const position of unvisited) {
      if (
        !closestPosition ||
        distances[position] < distances[closestPosition]
      ) {
        closestPosition = position;
      }
    }
    if (distances[closestPosition] === Infinity) break;
    if (closestPosition === end) break;

    for (const neighbor in map[closestPosition]) {
      const newDistance =
        distances[closestPosition] + map[closestPosition][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = closestPosition;
      }
    }
    unvisited.delete(closestPosition);
  }

  const path = [];
  let endPosition = end;
  while (endPosition) {
    path.push(endPosition);
    endPosition = previous[endPosition];
  }
  totalCost = distances[path[0]];

  return { path: path.reverse(), cost: totalCost };
};

export { calculateFastRouteBetweenTwoPoints };
