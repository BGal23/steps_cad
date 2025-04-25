import { useState } from "react";
import Draw from "./components/Draw/Draw";
import Form from "./components/Form/Form";
import { ISettings } from "./types/settings";
import settingsArray from "./assets/settings";

const App = () => {
  const [settings, setSettings] = useState<ISettings[]>(settingsArray);
  return (
    <>
      <Form settings={settings} setSettings={setSettings} />
      <Draw settings={settings} />
    </>
  );
};

export default App;
