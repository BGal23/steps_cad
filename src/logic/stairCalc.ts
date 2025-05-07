import { IData } from "../types/other";

const stairCalc = (data: IData) => {
  const totalHeight = data.height;
  const minStepHeight = 156;
  const maxStepHeight = 184;
  const targetStepHeight = 170;

  let bestSteps = 0;
  let bestHeight = 0;
  let smallestDiff = Infinity;

  for (let i = 1; i <= 100; i++) {
    const stepHeight = totalHeight / i;

    if (stepHeight >= minStepHeight && stepHeight <= maxStepHeight) {
      const diff = Math.abs(stepHeight - targetStepHeight);

      if (diff < smallestDiff) {
        smallestDiff = diff;
        bestSteps = i;
        bestHeight = stepHeight;
      }
    }
  }

  if (bestSteps > 0) {
    data.stepsNumber = bestSteps;
    data.stepHeight = Number(bestHeight.toFixed(2));
    data.stairLength = Number(
      (
        data.stepWidth * data.stepsNumber -
        data.stepOverlapping * (data.stepsNumber - 1)
      ).toFixed(2)
    );
    return data;
  } else {
    console.warn("Brak możliwego rozwiązania w zakresie 160–180 mm.");
    return null;
  }
};

export default stairCalc;
