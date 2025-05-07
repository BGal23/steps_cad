import { IAllDraw } from "../../types/props";

const TopDraw: React.FC<IAllDraw> = ({
  data: {
    // height,
    width,
    // layout,
    // stringerThickness,
    // stepThickness,
    // risers,
    // riserThickness
    stepWidth,
    stepsNumber,
    stepOverlapping,
    stepIssuance,
    stairLength,
    stringerThickness,
  },
}) => {
  const stair = [];
  for (let i = 0; i < stepsNumber; i++) {
    const step = (
      <rect
        key={`step-${Number(i)}`}
        x={stepOverlapping + i * stepWidth - i * stepOverlapping}
        y={0}
        width={stepWidth}
        height={width}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />
    );
    stair.push(step);
  }

  const stringer = (
    <>
      <rect
        key={"stringer-1"}
        x={stepOverlapping * 2}
        y={stepIssuance}
        width={stairLength - stepOverlapping}
        height={stringerThickness}
        fill="none"
        stroke="yellow"
        strokeWidth={1}
      />
      <rect
        key={"stringer-2"}
        x={stepOverlapping * 2}
        y={width - stepIssuance * 2}
        width={stairLength - stepOverlapping}
        height={stringerThickness}
        fill="none"
        stroke="yellow"
        strokeWidth={1}
      />
    </>
  );

  return (
    <>
      {stair}
      {stringer}
    </>
  );
};
export default TopDraw;
