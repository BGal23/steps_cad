import viewsArray from "../../assets/view";
import { IDraw } from "../../types/props";
import { IData, TView } from "../../types/other";
import React from "react";
import TopDraw from "./TopDraw";
import SideDraw from "./SideDraw";
import FrontDraw from "./FrontDraw";
import stairCalc from "../../logic/stairCalc";

const Draw: React.FC<IDraw> = ({ data, view, setView }) => {
  const currentView = (view: TView) => {
    switch (view) {
      case "top":
        return <TopDraw data={data} />;
      case "side":
        return <SideDraw data={data} />;
      case "front":
        return <FrontDraw data={data} />;
      default:
        return <TopDraw data={data} />;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setView(e.target.value as TView);
  };

  const newData: IData | null = stairCalc(data);

  return (
    <>
      <br />
      <form>
        {viewsArray.map((element) => (
          <label key={element.id}>
            <input
              type={element.type}
              name={`input-draw-${element.value}`}
              value={element.value}
              checked={view === element.value}
              onChange={handleChange}
            />
            {element.name}
          </label>
        ))}
      </form>
      <br />
      {newData && (
        <svg
          style={{ zoom: 0.2 }}
          // viewBox={`0 0 ${data.width} ${data.height}`}
          width={4000}
          height={2000}
        >
          {currentView(view)}
        </svg>
      )}
    </>
  );
};

export default Draw;
