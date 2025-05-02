import { IAllDraw } from "../../types/props";

const SideDraw: React.FC<IAllDraw> = ({ data }) => {
  return (
    <>
      <rect
        x={0}
        y={0}
        width={data.width}
        height={data.height}
        fill="none"
        stroke="white"
        strokeWidth={1}
      />
    </>
  );
};
export default SideDraw;
