import { IAllDraw } from "../../types/props";
import SimpleStep from "./Elements/StepTop";
import StringerTop from "./Elements/StringerTop";

const TopDraw: React.FC<IAllDraw> = ({ data }) => {
  return (
    <>
      <SimpleStep data={data} />
      <StringerTop data={data} />
    </>
  );
};
export default TopDraw;
