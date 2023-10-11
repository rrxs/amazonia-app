import { calculateFastRouteBetweenTwoPoints } from './calculationFunctions';

describe('calculation functions', () => {
  it('calculateFastRouteBetweenTwoPoints should return correct results', () => {
    const mapMock = {
      A: {
        B: 5,
        C: 33,
      },
      B: {
        A: 5,
        C: 1,
        D: 44,
      },
      C: {
        A: 33,
        B: 1,
        D: 4,
      },
      D: {
        B: 44,
        C: 4,
      },
    };

    const result = calculateFastRouteBetweenTwoPoints(mapMock, 'A', 'D');

    expect(result.path).toStrictEqual(['A', 'B', 'C', 'D']);
    expect(result.cost).toBe(10);
  });
});
