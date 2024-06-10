type RadioButtonProps = {
  id: string;
  label: string;
  checked: boolean;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({
  id,
  label,
  checked,
  value,
  onChange,
}: RadioButtonProps) => {
  return (
    <>
      <input
        id={id}
        value={value}
        checked={checked}
        type="radio"
        onChange={onChange}
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
    </>
  );
};

export default RadioButton;
