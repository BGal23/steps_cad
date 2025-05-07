import { ISettings } from "../../types/other";
import { IInputForm } from "../../types/props";

const InputForm: React.FC<IInputForm> = ({
  element,
  settings,
  handleChange,
}) => {
  const evaluateIsActive = (element: ISettings, settings: ISettings[]) => {
    if (!element.dependsOn) return element.isActive;
    const dependent = settings.find((e) => e.key === element.dependsOn?.key);
    return dependent?.value === element.dependsOn.value;
  };

  const active = evaluateIsActive(element, settings);

  return (
    <label style={{ opacity: active ? 1 : 0.5 }}>
      <span>{element.name}</span>
      {element.select ? (
        <select
          name={`select-from-${element.name}`}
          value={element.value}
          onChange={(event) => handleChange(element.id, event.target.value)}
          disabled={!active}
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
          readOnly={!active}
          onChange={(event) => {
            const val = event.target.value;
            if (val === "") {
              handleChange(element.id, "");
            } else {
              handleChange(element.id, Number(val));
            }
          }}
        />
      )}
    </label>
  );
};

export default InputForm;
