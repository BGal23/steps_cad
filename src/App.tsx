import { useState } from "react";
import Draw from "./components/Draw/Draw";
import Form from "./components/Form/Form";
import { ISettings, TView } from "./types/other";
import settingsArray from "./assets/settings";

const App = () => {
  const [settings, setSettings] = useState<ISettings[]>(settingsArray);
  const [view, setView] = useState<TView>("top");
  return (
    <>
      <Form settings={settings} setSettings={setSettings} />
      <Draw settings={settings} view={view} setView={setView} />
    </>
  );
};

export default App;
