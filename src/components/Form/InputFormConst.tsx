import { IInputFormConst } from "../../types/props";

const InputFormConst: React.FC<IInputFormConst> = ({ element }) => {
  return (
    <label>
      <span>
        <i>{element.name}</i>
      </span>
      <input
        style={{ backgroundColor: "pink" }}
        name={`input-from-${element.name}`}
        value={element.value}
        type={element.type}
        readOnly
      />
    </label>
  );
};

export default InputFormConst;
