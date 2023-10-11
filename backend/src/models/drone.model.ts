export type CalculateRouteDto = {
  startPoint: string;
  objectPoint: string;
  destinationPoint: string;
};

export type CalculateRouteResultDto = {
  path: string;
  totalSeconds: number;
};
