import { IAllDraw } from "../../../types/props";

const StringerTop: React.FC<IAllDraw> = ({
  data: {
    start,
    stepIssuance,
    stairLength,
    width,
    stringerThickness,
    stringerType,
    stepDeep,
    stringerStart,
    stringerStop,
  },
}) => {
  const stringerTypeCalc = (stringerType: "under" | "letIn") => {
    if (stringerType === "under") {
      return { left: stepIssuance, right: width - stepIssuance * 2 };
    } else {
      return {
        left: 0 - stringerThickness + stepDeep,
        right: width - stepDeep,
      };
    }
  };

  const stringers = [
    <rect
      key={"stringer-1"}
      x={start.x - stringerStart}
      y={start.y + stringerTypeCalc(stringerType)?.left}
      width={stairLength + stringerStart + stringerStop}
      height={stringerThickness}
      fill="none"
      stroke="yellow"
      strokeWidth={1}
    />,
    <rect
      key={"stringer-2"}
      x={start.x - stringerStart}
      y={start.y + stringerTypeCalc(stringerType)?.right}
      width={stairLength + stringerStart + stringerStop}
      height={stringerThickness}
      fill="none"
      stroke="yellow"
      strokeWidth={1}
    />,
  ];
  return <>{stringers}</>;
};

export default StringerTop;
