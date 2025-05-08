import { IAllDraw } from "../../../types/props";

const SimpleStep: React.FC<IAllDraw> = ({
  data: { start, stepOverlapping, stepsNumber, stepWidth, width },
}) => {
  const steps = [];
  for (let i = 0; i < stepsNumber; i++) {
    const step = (
      <rect
        key={`step-${Number(i)}`}
        x={start.x + i * stepWidth - i * stepOverlapping}
        y={start.y}
        width={stepWidth}
        height={width}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />
    );
    steps.push(step);
  }
  return <>{steps}</>;
};

export default SimpleStep;
