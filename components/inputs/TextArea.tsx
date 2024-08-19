import React from "react";

interface TextAreaProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <textarea
        rows={5}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400"
      />
    </div>
  );
};

export default TextArea;
