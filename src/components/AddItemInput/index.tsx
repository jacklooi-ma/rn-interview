import { KeyboardEvent, useState } from "react";
import Button from "../Button";
import {
  Wrapper,
  Input
} from "./styled";

interface Props {
  placeholder: string;
  showRemove?: boolean;
  onAddItem: (value: string) => void;
  onCancel?: () => void;
}

export default function AddItemInput({
  placeholder,
  showRemove,
  onAddItem,
  onCancel
}: Props) {
  const [value, setValue] = useState<string>("");

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddItem(value);
    }
  }

  return (
    <Wrapper>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
      <Button tabIndex={0} onClick={() => onAddItem(value)}>
        新增
      </Button>
      {showRemove && onCancel &&
        <Button
          tertiary
          onClick={onCancel}
        >
          取消
        </Button>
      }
    </Wrapper>
  );
}