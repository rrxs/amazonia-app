export interface DroneCalculationRequest {
  startPoint: string;
  objectPoint: string;
  destinationPoint: string;
}

export interface DroneCalculationResponse {
  path: string;
  totalSeconds: string;
}
