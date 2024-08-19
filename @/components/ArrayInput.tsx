import { ChangeEvent, FC, useState } from "react";
import { Input } from "./ui/input";

function hasOnlyDigits(value: string) {
  // This regex checks for an optional single or double quote at the beginning,
  // followed by one or more digits, and ends with an optional single or double
  // quote that matches the opening quote.
  return /^["']?\d+["']?$/.test(value);
}

type ArrayInputProps = {
  value: string;
  readOnly: boolean;
  onChange: (value: string) => void;
  onArrayChange: (array: (string | number)[]) => void;
};

export const ArrayInput: FC<ArrayInputProps> = ({
  value,
  readOnly,
  onChange,
  onArrayChange,
}): JSX.Element => {
  const tryParseInt = (value: string) => {
    const trimmed = value.trim();
    if (hasOnlyDigits(trimmed)) {
      if (
        // allow string numbers but default to number
        (trimmed[0] === "'" && trimmed[trimmed.length - 1] === "'") ||
        (trimmed[0] === '"' && trimmed[trimmed.length - 1] === '"')
      ) {
        return trimmed.slice(1, -1);
      }
      return Number(trimmed);
    }
    return trimmed;
  };
  const [array, setArray] = useState<(string | number)[]>(
    value.split(",").map((item) => tryParseInt(item))
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    const newArray = event.target.value
      .split(",")
      .map((item) => tryParseInt(item));
    setArray(newArray);
    onArrayChange(newArray);
  };
  return (
    <div className="flex flex-col items-start justify-center w-full space-y-2">
      <div className="flex items-center w-full">
        <Input
          type="text"
          placeholder="Enter integers/strings separated by commas"
          aria-label="Array input"
          readOnly={readOnly}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <p className="text-xsm">{JSON.stringify(array, null, 2)}</p>
      </div>
    </div>
  );
};
