import { useState } from "react";
import Draw from "./components/Draw/Draw";
import Form from "./components/Form/Form";
import { IData, ISettings, TView } from "./types/other";
import settingsArray from "./assets/settings";
import createData from "./logic/createData";
import stairCalc from "./logic/stairCalc";
import settingsCompletion from "./logic/settingsCompletion";
import settingsCompletionArray from "./assets/settingsCalc";

const App = () => {
  const [settings, setSettings] = useState<ISettings[]>(settingsArray);
  const [view, setView] = useState<TView>("top");

  const createdData: IData = createData(settings);
  const calculatedData: IData | null = stairCalc(createdData);
  const restSettings: ISettings[] | null = settingsCompletion(
    settingsCompletionArray,
    calculatedData
  );

  return (
    <>
      <Form
        settings={settings}
        setSettings={setSettings}
        restSettings={restSettings}
      />
      {calculatedData && (
        <Draw data={calculatedData} view={view} setView={setView} />
      )}
    </>
  );
};

export default App;
