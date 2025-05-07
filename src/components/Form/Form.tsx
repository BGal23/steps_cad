import { IForm } from "../../types/props";
import InputForm from "./InputForm";
import InputFormConst from "./InputFormConst";
import styles from "./styles.module.scss";

const Form: React.FC<IForm> = ({ settings, restSettings, setSettings }) => {
  const handleChange = (id: number, newValue: number | string) => {
    const updatedSettings = settings.map((element) => {
      if (element.id === id) {
        return { ...element, value: newValue };
      }
      return element;
    });
    setSettings(updatedSettings);
  };

  return (
    <>
      <form className={styles.form}>
        {settings.map((element) => (
          <InputForm
            key={element.id}
            element={element}
            settings={settings}
            handleChange={handleChange}
          />
        ))}
        {restSettings.map((element) => (
          <InputFormConst key={element.id} element={element} />
        ))}
      </form>
    </>
  );
};

export default Form;
