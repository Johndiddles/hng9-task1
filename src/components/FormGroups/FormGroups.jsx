import React, { useMemo } from "react";

export const InputGroup = (props) => {
  const {
    id,
    type,
    name,
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    error,
    required,
    inputRef,
  } = props;
  return (
    <div className={`flex flex-col gap-1 items-start w-full`}>
      <label className="text-sm font-medium text-slate-700" htmlFor={name}>
        {name}
      </label>
      <input
        id={id}
        required={required}
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`border border-gray-300 rounded-lg w-full py-2 px-4 placeholder-[#667085] shadow-normal outline-none focus:shadow-focus text-[#101828] ${
          error && "blur:shadow-error"
        }`}
      />
    </div>
  );
};

export const TextAreaGroup = (props) => {
  const {
    id,
    name,
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    error,
    required,
    inputRef,
  } = props;
  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <label className="text-sm font-medium text-slate-700" htmlFor={name}>
        {name}
      </label>
      <textarea
        id={id}
        required={required}
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`h-32 border border-gray-300 rounded-lg w-full py-2 px-4 placeholder-[#667085] shadow-normal outline-none focus:shadow-focus text-[#101828]  ${
          required &&
          value === "" &&
          "focus:border-[#F89687] focus:shadow-error"
        } ${error && "blur:border-[#F89687] border-[#F89687]"}  `}
      />
      <span
        className={`${
          error ? "block text-[#F83F23] text-sm font-medium" : "hidden"
        }`}
      >
        Please enter a message
      </span>
    </div>
  );
};

const FormGroups = (props) => {
  const formGroup = useMemo(() => {
    if (props.groupType === "input") {
      return <InputGroup {...props} />;
    }
    if (props.groupType === "textarea") {
      return <TextAreaGroup {...props} />;
    }
  }, [props]);

  return <>{formGroup}</>;
};

export default FormGroups;
