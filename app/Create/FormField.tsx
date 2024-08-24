import React from "react";

interface FormFieldProps {
  label: string;
  placeholder: string;
  isTextArea?: boolean;
  isFileUpload?: boolean;
  name?: string; // Added for form field name
  value?: string; // Added for input value management
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Added for handling changes
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  isTextArea = false,
  isFileUpload = false,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-5">
      <label className="px-1.5 py-1 font-semibold text-green-400 whitespace-nowrap rounded-md bg-neutral-800">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          className="p-2.5 mt-2 w-full text-sm rounded-lg border border-solid border-neutral-200 text-neutral-700 max-md:pr-5 max-md:max-w-full"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : isFileUpload ? (
        <div className="flex gap-1.5 p-1.5 mt-2 text-sm rounded-lg border border-solid border-neutral-200">
          <input
            type="file" // Corrected type for file upload
            className="px-2 py-1 font-medium whitespace-nowrap rounded-md bg-zinc-300 text-neutral-800"
            name={name}
            onChange={onChange} // Handles file selection
          />
          {/* <span className="flex-auto my-auto text-neutral-700 w-[362px]">
            {value ? value : "No image selected."}
          </span> */}
        </div>
      ) : (
        <input
          type="text"
          className="p-2.5 mt-2 w-full text-sm rounded-lg border border-solid border-neutral-200 text-neutral-700 max-md:pr-5 max-md:max-w-full"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
