import { type FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputFieldType = {
  label?: string;
  placeholder?: string;
  inputFieldGridColumn?: string;
};

const InputField: FunctionComponent<InputFieldType> = ({
  label,
  placeholder,
  inputFieldGridColumn,
}) => {
  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      gridColumn: inputFieldGridColumn,
    };
  }, [inputFieldGridColumn]);

  return (
    <div className="flex flex-col items-start gap-1.5 w-full" style={inputFieldStyle}>
      <label className="relative tracking-[0.1px] leading-5 font-medium text-sm text-[#212121]">
        {label}
      </label>
      <div className="self-stretch shadow-[1px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-lg bg-[#fafafa] border-[#f3f3f3] border-solid border-[1px] overflow-hidden flex items-center py-2 px-[13px]">
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-5 flex items-center font-body-lg text-sm text-[#868686] placeholder-[#868686]"
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default InputField;
