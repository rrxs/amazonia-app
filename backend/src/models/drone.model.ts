import { Length, Matches } from 'class-validator';

export class CalculateRouteDto {
  @Matches('[A-H][1-8]')
  @Length(2, 2, {
    message: 'startPoint must be equal to 2 characters',
  })
  startPoint: string;

  @Matches('[A-H][1-8]')
  @Length(2, 2, {
    message: 'objectPoint must be equal to 2 characters',
  })
  objectPoint: string;

  @Matches('[A-H][1-8]')
  @Length(2, 2, {
    message: 'destinationPoint must be equal to 2 characters',
  })
  destinationPoint: string;
}

export class CalculateRouteResultDto {
  path: string;
  totalSeconds: string;
}
