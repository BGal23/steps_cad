import { IAllDraw } from "../../types/props";

const TopDraw: React.FC<IAllDraw> = ({
  data: {
    height,
    width,
    // layout,
    // stringerThickness,
    // stepThickness,
    // risers,
    // riserThickness
  },
}) => {
  return (
    <>
      <rect
        x={0}
        y={0}
        width={height}
        height={width}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />
    </>
  );
};
export default TopDraw;
