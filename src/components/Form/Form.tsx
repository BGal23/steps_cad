import { IForm } from "../../types/props";
import styles from "./styles.module.scss";

const Form: React.FC<IForm> = ({ settings, setSettings }) => {
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
    <form className={styles.form}>
      {settings.map(
        (element) =>
          element.isActive && (
            <label key={element.id}>
              <span>{element.name}</span>
              {element.select ? (
                <select
                  name={`select-from-${element.name}`}
                  value={element.value}
                  onChange={(event) =>
                    handleChange(element.id, event.target.value)
                  }
                >
                  {element.options?.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  name={`input-from-${element.name}`}
                  value={element.value}
                  type={element.type}
                  onChange={(event) =>
                    handleChange(element.id, Number(event.target.value))
                  }
                />
              )}
            </label>
          )
      )}
    </form>
  );
};

export default Form;
