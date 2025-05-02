import viewsArray from "../../assets/view";
import { IDraw } from "../../types/props";
import { IData, TView } from "../../types/other";
import React from "react";
import TopDraw from "./TopDraw";
import SideDraw from "./SideDraw";
import FrontDraw from "./FrontDraw";

const Draw: React.FC<IDraw> = ({ settings, view, setView }) => {
  const data = settings.reduce((acc, { key, value }) => {
    if (key) {
      acc[key as keyof IData] = value as never;
    }
    return acc;
  }, {} as IData);

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
      <svg viewBox={`0 0 ${data.width} ${data.height}`}>
        {currentView(view)}
      </svg>
    </>
  );
};

export default Draw;
