import { IDraw } from "../../types/props";

const Draw: React.FC<IDraw> = ({ settings }) => {
  return (
    <>
      <br />
      <br />
      {settings.map((element) => element.value)}
    </>
  );
};

export default Draw;
