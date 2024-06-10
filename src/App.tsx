import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setComment,
  setDiscountCode,
  setSelectedOption,
} from "./store/slices/discountSlice";
import TextArea from "./components/TextArea/TextArea";
import InputField from "./components/InputField/InputField";
import RadioButton from "./components/RadioButton/RadioButton";
import {
  selectComment,
  selectDiscountCode,
  selectSelectedOption,
} from "./store/selector";

export default function App() {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const selectedOptionValue = useSelector(selectSelectedOption);
  const discountCode = useSelector(selectDiscountCode);
  const comment = useSelector(selectComment);

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setComment(e.target.value));
  };

  const handleRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(e.target.value));
  };

  const handleInputFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const pattern = /^DISCOUNT[A-Z0-9]{0,5}$/i;

    dispatch(setDiscountCode(value));

    if (pattern.test(value)) {
      setError("");
    } else {
      setError("Invalid code format. Expected format: DISCOUNTXXXXX");
    }
  };

  const handleGenerateCode = () => {
    const newCode = generateDiscountCode();
    setGeneratedCode(newCode);
    setError("");
    setGeneratedCode(newCode);
    dispatch(setDiscountCode(newCode));
  };

  return (
    <div className="p-12">
      <div className="border border-gray-900/10 p-12">
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            Select one item :
          </legend>
          <div className="mt-2 space-y-6">
            {Options.map((option) => (
              <div className="flex items-center gap-x-3" key={option.id}>
                <RadioButton
                  id={option.id}
                  label={option.label}
                  value={option.value}
                  checked={option.value === selectedOptionValue}
                  onChange={handleRadioButtonChange}
                />
              </div>
            ))}
          </div>
        </fieldset>

        <div className="mt-10">
          <InputField
            label={"Enter discount code"}
            value={discountCode}
            onChange={handleInputFieldChange}
            id={"discount_code"}
            placeholder={"DISCOUNTXXXX"}
            error={error}
          />
        </div>

        <div className="mt-10 space-y-4">
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            If you don't have discount code, you can simply generate by clicking
            generate button
          </legend>
          <button
            onClick={handleGenerateCode}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Generate
          </button>
          <p className="mt-2 text-sm text-green-700">{generatedCode}</p>
        </div>

        <div className="mt-10 col-span-full">
          <TextArea
            label={"Comment"}
            id={"comment"}
            value={comment}
            onChange={handleTextAreaChange}
          />
        </div>
      </div>
    </div>
  );
}

const Options = [
  {
    label: "Option 1",
    id: "option_1",
    value: "1",
  },
  {
    label: "Option 2",
    id: "option_2",
    value: "2",
  },
  {
    label: "Option 3",
    id: "option_3",
    value: "3",
  },
];

const generateDiscountCode = (): string => {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `DISCOUNT${randomDigits}`;
};
