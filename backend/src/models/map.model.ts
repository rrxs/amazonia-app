interface IPositions {
  [position: string]: number;
}

export interface MapOutput {
  [position: string]: IPositions;
}
